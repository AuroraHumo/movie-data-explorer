import type { MovieInterface } from "../interfaces/MovieInterface";

const fetchOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_TMDB_API_KEY,
  },
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const InfiniteGetMovies = async ({ pageParam = 1 }) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?page=${pageParam}`,
      fetchOptions
    );

    const data = await res.json();

    const detailedMovies: MovieInterface[] = await Promise.all(
      data.results.map(async (movie: MovieInterface) => {
        const [detailsRes, creditsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}`, fetchOptions),
          fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits`, fetchOptions),
        ]);

        const details = await detailsRes.json();
        const credits = await creditsRes.json();

        return {
          ...movie,
          details,
          cast: credits.cast.slice(0, 6),
        };
      })
    );

    // Simula un delay (opcional, per veure spinner)
    await delay(1000);

    return {
      movies: detailedMovies,
      nextPage: pageParam + 1,
      totalPages: data.total_pages,
    };
  } catch (error) {
    throw new Error("Error carregant pel·lícules: " + (error as Error).message);
  }
};
