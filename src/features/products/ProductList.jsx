import { useEffect, useState } from 'react';
import { fetchProductList } from '../../services/api';
import Header from '../../ui/Header';
import ProductItem from './ProductItem';
import './ProductList.css';
// import { IoIosSearch } from 'react-icons/io';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchProductList();
        setProducts(data.response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products?.filter((product) =>
    product?.productCategory?.productCategoryName
      .toLowerCase()
      .includes(searchTerm?.toLowerCase())
  );

  return (
    <section className="productList">
      <Header />
      <div className="product-search">
        <input
          className="product-input"
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search your product name"
        />
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="productListBlock">
          {filteredProducts?.map((product) => (
            <ProductItem key={product?.orderIndex} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
