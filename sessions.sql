CREATE TABLE sessions(
  _id PRIMARY KEY,
  user_id FOREIGN KEY REFERENCES users(_id),
)