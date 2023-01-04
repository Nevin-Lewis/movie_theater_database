const { genre } = require('../models');

const genre = [
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
	genre.bulkCreate(genre, { individualHooks: true, returning: true });

module.exports = seedGenres;