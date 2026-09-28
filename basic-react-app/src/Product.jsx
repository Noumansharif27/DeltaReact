import "./Product.css";

function Product({ tittle, price }) {
  return (
    <div className="Product">
      <h1>{tittle}</h1>
      <p>{price}</p>
    </div>
  );
}

export default Product;
