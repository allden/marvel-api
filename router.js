const express = require('express');
const router = express.Router();
// controllers
const comics = require('./controllers/marvelComics');
const characters = require('./controllers/marvelCharacters');
const series = require('./controllers/marvelSeries');
const stories = require('./controllers/marvelStories');
const creators = require('./controllers/marvelCreators');

// CHARACTERS
router.get('/marvel/characters', characters.getCharacters);
router.get('/marvel/characters/:id', characters.getCharacterById);
router.get('/marvel/characters/:id/comics', characters.getCharacterComics);
router.get('/marvel/characters/:id/series', characters.getCharacterSeries);
router.get('/marvel/characters/:id/stories', characters.getCharacterStories);

// COMICS
router.get('/marvel/comics', comics.getComics);
router.get('/marvel/comics/:id', comics.getComicById);
router.get('/marvel/comics/:id/characters', comics.getComicCharacters);
router.get('/marvel/comics/:id/creators', comics.getComicCreators);

// SERIES
router.get('/marvel/series', series.getSeries);
router.get('/marvel/series/:id', series.getSeriesById);
router.get('/marvel/series/:id/characters', series.getSeriesCharacters);
router.get('/marvel/series/:id/creators', series.getSeriesCreators);

// STORIES
router.get('/marvel/stories', stories.getStories);
router.get('/marvel/stories/:id', stories.getStoryById);
router.get('/marvel/stories/:id/characters', stories.getStoryCharacters);
router.get('/marvel/stories/:id/creators', stories.getStoryCreators);

// CREATORS
router.get('/marvel/creators', creators.getCreators);
router.get('/marvel/creators/:id', creators.getCreatorById);
router.get('/marvel/creators/:id/stories', creators.getCreatorStories);
router.get('/marvel/creators/:id/series', creators.getCreatorSeries);
router.get('/marvel/creators/:id/comics', creators.getCreatorComics);

module.exports = router;