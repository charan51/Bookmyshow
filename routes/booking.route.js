const express = require('express');
const route = express.Router();
const pg = require('../utils/db');

// booking
route.get('/:theaterID/:movieID/:seatID', async(req, res) => {
    try{
        const theaterID = req.params.theaterID;
        const movieID = req.params.movieID;
        const seatID = req.params.seatID;
        const customer_id = await pg.query('SELECT id from customers WHERE email=$1', ['test@gmail.com']);
        
        await pg.query('INSERT INTO seats_selected(customer_id, seat_id) VALUES ($1,$2)',[customer_id.rows[0].id, seatID]);
        res.send({message: "bookings done"}).status(200);
    }catch(err) {
        res.send({message: err.message}).status(400);
    }
});

module.exports = route;

