CREATE TABLE users(
  _id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  password VARCHAR(100) NOT NULL,
  session_id uuid
)