import Product from "./Product.jsx";

function ProductTab() {
  let options = [<i>"high-tech"</i>,<i>"durable"</i>,<i>"fast"</i>]
  // let options2 = {a:"high-tech",b: "durable",c: "fast"}
  return (
    <>
      <Product tittle="Laptop" price={40000} feature={options} />
      {/* <Product tittle="Mobile" price={30000} />
      <Product tittle="Pen" price={10} /> */}
    </>
  );
}

export default ProductTab;
