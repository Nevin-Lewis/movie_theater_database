const { users } = require('../models');

const userdata = [
	{
		name: 'Bames Jond',
		email: 'PublicAgent700@spynet.net',
		password: 'password123',
	},
    {
		name: 'Mozart',
		email: 'IMaDog@bones.com',
		password: 'password123',
	},
    {
		name: 'Gurrladriel',
		email: 'ElfQueen@3Rings.org',
		password: 'password123',
	},
    {
		name: 'Dana Carvey',
		email: 'PartyOnWayne@WWPTE.com',
		password: 'password123',
	},
];

const seedUsers = () =>
	User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;