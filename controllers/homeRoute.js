// eslint-disable-next-line new-cap
const router = require('express').Router();
const {Movies, Reviews, Genres} = require('../models');
const withAuth = require('../utils/auth');
// GET all genres for homepage
router.get('/', async (req, res) => {
  try {
    const dbGenreData = await Genres.findAll({
      include: [
        {
          model: Movies,
          attributes: [
            'id',
            'filename',
          ],
        },
      ],
    });

    const genres = dbGenreData.map((genres) =>
      genres.get({plain: true}),
    );
    res.render('homepage', {
      genres,
      loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one genre
router.get('/genres/:id', withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    try {
      const dbGenreData = await Genres.findByPk(req.params.id, {
        include: [
          {
            model: Movies,
            attributes: [
              'id',
              'filename',
              'title',
              'genre_id',
              'description',
              'run_time',
            ],
          },
        ],
      });

      const genres = dbGenreData.get({plain: true});
      res.render('genre', {genres, loggedIn: req.session.loggedIn});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one movie
router.get('/movie/:id', withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    try {
      const dbMovieData = await Movies.findByPk(req.params.id, {
        include: [
          {
            model: Reviews,
            attributes: [
              'review',
              'movie_id',
              'id',
            ],
          },
        ],
      });

      const movies = dbMovieData.get({plain: true});
      res.render('movie', {movies, loggedIn: req.session.loggedIn});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
