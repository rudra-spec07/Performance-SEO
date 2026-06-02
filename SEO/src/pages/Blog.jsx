// function Blog() {
//   return (
//     <section>
//       <h1 className="text-3xl font-bold mb-3">
//         Blog Page
//       </h1>

//       <p>Read latest React articles.</p>
//     </section>
//   );
// }

// export default Blog;


import { Helmet } from "react-helmet-async";

function Blog() {
  return (
    <section>
      <Helmet>
        <title>SEO Demo | Blog</title>

        <meta
          name="description"
          content="Read React and SEO related articles."
        />

        <meta
          property="og:title"
          content="SEO Demo Blog"
        />

        <meta
          property="og:description"
          content="Latest React SEO articles."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-3">
        Blog Page
      </h1>

      <p>Read latest React and SEO articles.</p>
    </section>
  );
}

export default Blog;