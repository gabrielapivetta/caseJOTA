import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import CreateNews from './components/CreateNews';
import Dashboard from './components/Dashboard';

function App() {
    const userRole = localStorage.getItem('user_role'); // Salvar o papel do usuário no localStorage após o login
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard role={userRole} />} />
                <Route path="/create-news" element={<CreateNews />} />
            </Routes>
        </Router>
    );
}

export default App;