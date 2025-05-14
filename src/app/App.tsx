import { Routes, Route } from 'react-router-dom';

import Layout from '../app/Layout';
import Home from '../components/Home'
import StarshipFetcher from '../components/StarshipFetcher';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from '../components/ProtectedRoute';

import './App.css'
import LogOrRegister from '../pages/LogOrRegister';

export default function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={
            <ProtectedRoute>
              <StarshipFetcher />
            </ProtectedRoute> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logOrRegister" element={<LogOrRegister />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </Layout>
  );
}

