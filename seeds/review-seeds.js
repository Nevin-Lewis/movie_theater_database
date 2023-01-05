const { reviews } = require('../models');

const reviewsData = [
	{
		review: "Not gonna lie, wasn't sure how I'd feel about the vampire from Twilight being Batman, but he was pretty Bad Ass. Dark movie. Paul Dano as Riddler was creepy, but great.",
        movie_id: 1,
		user_id: 1,
	},
	{
		review: "Robert Pattinson Is My New Favorite Super Hero.",
        movie_id: 1,
		user_id: 3,
	},
	{
		review: "2 PAWS ALL THE WAY UP!!",
        movie_id: 1,
		user_id: 2,
	},
	{
		review: "@Michelle_Yeoh is my Sherpa. She is so cool, and absolutely rocks in this quirky/cool thriller! #GooglyEyes",
        movie_id: 2,
		user_id: 3,
	},
	{
		review: "The guy from Stranger Things as a brutal Santa Claus?! SCHWING!",
        movie_id: 3,
		user_id: 4,
	},
	{
		review: "Colin Farrell and Brendan Gleason team up again in this dark comedy set in old time Ireland. The humor is twisted, but delightful, and the coastal town they inhabit is stunning. #IrelandGoals",
        movie_id: 7,
		user_id: 3,
	},
	{
		review: "A WHODUNNIT DUN RIGHT - TWO PAWS & 1 TAIL UP!",
        movie_id: 13,
		user_id: 2,
	},
	{
		review: "Hitchcock, Carpenter, Craven, Poole. The Mt. Rushmore of Horror/Thriller Directors. Nope solidifies Poole's place in the pantheon of fear inducing movies.",
        movie_id: 14,
		user_id: 1,
	},
	{
		review: "Hated it. Walked out of the theatre because the acting was more wooden than Pinocchio.",
        movie_id: 6,
		user_id: 4,
	},
	{
		review: "WILL FERRELL HITS MY FUNNY BONE - ONE AND A HALF PAWS UP!",
        movie_id: 5,
		user_id: 2,
	},
    {
		review: "Brad Pitt, Leo DiCaprio & Margot Robbie? Sign me up for this please. #Superstars #LeoShouldHave8Oscars",
        movie_id: 8,
		user_id: 3,
	},
    

];

const seedReviews = () =>
	reviews.bulkCreate(reviewsData, { individualHooks: true, returning: true });

module.exports = seedReviews;