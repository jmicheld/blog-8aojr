import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const cardColors = [
    "#0a3d0a", // verde escuro para card (escuro pra destacar no preto)
    "#134613",
    "#1b5e1b",
    "#216821",
    "#2a7a2a",
    "#328032",
    "#3a8a3a"
  ];

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };
    getPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <>
      <Header />

      <main className="flex flex-col items-center min-h-screen bg-black px-4 py-10">
        
        {posts.length === 0 ? (
          <div className="text-lg text-green-300 animate-pulse">Carregando posts...</div>
        ) : (
          <>
            <div className="w-full max-w-3xl space-y-6">
              {currentPosts.map((post, index) => {
                const bgColor = cardColors[index % cardColors.length];

                return (
                  <div
                    key={post.id}
                    className="rounded-xl shadow-md p-6 border border-green-700 hover:shadow-lg transition-shadow"
                    style={{ backgroundColor: bgColor }}
                  >
                    <h2 className="text-2xl font-semibold mb-2" style={{ color: "#d0f0c0" }}>
                      {post.title}
                    </h2>
                    <p className="mb-4" style={{ color: "#c8e6c9" }}>
                      {post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body}
                    </p>
                    <Link
                      to={`/post/${post.id}`}
                      className="inline-block mt-2 px-4 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition"
                    >
                      Leia +
                    </Link>
                  </div>
                );
              })}
            </div>

            {/* Paginação */}
            <div className="flex items-center gap-2 mt-10">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700 disabled:opacity-50 transition"
              >
                Anterior
              </button>
              <span className="px-4 py-2 bg-gray-900 rounded shadow text-green-400 font-semibold">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded bg-green-600 text-white font-bold hover:bg-green-700 disabled:opacity-50 transition"
              >
                Próxima
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}
