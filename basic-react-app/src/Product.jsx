import "./Product.css";

function Product({ tittle, description, price }) {
  return (
    <div className="Product">
      <h4>{tittle}</h4>
      {description.map((element) => (
        <li>{element}</li>
      ))}
      <p claaName="ProductPrice">
        <span>{price.new}</span>
        <span style={{ textDecoration: "line-through" }}>{price.old}</span>
      </p>
    </div>
  );
}

export default Product;
