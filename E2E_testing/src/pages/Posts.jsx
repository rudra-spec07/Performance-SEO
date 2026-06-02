import { useState } from "react";

export default function Posts() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ]);

  const nextPage = async () => {
    const res = await fetch("/api/posts?page=2");
    const data = await res.json();

    setPosts(data);
    setPage(2);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">
        Page {page}
      </h1>

      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="border p-2"
          >
            {post.title}
          </li>
        ))}
      </ul>

      <button
        data-cy="next-page"
        onClick={nextPage}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Next
      </button>
    </div>
  );
}