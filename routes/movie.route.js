const express = require('express');
const route = express.Router();
const pool = require('../utils/db');

// GET /api/movies: Get a list of all movies.
route.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM movies ORDER BY id LIMIT 50');
        res.send(data.rows).status(200);
    } catch (err) {
        res.send({ message: err.message }).status(404);
    }
});
// GET /api/movies/{movie_id}: Get details of a specific movie.
route.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const movieById = await pool.query('SELECT * FROM movies WHERE id=$1', [id]);
        res.send(movieById.rows).status(200);
    } catch (err) {
        res.send({ message: err.message }).status(404);
    }
});

module.exports = route;