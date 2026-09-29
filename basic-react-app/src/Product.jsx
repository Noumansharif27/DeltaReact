import "./Product.css";

function Product({ tittle, price }) {
  let isDiscount = price >= 30000;
  let styles = { backgroundColor: isDiscount ? "pink" : "yellow" };
  return (
    <div className="Product" style={styles}>
      <h1>{tittle}</h1>
      <p>{price}</p>
      {isDiscount && <p>Discount 5%</p>}
    </div>
  );
}

export default Product;
