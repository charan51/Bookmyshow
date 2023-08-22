CREATE TABLE IF NOT EXISTS movies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    release_date VARCHAR(100) NOT NULL,
    run_time VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS screens (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    capacity INT NOT NULL
);
CREATE TABLE IF NOT EXISTS theaters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    show_time VARCHAR(100) NOT NULL,
	movie_id int,
	screen_id int,
    CONSTRAINT movie_fk FOREIGN KEY(movie_id) REFERENCES movies(id),
    CONSTRAINT screen_fk FOREIGN KEY(screen_id) REFERENCES screens(id)
);
CREATE TABLE IF NOT EXISTS seats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    theater_id int,
    movie_id int,
    screen_id int,
    CONSTRAINT theater_fk FOREIGN KEY(theater_id) REFERENCES theaters(id),
    CONSTRAINT movie_fk FOREIGN KEY(movie_id) REFERENCES movies(id),
    CONSTRAINT screen_fk FOREIGN KEY(screen_id) REFERENCES screens(id)
);
CREATE TABLE IF NOT EXISTS seats_selected (
    id SERIAL PRIMARY KEY,
    customer_id int,
    seat_id int,
    CONSTRAINT customer_fk FOREIGN KEY(customer_id) REFERENCES customers(id),
    CONSTRAINT seats_fk FOREIGN KEY(seat_id) REFERENCES seats(id)
);
INSERT INTO seats(name) VALUES('A1');
SELECT * FROM seats;