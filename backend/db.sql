CREATE TABLE Users (
    id SERIAL,
    username varchar(255),
    name varchar(255),
    password varchar(255),
    UNIQUE(username)
);