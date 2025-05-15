import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import blogPosts from "../data/posts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [replyTo, setReplyTo] = useState(null);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "" || username.trim() === "") return;

    const comment = {
      id: Date.now(),
      text: newComment.trim(),
      user: username.trim(),
      replies: [],
    };

    if (replyTo) {
      setComments((prevComments) =>
        prevComments.map((c) =>
          c.id === replyTo ? { ...c, replies: [comment, ...c.replies] } : c
        )
      );
      setReplyTo(null);
    } else {
      setComments([comment, ...comments]);
    }

    setNewComment("");
  };

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-10 flex justify-center items-center min-h-[60vh]">
          <p>Artikel tidak ditemukan.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-4">{post.date}</p>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-80 object-cover rounded mb-6"
          />
          <div className="prose max-w-none">
            {post.content.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Komentar */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Komentar</h2>

            <form
              onSubmit={handleCommentSubmit}
              className="flex flex-col space-y-3 mb-6"
            >
              <input
                type="text"
                placeholder="Nama Anda"
                className="border border-gray-300 rounded p-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <textarea
                className="border border-gray-300 rounded p-3 min-h-[100px]"
                placeholder="Tulis komentarmu..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                type="submit"
                className="self-end bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded"
              >
                {replyTo ? "Balas Komentar" : "Kirim Komentar"}
              </button>
            </form>

            {comments.length === 0 ? (
              <p className="text-gray-500">Belum ada komentar.</p>
            ) : (
              <ul className="space-y-4">
                {comments.map((comment) => (
                  <li
                    key={comment.id}
                    className="bg-gray-100 p-3 rounded shadow-sm"
                  >
                    <p className="font-semibold">{comment.user}</p>
                    <p>{comment.text}</p>
                    <button
                      onClick={() => {
                        setReplyTo(comment.id);
                        setNewComment("");
                      }}
                      className="text-sm text-pink-600 hover:underline mt-2"
                    >
                      Balas
                    </button>
                    {comment.replies.length > 0 && (
                      <ul className="mt-4 space-y-2 pl-4 border-l-2 border-gray-300">
                        {comment.replies.map((reply) => (
                          <li
                            key={reply.id}
                            className="bg-white p-2 rounded shadow"
                          >
                            <p className="font-semibold">{reply.user}</p>
                            <p>{reply.text}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            to="/"
            className="inline-block mt-10 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
          >
            ← Kembali ke Beranda
          </Link>
        </article>

        <Sidebar />
      </main>
    </>
  );
};

export default BlogDetail;
