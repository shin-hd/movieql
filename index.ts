import { createServer } from "graphql-yoga";
import { importSchema } from "graphql-import";
import resolvers from "./graphql/resolvers";

const typeDefs = importSchema("./graphql/schema.graphql");

const server = createServer({
  schema: { typeDefs, resolvers },
});

server.start();
