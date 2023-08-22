const express = require('express');
const router = express.Router();
const pool = require('../utils/db');

// GET /api/theaters: Get a list of all theaters.
router.get('/', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM theaters ORDER BY id DESC LIMIT 50');
        res.send(data.rows).status(200);
    }
    catch (err) {
        res.send({message: err.message}).status(404);
    }
});
// GET /api/theaters/location: Get a list of all theaters based on location.
router.get('/location/:location', async (req, res) => {
    try {
        const location = req.params.location;
        const data = await pool.query('SELECT * FROM theaters where location=$1', [location]);
        res.send(data.rows).status(200);
    }
    catch (err) {
        res.send({message: err.message}).status(404);
    }
});
// GET /api/cinemas/{cinema_id}: Get details of a specific cinema.
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const data = await pool.query('SELECT * FROM theaters WHERE id=$1', [id]);
        console.log(data);
        res.send(data).status(200);
    }
    catch (err) {
        res.send({message: err.message}).status(404);
    }
});
module.exports = router;
