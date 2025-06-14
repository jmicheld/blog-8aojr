import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";

export function Post() {
  const { id } = useParams(); // pega o ID da URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [id]);

  if (loading) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-fiap-gray">
        <Header />
        <div className="text-lg text-gray-600 mt-20 animate-pulse">Carregando post...</div>
      </main>
    );
  }

  if (!post?.id) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-fiap-gray">
        <Header />
        <div className="text-lg text-red-600 mt-20">Post não encontrado.</div>
      </main>
    );
  }

  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen bg-fiap-gray px-4 py-10">
        <article className="bg-white p-8 rounded-xl shadow-md max-w-3xl w-full border border-gray-200">
          <h1 className="text-3xl font-bold text-fiap-red mb-4">{post.title}</h1>
          <p className="text-gray-800 leading-relaxed">{post.body}</p>
          <Link
            to="/"
            className="inline-block mt-8 px-6 py-2 bg-fiap-red text-white rounded hover:bg-fiap-black transition"
          >
            ← Voltar para posts
          </Link>
        </article>
      </main>
    </>
  );
}
