import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/posts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const POSTS_PER_PAGE = 4;

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter((post) =>
    post.categories?.includes(categoryName)
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Hitung post yang ditampilkan berdasarkan halaman
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll ke atas saat ganti halaman
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        <section>
          <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
          {filteredPosts.length === 0 ? (
            <p>Tidak ada artikel di kategori ini.</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentPosts.map((post) => (
                  <Link
                    to={`/blog/${post.id}`}
                    key={post.id}
                    className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="font-semibold text-lg">{post.title}</h2>
                      <p className="text-sm text-gray-600">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="flex justify-center mt-8 space-x-2">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-pink-600 hover:text-white transition"
                >
                  Prev
                </button>

                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx + 1}
                    onClick={() => goToPage(idx + 1)}
                    className={`px-3 py-1 rounded ${
                      currentPage === idx + 1
                        ? "bg-pink-600 text-white"
                        : "bg-gray-200 hover:bg-pink-600 hover:text-white"
                    } transition`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 hover:bg-pink-600 hover:text-white transition"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </section>
        <Sidebar />
      </main>
    </>
  );
};

export default CategoryPage;
