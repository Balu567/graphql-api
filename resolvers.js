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

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = resolvers;
