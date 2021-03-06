CREATE TABLE users_join_algos(
  username VARCHAR(100),
  FOREIGN KEY (username) REFERENCES users(username),
  algo_id INT,
  FOREIGN KEY (algo_id) REFERENCES algos(_id),
  attempts INT,
  date_received timestamptz,
  date_submitted timestamptz
)