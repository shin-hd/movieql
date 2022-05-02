import { getMovies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_: any, { id }: { id: number }) => getById(id),
  },
  Mutation: {
    addMovie: (
      _: any,
      {
        id,
        original_title,
        score,
      }: { id: number; original_title: string; score: number }
    ) => addMovie(id, original_title, score),
    deleteMovie: (_: any, { id }: { id: number }) => deleteMovie(id),
  },
};

export default resolvers;
