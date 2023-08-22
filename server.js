const express = require('express')
const body_parser = require('body-parser');
const app = express();
const PORT = 3000;
const theaterRoutes = require('./routes/theater.route');
const moviesRoute = require('./routes/movie.route');
const usersRoute = require('./routes/customers.route');
const bookingRoute = require('./routes/booking.route');
app.use(body_parser.json());
app.use('/theater', theaterRoutes);
app.use('/movies', moviesRoute);
app.use('/users', usersRoute);
app.use('/booking', bookingRoute);
app.listen(PORT, () => {
    console.log('app running on port:', PORT);
});