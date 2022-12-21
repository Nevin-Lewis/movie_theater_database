const { Concessions } = require('../models');

const categoryData = [
  {
    category_name: 'Non-Alcoholic Beverages',
  },
  {
    category_name: 'Alcoholic Beverages',
  },
  {
    category_name: 'Food',
  },
  {
    category_name: 'Snacks',
  },
];

const seedConcessions = () => Category.bulkCreate(categoryData);

module.exports = seedConcessions;