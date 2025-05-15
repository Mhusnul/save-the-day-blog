import { Link } from "react-router-dom";
import blogPosts from "../data/posts";

const Sidebar = () => {
  // Contoh kategori
  const categories = [
    "Lifestyle",
    "Design",
    "Videogames",
    "Music",
    "Travel",
    "Photography",
  ];

  // Contoh komentar recent (dummy)
  const recentComments = [
    {
      id: 1,
      author: "Alice",
      postTitle: "Belajar React dari Nol",
      comment: "Artikel ini sangat membantu!",
    },
    {
      id: 2,
      author: "Budi",
      postTitle: "Tailwind CSS untuk Desain Cepat",
      comment: "Nice tips, thanks!",
    },
  ];

  // Ambil 3 artikel popular (asumsi sorted by date terbaru)
  const popularPosts = blogPosts.slice(0, 3);

  return (
    <aside className="w-full md:w-80 px-4 space-y-8">
      {/* Popular Posts */}
      <div>
        <h3 className="font-semibold mb-4">Popular Posts</h3>
        <ul className="space-y-3">
          {popularPosts.map((post) => (
            <li key={post.id}>
              <Link
                to={`/blog/${post.id}`}
                className="flex items-center space-x-3 hover:text-pink-600"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-sm font-medium">{post.title}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className="px-3 py-1 text-xs bg-gray-200 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Comments */}
      <div>
        <h3 className="font-semibold mb-4">Recent Comments</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          {recentComments.map((c) => (
            <li key={c.id}>
              <p>
                <span className="font-semibold">{c.author}</span> on{" "}
                <Link to="/" className="hover:text-pink-600 underline">
                  {c.postTitle}
                </Link>
              </p>
              <p className="italic text-gray-500 text-xs truncate max-w-xs">
                {c.comment}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
