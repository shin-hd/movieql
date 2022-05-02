import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;

var movies = [];

export const fetchMovies = async () => {
  try {
    const { data } = await axios({
      url: `https://api.themoviedb.org/3/movie/popular`,
      method: "get",
      params: { api_key: API_KEY },
    });
    const { results } = data;
    movies = results;
  } catch (e) {
    console.error(e);
  }
};

export const getMovies = () => movies;

export const getById = (id: number) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovie = (id: number) => {
  const cleanedMovies = movies.filter((movie) => id !== movie.id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else return false;
};

export const addMovie = (id: number, original_title: string, score: number) => {
  const newMovie = {
    id,
    original_title,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
