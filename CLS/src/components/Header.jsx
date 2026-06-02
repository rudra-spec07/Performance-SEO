// function Header() {
//   return (
//     <header className="mb-8 text-center">
//       <img
//         src="https://picsum.photos/800/300"
//         alt="Banner"
//         className="rounded-lg mb-4"
//       />

//       <h1 className="text-4xl font-bold">
//         Product Showcase
//       </h1>
//     </header>
//   );
// }

// export default Header;

function Header() {
  return (
    <header className="mb-8 text-center">
      <img
        src="https://picsum.photos/800/300"
        alt="Banner"
        width="800"
        height="300"
        loading="eager"
        decoding="async"
        className="w-full max-w-4xl mx-auto rounded-lg mb-4"
      />

      <h1 className="text-4xl font-bold">
        Product Showcase
      </h1>
    </header>
  );
}

export default Header;