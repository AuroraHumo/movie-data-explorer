export const MovieFetcher = async () => {
  
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  }
};

fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

}