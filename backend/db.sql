CREATE TYPE Priority AS ENUM ('Low', 'Medium', 'High', 'Urgent');

CREATE TABLE Users (
    id UUID NOT NULL DEFAULT uuid_generate_v1(),
    username text NOT NULL,
    name text,
    password text NOT NULL,
    UNIQUE(username),
    CONSTRAINT id_User PRIMARY KEY (id)
);

CREATE TABLE Tasks (
    id UUID NOT NULL DEFAULT uuid_generate_v1(),
    name text NOT NULL,
    description text,
    tags text[],
    user_id UUID NOT NULL,
    date date NOT NULL,
    automatic boolean NOT NULL,
    from_time time,
    to_time time,
    priority Priority,
    estimated_time time,
    CONSTRAINT id_Task PRIMARY KEY (id),
    CONSTRAINT fk_User FOREIGN KEY(user_id) REFERENCES Users(id)
);