import Product from "./Product.jsx";

function ProductTab() {
  return (
    <>
      <Product tittle="Laptop" price={40000} />
      <Product tittle="Mobile" price={30000} />
      <Product tittle="Pen" price={10} />
    </>
  );
}

export default ProductTab;
