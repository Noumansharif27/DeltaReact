import Product from "./Product.jsx";

function ProductTab() {
  // let options = [<li>"high-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];
  let options = ["high-tech", "durable", "fast"];
  let UpdatedOptions = options.map((feature) => <li>{feature}</li>);
  // let options2 = {a:"high-tech",b: "durable",c: "fast"}
  return (
    <>
      <Product tittle="Laptop" price={40000} feature={UpdatedOptions} />
      {/* <Product tittle="Mobile" price={30000} />
      <Product tittle="Pen" price={10} /> */}
    </>
  );
}

export default ProductTab;
