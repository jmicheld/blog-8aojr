import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import "../css/style.css";

export function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Erro ao buscar post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <>
      <Header />

      <main className="main-container">
        {loading ? (
          <div className="loading-text">Carregando post...</div>
        ) : post ? (
          <article className="post-card" style={{ backgroundColor: "#dbeafe" }}>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-body">{post.body}</p>
            <Link to="/" className="back-link">
              Voltar
            </Link>
          </article>
        ) : (
          <div style={{ color: "#b91c1c" }}>Post não encontrado.</div>
        )}
      </main>
    </>
  );
}
