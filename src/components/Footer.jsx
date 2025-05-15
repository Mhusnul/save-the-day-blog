import { useState } from "react";
import blogPosts from "../data/posts";
import { Search } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Footer = () => {
  const latestPosts = blogPosts.slice(-3).reverse(); // 3 latest posts
  const sliderPosts = blogPosts.slice(0, 3);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Search for: ${searchTerm}`);
    // nanti bisa dikoneksikan ke halaman search/filter
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Kolom 1 */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4">SaveTheDay</h2>
          <p className="text-sm mb-6">
            Save the Day is a modern blog that delivers daily inspiration across
            lifestyle, technology, design, and entertainment. We believe that
            every day is a new opportunity to learn, grow, and enjoy the little
            things that make life meaningful. From productivity tips to reviews
            of the latest trends, this blog is here to help you save the day —
            one helpful article at a time.
          </p>
        </div>

        {/* Kolom 2 - Latest Posts */}
        <div>
          <h3 className="text-white font-semibold mb-4">Latest </h3>
          <ul>
            {latestPosts.map((post) => (
              <li key={post.id} className="flex items-center mb-4 space-x-3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-16 h-12 object-cover rounded"
                />
                <div>
                  <p className="text-sm">{post.title}</p>
                  <p className="text-xs text-gray-400">{post.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Kolom 3 - Slider Widget */}
        <div>
          <h3 className="text-white font-semibold mb-4">Tranding</h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="h-36"
          >
            {sliderPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div
                  className="relative h-full bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${post.image})` }}
                >
                  <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-2 text-sm rounded-b w-full">
                    {post.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Kolom 4 - Search */}
        <div>
          <h3 className="text-white font-semibold mb-4">Search the Site</h3>
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-800 rounded overflow-hidden"
          >
            <input
              type="text"
              className="flex-grow px-3 py-2 bg-gray-800 text-gray-200 placeholder-gray-400 focus:outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="px-3 text-pink-500 hover:text-pink-400"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs">
        &copy; 2025 savetheday. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
