import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNews = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('image', image);
        formData.append('content', content);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/news/', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Notícia criada:', response.data);
            navigate('/'); // Redireciona para a home após criar a notícia
        } catch (error) {
            console.error('Erro ao criar notícia:', error);
        }
    };

    return (
        <div>
            <h1>Cadastrar Notícia</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Subtítulo:</label>
                    <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required />
                </div>
                <div>
                    <label>Imagem:</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
                </div>
                <div>
                    <label>Conteúdo:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                </div>
                <button type="submit">Cadastrar Notícia</button>
            </form>
        </div>
    );
};

export default CreateNews;
