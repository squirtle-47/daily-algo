CREATE TABLE sessions(
  _id uuid DEFAULT uuid_generate_V4(),
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(_id)
)