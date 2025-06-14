import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";

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

      <main className="flex flex-col items-center min-h-screen bg-blue-100 px-4 py-10">
        {loading ? (
          <div className="text-lg text-blue-600 animate-pulse">Carregando post...</div>
        ) : post ? (
          <article className="w-full max-w-3xl bg-white rounded-xl shadow-md p-8 border border-blue-300">
            <h1 className="text-4xl font-bold mb-6 text-blue-900">{post.title}</h1>
            <p className="text-lg leading-relaxed mb-8 text-blue-800">{post.body}</p>
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Voltar
            </Link>
          </article>
        ) : (
          <div className="text-red-600">Post não encontrado.</div>
        )}
      </main>
    </>
  );
}
