import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-10 min-h-[calc(100vh-100px)]">

      <div className="sm:w-1/2 flex justify-center">
        <img
          src="src\assets\gatis.jpg"
          alt="Cute cats"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>

      <div className="sm:w-1/2 text-center space-y-6">
        <div className="text-7xl sm:text-9xl font-bold mb-6 font-zen-dots-bold">
          <h1>IMDB</h1>
          <h2 className="text-3xl sm:text-5xl">Movie Database</h2>
        </div>
        <Link to="/movies">
          <Button type="button">Discover trending movies</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
