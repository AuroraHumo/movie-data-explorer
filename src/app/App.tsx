import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from '../app/Layout';
import Home from '../components/Home'
import Starships from '../components/Starships';
import './App.css'


export default function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    </Layout>
  );
}

