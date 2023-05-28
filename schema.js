const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
    price: String
  }

  type Product {
    id: Int
    title: String
    price: String
    category: String
    description: String
    image: String
  }

  type Query {
    books: [Book]
    products: [Product]
  }
`;

module.exports = typeDefs;
