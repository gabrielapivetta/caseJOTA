import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  const handleCreateNews = () => {
    navigate('/create-news');
  };

  const handleEditNews = () => {
    navigate('/edit-news');
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  const isAuthenticated = !!localStorage.getItem('access_token'); // Verifica se o usuário está autenticado


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/news/');
        console.log("Resposta da API:", response.data);

        setNews(Array.isArray(response.data.news) ? response.data.news : []);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h1>Notícias</h1>
      <button onClick={() => navigate('/login')}>Login</button>
      {isAuthenticated && (
        <>
          <button onClick={handleCreateNews}>Cadastrar Notícias</button>
          <button onClick={handleEditNews}>Editar Notícias</button>
          <button onClick={handleLogout}>Sair</button>
        </>
      )}
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <img src={item.image} alt={item.title} />
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;