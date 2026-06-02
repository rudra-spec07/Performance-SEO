function ProductCard({ product }) {
  console.log("Rendered:", product.name);

  return (
    <article className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">
        {product.name}
      </h2>

      <p className="text-gray-600">
        Sample product description.
      </p>
    </article>
  );
}

export default ProductCard;