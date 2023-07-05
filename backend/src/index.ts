import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground as plugin } from "apollo-server-core";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
dotenv.config();

const serverStarter = async () => {
  const app = express();
  app.use(cors({ origin: process.env.ORIGIN }));
  app.use(express.json());

  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message || "서버 에러",
    });
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
    plugins: [plugin()],
  });
  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  app.get("/", (req, res) => {
    res.send("healthChecker");
  });

  app.listen(process.env.PORT, () => {
    console.log("😀 server is running 😀");
  });
};

serverStarter();
