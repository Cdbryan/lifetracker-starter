CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  username    TEXT NOT NULL UNIQUE,
  password    TEXT NOT NULL,
  firstname   TEXT NOT NULL,
  lastname    TEXT NOT NULL, 
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition(
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL, 
  category   TEXT NOT NULL,
  calories   INTEGER, 
  image_url  TEXT,
  user_id    INTEGER,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()  
);