CREATE DATABASE tododb;

CREATE TABLE todolist(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    achieved BOOLEAN
);