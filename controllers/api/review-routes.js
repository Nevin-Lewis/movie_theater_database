// eslint-disable-next-line new-cap
const router = require('express').Router();
const {Reviews} = require('../../models');

// CREATE new review
router.post('/', async (req, res) => {
  try {
    const dbReviewData = await Reviews.create({
      review: req.body.review,
      movie_id: req.body.movie_id,
      user_id: req.body.user_id,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbReviewData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const ReviewData = await Reviews.findAll();
    res.status(200).json(ReviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;

