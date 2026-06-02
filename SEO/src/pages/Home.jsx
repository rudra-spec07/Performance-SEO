// function Home() {
//   return (
//     <section>
//       <h1 className="text-3xl font-bold mb-3">
//         Home Page
//       </h1>

//       <p>Welcome to our React SEO demo app.</p>
//     </section>
//   );
// }

// export default Home;

import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <section>
      <Helmet>
        <title>SEO Demo | Home</title>

        <meta
          name="description"
          content="Welcome to our React SEO demo homepage."
        />

        <meta
          property="og:title"
          content="SEO Demo Home"
        />

        <meta
          property="og:description"
          content="Learn React SEO basics."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-3">
        Home Page
      </h1>

      <p>Welcome to our SEO optimized React app.</p>
    </section>
  );
}

export default Home;