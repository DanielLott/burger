CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
	name varchar(255) NOT NULL,
    eaten BOOLEAN DEFAULT false
);