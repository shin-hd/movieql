import { createServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import { getMovies, fetchMovies } from "./graphql/db";
import resolvers from "./graphql/resolvers";

const typeDefs = importSchema("./graphql/schema.graphql");

const server = createServer({
  schema: { typeDefs, resolvers },
});

fetchMovies();

server.start();
