import axios from 'axios';
import sha256 from 'crypto-js/sha256';

// URL's endpoints
const LOGIN_URL = 'https://apiv2stg.promilo.com/user/oauth/token';
const PRODUCT_LIST_URL =
  'https://api.kalpav.com/api/v1/product/category/retail';

// Login user

const loginUser = async (email, password) => {
  try {
    // Hash the password using SHA-256
    const hashedPassword = sha256(password).toString();

    // Create FormData object
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', hashedPassword);
    formData.append('grant_type', 'password');

    const response = await axios.post(LOGIN_URL, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==',
      },
    });
    // Check if response contains access token
    if (response.data && response.data.access_token) {
      // Store access token in localStorage
      localStorage.setItem('accessToken', response.data.access_token);
      return response.data;
    } else {
      throw new Error('Invalid response received from server');
    }
  } catch (error) {
    // Handle login error
    console.error('Error logging in:', error);
    throw new Error('Unable to login. Please try again later.');
  }
};
// Fetch product list

const fetchProductList = async () => {
  // Retrieve access token from localStorage
  const accessToken = localStorage.getItem('accessToken');
  try {
    const response = await axios.get(PRODUCT_LIST_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product list:', error);
    throw new Error('Unable to fetch product list');
  }
};

export { loginUser, fetchProductList };
