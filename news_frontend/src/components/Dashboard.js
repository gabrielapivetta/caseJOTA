import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ role }) => {
  const [news, setNews] = useState<Array>([]);
  const [form, setForm] = useState({ title: '', subtitle: '', image: '', content: '' });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/news/');
        setNews(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };
    fetchNews();
  }, []);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreateNews = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/api/news/', form, {
        headers: { Authorization: `Bearer ${localStorage.getItem('access_token')}` },
      });
      alert("Notícia criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar notícia:", error);
    }
  };

  return (
    <div>
      <h1>Painel de {role === 'admin' ? 'Admin' : 'Editor'}</h1>
      {role !== 'reader' && (
        <div>
          <h2>Criar Notícia</h2>
          <input name="title" placeholder="Título" onChange={handleInputChange} />
          <input name="subtitle" placeholder="Subtítulo" onChange={handleInputChange} />
          <input name="image" placeholder="URL da Imagem" onChange={handleInputChange} />
          <textarea name="content" placeholder="Conteúdo" onChange={handleInputChange} />
          <button onClick={handleCreateNews}>Cadastrar Notícia</button>
        </div>
      )}
      <ul>
        {news.length > 0 ? (
          news.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.subtitle}</p>
              <img src={item.image} alt={item.title} />
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <p>Nenhuma notícia encontrada.</p>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
