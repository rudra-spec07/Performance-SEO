// function About() {
//   return (
//     <section>
//       <h1 className="text-3xl font-bold mb-3">
//         About Page
//       </h1>

//       <p>Learn about our company.</p>
//     </section>
//   );
// }

// export default About;

import { Helmet } from "react-helmet-async";

function About() {
  return (
    <section>
      <Helmet>
        <title>SEO Demo | About</title>

        <meta
          name="description"
          content="Learn more about our company and services."
        />

        <meta
          property="og:title"
          content="About SEO Demo"
        />

        <meta
          property="og:description"
          content="About our React SEO project."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-3">
        About Page
      </h1>

      <p>Learn more about our company.</p>
    </section>
  );
}

export default About;