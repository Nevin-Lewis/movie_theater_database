const {genre} = require('../models');

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

const seedGenres = () =>
  genre.bulkCreate(genreData, {individualHooks: true, returning: true});

module.exports = seedGenres;
