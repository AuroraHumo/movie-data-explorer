
export const MovieFetcher = async () => {

    // 🔐 Atenció: Aquesta clau és pública només per proves. No és segur per producció!
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_TMDB_API_KEY,
  }
};

fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

  return (
    <div>
      <h1>Movie Fetcher</h1>
      <p>Check the console for movie data.</p>
    </div>
  );
}