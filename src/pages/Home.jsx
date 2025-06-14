import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import "../css/style.css";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const cardColors = [
    "#dbeafe",
    "#bfdbfe",
    "#93c5fd",
    "#60a5fa",
    "#3b82f6",
    "#2563eb",
    "#1e40af",
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

      <main className="main-container">
        
        {posts.length === 0 ? (
          <div className="loading-text">Carregando posts...</div>
        ) : (
          <>
            <div>
              {currentPosts.map((post, index) => {
                const bgColor = cardColors[index % cardColors.length];

                return (
                  <div
                    key={post.id}
                    className="post-card"
                    style={{ backgroundColor: bgColor }}
                  >
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-body">
                      {post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body}
                    </p>
                    <Link to={`/post/${post.id}`} className="btn">
                      Leia +
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="pagination">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="btn"
              >
                Anterior
              </button>
              <span className="page-indicator">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="btn"
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
