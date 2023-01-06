const sequelize = require('../config/connections');
const seedconCat = require('./conCat-seeds');
const seedConcessions = require('./concessions-seeds');
const seedMovies = require('./movies-seeds');
const seedGenres = require('./genres-seeds');
const seedReviews = require('./review-seeds');
const seedUsers = require('./users-seeds');

const seedAll = async () => {
  await sequelize.sync({force: true});
  await seedConcessions();
  await seedGenres();
  await seedMovies();
  await seedReviews();
  await seedUsers();
  await seedconCat();
};
seedAll();
