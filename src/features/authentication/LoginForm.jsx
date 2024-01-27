import { useState } from 'react';
import { loginUser } from '../../services/api';
import './LoginForm.css';
import Logo from '../../ui/Logo';
import { useNavigate } from 'react-router-dom';
import { emailRegex } from '../../constants';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter valid email address';
      valid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      valid = false;
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password =
        'Password must contain at least one uppercase letter';
      valid = false;
    } else if (!/[a-z]/.test(password)) {
      newErrors.password =
        'Password must contain at least one lowercase letter';
      valid = false;
    } else if (!/\d/.test(password)) {
      newErrors.password = 'Password must contain at least one number';
      valid = false;
    } else if (!/[@$!%*?&]/.test(password)) {
      newErrors.password =
        'Password must contain at least one special character';
      valid = false;
    }

    setError(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!email || !password) return;

    if (validateForm()) {
      loginUser(email, password);
      navigate('/');

      setFormData({ email: '', password: '' });
      setError({ email: '', password: '' });
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <section className="login-block">
      <div className="form-top">
        <Logo />
        <h3 className="login-title">Login in to your account</h3>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-list">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            name="email"
            className="form-input"
            onChange={handleChange}
          />
          {error.email && <p className="form-error">{error.email}</p>}
        </div>
        <div className="form-list">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            name="password"
            onChange={handleChange}
          />
          {error.password && <p className="form-error">{error.password}</p>}
        </div>

        <div className="form-btn">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
