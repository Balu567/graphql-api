const { ApolloServer, gql } = require("apollo-server");

const typeDefs = require("./schema");

const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url = "http://localhost:4000/" }) => {
  console.log(`🚀  Server ready at ${url}`);
});
