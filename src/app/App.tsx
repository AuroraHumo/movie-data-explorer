import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/Layout';
import Home from '../pages/Home'
import { MovieFetcher } from '../hooks/MovieFetcher';
import  {InfiniteMoviesQuery}  from '../hooks/InfiniteMoviesQuery';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from '../pages/ProtectedRoute';

import './App.css'
import LogOrRegister from '../pages/LogOrRegister';
import ErrorPage from '../pages/ErrorPage';


export default function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={
            <ProtectedRoute>
              <MovieFetcher />
            </ProtectedRoute> } />
          <Route path="/movies-full-list" element={
            <ProtectedRoute>
              <InfiniteMoviesQuery />
            </ProtectedRoute> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logOrRegister" element={<LogOrRegister />} />
          <Route path="*" element={<ErrorPage error={null} />} />
        </Routes>
    </Layout>
  );
}

