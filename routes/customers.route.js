const express = require('express');
const route = express.Router();
const pg = require('../utils/db');
// POST /api/auth/register: Register a new user.
route.post('/signup', async (req, res) => {
    try {
        const { name, email, contact } = req.body;
        const checkUser = await pg.query('SELECT * FROM customers WHERE email=$1', [email]);
        if (checkUser.rows.length  !== 0) {
            await pg.query('INSERT INTO customers(name, email, contact) VALUES($1, $2, $3)', [name, email, contact]);
            res.send({ message: `User ${name} created` }).status(200);
        } else {
            res.send({ message: `User ${name} already exists` }).status(200);
        }
    } catch (err) {
        res.send({ message: err.message }).status(400);
    }
});
// POST /api/auth/login: Authenticate a user and provide an access token.
route.post('/login', async (req, res) => {
    try {
        const {email} = req.body;
        const checkUser = await pg.query('SELECT * FROM customers WHERE email=$1', [email]);
        if (checkUser.rows.length !== 0) {
            res.send({ message: `User ${email} login` }).status(200);
        } else {
            res.send({ message: `User ${email} not exists` }).status(200);
        }
    } catch (err) {
        res.send({ message: err.message }).status(400);
    }
});
// POST /api/auth/logout: Log out a user and invalidate their access token.
route.get('/logout', (req, res) => {
    try {

    } catch (err) {
        res.send({ message: err.message }).status(400);
    }
});
module.exports = route;