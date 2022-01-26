CREATE TABLE algos(
  _id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  content VARCHAR(1000),
  example VARCHAR(1000)
);

INSERT INTO algos (title, content, example) VALUES ('circularLinkedList', 'Given a circular linked list, implement an algorithm which returns the node at the beginning of a loop.', 'Example: A -> B -> C -> D -> E -> C    (answer is C)');

INSERT INTO algos (title, content, example) VALUES ('findZero', 'given an array of positive intergers, 
   each integer represents how many times to the left or right
   you can move in the array, no out of bound moves. 
   Given a starting index, return true if you can reach 0 
   in the array, otherwise return false.', 'ex: 
	input: arr = [1, 3, 2, 0, 4, 2, 1]
		   startIdx = 1
	output: false');

INSERT INTO algos (title, content, example) VALUES ('noDuplicates', 'given an array of integers return an array with the duplicates removed', 'Example: [1,2,3,3,4,5,6,1,1] ==> [1,2,3,4,5,6]');

INSERT INTO algos (title, content, example) VALUES ('')