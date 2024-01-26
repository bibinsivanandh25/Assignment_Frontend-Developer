import './ProductItem.css';

const ProductItem = ({
  product: {
    productCategory: { productCategoryName, productCategoryImage },
  },
}) => {
  return (
    <div className="productItem">
      <img src={productCategoryImage} alt={productCategoryName} />
      <div>
        <h4 className="product-heading">{productCategoryName}</h4>
      </div>
    </div>
  );
};

export default ProductItem;
