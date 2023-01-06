const { Genre } = require('../models');

const genreData = [
  {
    name: 'Action',
  },
  {
    name: 'Comedy',
  },
  {
    name: 'Horror',
  },
  {
    name: 'Mystery',
  },
];

const seedGenres = () => Genre.bulkCreate(genreData, {individualHooks: true, returning: true});

module.exports = seedGenres;