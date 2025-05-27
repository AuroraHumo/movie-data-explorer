import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MovieList from "../pages/MovieList";
import type { MovieInterface } from "../interfaces/MovieInterface";

const mockMovies: MovieInterface[] = [
  {
    id: 1234,
    title: "Inception",
    release_date: "2010-07-16",
    original_language: "en",
    vote_average: 8.8,
    backdrop_path: "/inception-backdrop.jpg",
    adult: false,
    genre_ids: [1, 2],
    original_title: "Inception",
    overview: "A thief who steals corporate secrets through dream-sharing technology...",
    popularity: 150.5,
    poster_path: "/inception-poster.jpg",
    video: false,
    vote_count: 22186,
    details: {
        adult: false,
        backdrop_path: "/inception-backdrop.jpg",
        budget: 160000000,
        genres: [
            { id: 1, name: "Action" },
            { id: 2, name: "Sci-Fi" },
        ],
        homepage: "https://www.inceptionmovie.com/",
        id: 1234,
        imdb_id: "tt1375666",
        original_language: "en",
        original_title: "Inception",
        overview: "A thief who steals corporate secrets through dream-sharing technology...",
        popularity: 150.5,
        poster_path: "/inception-poster.jpg",
        production_companies: [
            { id: 923, name: "Legendary Pictures", logo_path: null, origin_country: "US" },
            { id: 9996, name: "Syncopy", logo_path: null, origin_country: "GB" }
        ],
        production_countries: [
            { iso_3166_1: "US", name: "United States of America" }
        ],
        release_date: "2010-07-16",
        revenue: 825532764,
        runtime: 148,
        spoken_languages: [
            {
                iso_639_1: "en", name: "English",
                english_name: ""
            }
        ],
        status: "Released",
        tagline: "Your mind is the scene of the crime.",
        title: "Inception",
        video: false,
        vote_average: 8.8,
        vote_count: 22186,
        origin_country: []
    },
    cast: [
      {
          id: 1,
          name: "Leonardo DiCaprio",
          character: "Cobb",
          profile_path: "/leo.jpg",
          order: 0
      },
    ],
  },
];

describe("MovieList component", () => {
  it("renders movie titles correctly", () => {
    render(<MovieList movies={mockMovies} />);
    expect(screen.getByText("INCEPTION")).toBeInTheDocument();
  });

  it("shows release date", () => {
    render(<MovieList movies={mockMovies} />);
    expect(screen.getByText("2010-07-16")).toBeInTheDocument();
  });

  it("shows genres correctly", () => {
    render(<MovieList movies={mockMovies} />);
    expect(screen.getByText("Action, Sci-Fi")).toBeInTheDocument();
  });
});
