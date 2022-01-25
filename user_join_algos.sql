CREATE TABLE user_join_algo(
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(_id),
  algo_id INT,
  FOREIGN KEY (algo_id) REFERENCES algos(_id),
  completed BOOLEAN,
  date timestamptz
)