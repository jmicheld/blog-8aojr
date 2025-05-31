import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Header } from "../components/Header.jsx";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
    };
    getPosts();
  }, []);

  // Lógica de paginação
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <>
      <Header />

      <div className="flex flex-col items-center min-h-screen">
        {posts.length === 0 && (
          <div className="text-lg text-gray-600 mt-10 animate-pulse">
            Carregando posts...
          </div>
        )}

        <div className="w-full max-w-2xl space-y-6 mt-8">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-blue-700 mb-2">{post.title}</h2>
              <p className="text-gray-700">
                {post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body}
              </p>
              <NavLink
                to={`/post/${post.id}`}
                className="inline-block mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-md hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Ler post
              </NavLink>
            </div>
          ))}
        </div>

        {/* Paginação */}
        {posts.length > postsPerPage && (
          <div className="flex items-center gap-2 mt-10 mb-20">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-l bg-blue-500 text-white font-bold hover:bg-blue-600 disabled:opacity-50 transition"
            >
              Anterior
            </button>
            <span className="px-4 py-2 bg-gray-100 rounded text-gray-700 font-semibold">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-r bg-blue-500 text-white font-bold hover:bg-blue-600 disabled:opacity-50 transition"
            >
              Próxima
            </button>
          </div>
        )}
      </div>
    </>
  );
}