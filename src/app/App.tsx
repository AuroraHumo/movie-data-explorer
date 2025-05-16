import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import Home from '../pages/Home'
import StarshipFetcher from '../hooks/StarshipFetcher';
import { MovieFetcher } from '../hooks/MovieFetcher';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from '../pages/ProtectedRoute';

import './App.css'
import LogOrRegister from '../pages/LogOrRegister';
import ErrorPage from '../pages/Errorpage';


export default function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={
            <ProtectedRoute>
              <StarshipFetcher />
            </ProtectedRoute> } />
          <Route path="/movies" element={
            <ProtectedRoute>
              <MovieFetcher />
            </ProtectedRoute> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logOrRegister" element={<LogOrRegister />} />
          <Route path="*" element={<ErrorPage error={null} />} />
        </Routes>
    </Layout>
  );
}

