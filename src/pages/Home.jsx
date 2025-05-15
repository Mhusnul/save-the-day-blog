import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import blogPosts from "../data/posts";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const { searchTerm } = useContext(SearchContext);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    const filtered = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <HeroSlider />
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="border rounded-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No posts found.
            </p>
          )}
        </div>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
};

export default Home;
