import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.png";
import post5 from "../assets/post5.png";
import post6 from "../assets/post6.png";

const blogPosts = [
  {
    id: 1,
    title: "Belajar React dari Nol",
    excerpt: "Panduan lengkap untuk pemula memulai React...",
    date: "2025-05-10",
    image: post1,
    content: "Ini adalah isi lengkap artikel tentang belajar React dari nol...",
    categories: ["Lifestyle", "Design"],
  },
  {
    id: 2,
    title: "Tailwind CSS untuk Desain Cepat",
    excerpt: "Tailwind bikin kamu bisa styling lebih cepat dan rapi...",
    date: "2025-05-12",
    image: post2,
    content:
      "Tailwind CSS membantu frontend developer membuat desain lebih efisien...",
    categories: ["Design"],
  },
  {
    id: 3,
    title: "Tips Menulis Blog yang Menarik",
    excerpt: "Pahami audiensmu dan tulis konten yang bernilai...",
    date: "2025-05-14",
    image: post3,
    content: "Tips dan teknik menulis blog yang engaging dan informatif...",
    categories: ["Lifestyle", "Music"],
  },
  {
    id: 4,
    title: "Panduan Memulai Karir Frontend Developer",
    excerpt: "Langkah-langkah untuk jadi frontend developer profesional...",
    date: "2025-05-15",
    image: post4,
    content:
      "Artikel ini membahas skill, tools, dan tips penting untuk frontend developer pemula hingga mahir.",
    categories: ["Features", "Lifestyle"],
  },
  {
    id: 5,
    title: "Teknik Optimasi Website dengan React",
    excerpt: "Cara meningkatkan performa aplikasi React kamu...",
    date: "2025-05-16",
    image: post5,
    content:
      "Pelajari teknik seperti lazy loading, memoization, dan code splitting untuk optimasi React apps.",
    categories: ["Features", "Design"],
  },
  {
    id: 6,
    title: "Mengenal Dunia Videogames: Sejarah dan Tren Terkini",
    excerpt: "Dari arcade hingga e-sports modern...",
    date: "2025-05-17",
    image: post6,
    content:
      "Artikel ini membahas perkembangan dunia videogames dan tren yang sedang naik daun.",
    categories: ["Videogames", "Lifestyle"],
  },
];

export default blogPosts;
