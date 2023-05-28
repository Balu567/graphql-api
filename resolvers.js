//const fetch = require("node-fetch");

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
    price: "200",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
    price: "600",
  },
];

const products = [
  {
    id: 1,
    title: "Hp",
    price: "20$",
    category: "Fantasy",
    description: "Excelent pictire",
    image: "Image",
  },
  {
    id: 2,
    title: "Hp",
    price: "20$",
    category: "Fantasy",
    description: "Excelent pictire",
    image: "Image",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    products: () => products,
  },
};

module.exports = resolvers;
