import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function buscarPalavraAleatoria() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://fiap-bff-8aojr.onrender.com/ask', true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const resposta = JSON.parse(xhr.responseText);
      document.getElementById('palavra').textContent = resposta.message;
    } else {
      document.getElementById('palavra').textContent = 'Erro ao buscar palavra.';
    }
  };

  xhr.onerror = function () {
    document.getElementById('palavra').textContent = 'Erro de conexão.';
  };

  xhr.send();
}

document.addEventListener('DOMContentLoaded', function () {
  buscarPalavraAleatoria();

  document
    .getElementById('nova-palavra')
    .addEventListener('click', buscarPalavraAleatoria);
});

