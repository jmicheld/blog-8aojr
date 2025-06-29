import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import "../css/style.css";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const [usuario, setUsuario] = useState(null);
  const [message, setMessage] = useState(null);

  const cardColors = [
    "#f9fafb", "#f3f4f6", "#e5e7eb",
    "#d1d5db", "#9ca3af", "#6b7280", "#374151"
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

    const getUsuario = async () => {
      try {
        const response = await fetch("https://randomuser.me/api");
        const data = await response.json();
        setUsuario(data.results[0]);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    getPosts();
    getUsuario();
    getNumero();
  }, []);

  const atualizarUsuario = async () => {
    try {
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      setUsuario(data.results[0]);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };


    const getNumero = async () => {
      try {
        const response = await fetch("https://api-numeros-da-sorte.onrender.com/random");
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

  const atualizarNumero = async () => {
    try {
      const response = await fetch("https://api-numeros-da-sorte.onrender.com/random");
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };


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

        {/* Usuário aleatório da API */}
        <div className="post-card" style={{ backgroundColor: "#fef3c7" }}>
          <h2 className="post-title">Usuário Aleatório</h2>

          {usuario ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={usuario.picture.medium} alt="Usuário" style={{ borderRadius: '50%' }} />
              <div>
                <p><strong>Nome:</strong> {usuario.name.first} {usuario.name.last}</p>
                <p><strong>Email:</strong> {usuario.email}</p>
                <p><strong>Local:</strong> {usuario.location.city}, {usuario.location.country}</p>
                <p><strong>Celular:</strong> {usuario.cell}</p>
              </div>
            </div>
          ) : (
            <p>Carregando usuário...</p>
          )}

          <button onClick={atualizarUsuario} className="btn" style={{ marginTop: '1rem' }}>
            Gerar novo usuário
          </button>
        </div>


        {/* Numero Aleatorio API */}
        <div className="post-card" style={{ backgroundColor: "#fef3c7" }}>
          <h2 className="post-title">Numero da Sorte</h2>

          {message ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div>
                <p><strong>Numeros:</strong> {message.join(", ")}</p>
              </div>
            </div>
          ) : (
            <p>Carregando numeros...</p>
          )}

          <button onClick={atualizarNumero} className="btn" style={{ marginTop: '1rem' }}>
            Gerar novos numeros
          </button>
        </div>

        {/* Lista de Posts */}
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
                      {post.body.length > 100
                        ? post.body.slice(0, 100) + "..."
                        : post.body}
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
