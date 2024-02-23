CREATE DATABASE bookDB;

CREATE TABLE    books(
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(20),
    description VARCHAR(255)
);

INSERT INTO books(id,title,description)
VALUES
(101, X, beautiful book);