export const MovieFetcher = async () => {
  
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWRiZTdmYjUzZTM1OTgxZThlMGQzYTc1ZDQ3NTNmZiIsIm5iZiI6MS43NDczMzMxMzM0MzUwMDAyZSs5LCJzdWIiOiI2ODI2MzAwZDIwNDE1ZjllMjg0YjU1MDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-t2A8k6bxtm_xRqmlk11i0FJUbqw6V4Iho4jrjMkTwo'
  }
};

fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

}