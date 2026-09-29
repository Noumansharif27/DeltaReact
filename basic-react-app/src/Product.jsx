import "./Product.css";

function Product({ tittle, price }) {
  return (
    <div className="Product">
      <h1>{tittle}</h1>
      <p>{price}</p>
      {price >= 40000 && <p>Discount 5%</p>}
    </div>
  );
}

export default Product;
