CREATE TABLE sessions(
  _id uuid DEFAULT uuid_generate_V4(),
  username VARCHAR(100) NOT NULL,
  FOREIGN KEY (username) REFERENCES users(username)
)