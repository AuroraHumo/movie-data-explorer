import { Routes, Route } from 'react-router-dom';

import Layout from '../app/Layout';
import Home from '../components/Home'
import StarshipFetcher from '../components/StarshipFetcher';
import './App.css'


export default function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<StarshipFetcher />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </Layout>
  );
}

