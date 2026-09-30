import Product from "./Product.jsx";

function ProductTab() {
  return (
    <div className="ProductTab">
      <Product
        tittle="Logitech MX Master 35"
        description={["8000 DPI", "5 functional buttons"]}
        price={{ old: [19, 99], new: [15, 99] }}
      />
      <Product
        tittle="Apple Pencil 2nd Gen"
        description={["Intutive touch serface", "Design for iPad Pro"]}
        price={{ old: [9, 99], new: [5, 99] }}
      />
      <Product
        tittle="Zebronic Zeb-Transformar"
        description={[
          "Smooth Buttons",
          "Always better feels to be out on grass",
        ]}
        price={{ old: [109, 99], new: [105, 99] }}
      />
      <Product
        tittle="Portonic Tod 23, WIreless Mouse"
        description={["2 days power Backup", "Smoot like butter"]}
        price={{ old: [29, 99], new: [17, 99] }}
      />
    </div>
  );
}

export default ProductTab;
