import { Link } from 'react-router-dom';
import Button from './Button';

const Home = () => {

    return (
        <div className="flex flex-col sm:flex-row justify-center items-stretch h-screen overflow-hidden">
            <div className="flex-1 flex items-center justify-baseline z-0">
                <img className=" max-w-full " src="src\assets\star-wars.webp" alt="Intro" />
            </div>
            <div className="flex-1 justify-center items-stretch z-1 mt-2">
                <div className="flex-1 flex flex-col justify-center text-3xl sm:text-5xl font-zen-dots-bold">
                    <h2>STAR WARS</h2>
                    <h2>Data Explorer</h2>
                    <h2>Welcome</h2>
                </div>
                <div className="flex-1 flex justify-center mt-10 sm:mt-30">
                    <Link to="/starships">
                        <Button type="button">Discover the starships!</Button>
                    </Link>
                </div>
            </div>
        </div>

    );

}

export default Home;