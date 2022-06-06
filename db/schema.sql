CREATE DATABASE some_db;
\c some_db

DROP TABLE somethings;

CREATE TABLE somethings(
  id SERIAL PRIMARY KEY,
  name TEXT,
  clue TEXT,
  address TEXT
  );

INSERT INTO somethings(name, clue, address) VALUES
('Lost coins', 'Marcus'' favourite hiding place', 'some park near Marcus'' house'),
('Kenny''s duck', 'northwest most corner of a pond near Kenny''s house', 'Pond near Kenny''s house');

SELECT * FROM somethings;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
  );