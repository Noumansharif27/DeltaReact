import "./Product.css";

function Product({ tittle, price, feature }) {
  return (
    <div className="Product">
      <h1>{tittle}</h1>
      <p>{price}</p>
      <p>{feature}</p>
      {/* <p>{feature2.a}</p> */}
    </div>
  );
}

export default Product;
