import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Navigasi ke halaman home yang akan otomatis filter berdasarkan searchTerm
      navigate("/");
    }
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Lifestyle", path: "/category/lifestyle" },
    { name: "Videogames", path: "/category/videogames" },
    { name: "Design", path: "/category/design" },
    { name: "Music", path: "/category/music" },
  ];

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">SaveTD</h1>
          <p className="text-xs text-gray-400 -mt-1">LUXURY MODERN MAGAZINE</p>
        </div>

        {/* SEARCH BAR */}
        <div className="w-1/3 h-10 bg-gray-100 rounded-md hidden md:flex items-center px-3">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Cari artikel..."
            className="bg-transparent w-full outline-none text-sm"
          />
        </div>
      </div>

      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-12">
          <ul className="flex items-center space-x-6 text-sm font-medium uppercase">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`px-2 py-1 ${
                    location.pathname === item.path
                      ? "text-pink-500 border-b-2 border-pink-500"
                      : "hover:text-pink-400"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
