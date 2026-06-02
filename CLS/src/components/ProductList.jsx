// import ProductCard from "./ProductCard";

// const products = Array.from(
//   { length: 20 },
//   (_, i) => ({
//     id: i,
//     name: `Product ${i + 1}`,
//   })
// );

// function ProductList() {
//   const sortedProducts = products.sort(() => {
//     for (let i = 0; i < 5000000; i++) {}
//     return Math.random() - 0.5;
//   });

//   return (
//     <section className="grid md:grid-cols-3 gap-4">
//       {sortedProducts.map((product) => (
//         <ProductCard
//           key={product.id}
//           product={product}
//         />
//       ))}
//     </section>
//   );
// }

// export default ProductList;

import { useMemo } from "react";
import ProductCard from "./ProductCard";

const products = Array.from(
  { length: 20 },
  (_, i) => ({
    id: i,
    name: `Product ${i + 1}`,
  })
);

function ProductList() {
  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }, []);

  return (
    <section className="grid md:grid-cols-3 gap-4">
      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}

export default ProductList;