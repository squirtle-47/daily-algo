CREATE TABLE algos(
  _id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  content VARCHAR(1000),
  example VARCHAR(1000),
  tests VARCHAR(1000)
);

INSERT INTO algos (title, content, example, tests) VALUES (
  'apple-stocks',
  'Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit you can make in the given day by buying and selling a single Apple stock. This is comprised of one buy and one sell.

Return 0 if no profit is possible OR if input is invalid.',
  'Ex: highestProfit([1000, 500, 1500, 2000, 0]) -> returns 1500',
  '["highestProfit([100, 90, 70, 40, 0])===0", "highestProfit([0, 2000, 4000, 6000, 8000, 10000])===10000", "highestProfit([2000, 1000, 100, 200, 400, 100])===300", "highestProfit([8,5,4,3,2,7,2])===5"]'
);

INSERT INTO algos (title, content, example, tests) VALUES (
  'pow',
  'Write a function that calculates x^y, where x is given as the base and y is given as the power.',
  'Example: pow(2,4) -> returns 16',
  '["pow(5,0)===1", "pow(5,1)===5", "pow(5,2)===25", "pow(3,4)===81", "pow(2,5)===32]"'
);

INSERT INTO algos (title, content, example, tests) VALUES (
  'bin-to-dec',
  'Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method.',
  'For example: 
binToDec("0")   -> 0
binToDec("11")  -> 3
binToDec("100") -> 4
binToDec("101") -> 5
binToDec("0101") -> 5',
  '[\"binToDec("101")===5\", \"binToDec("11111100100")===2020\", \"binToDec("0000000010101")===21\"]'
);


INSERT INTO algos (title, content, example, tests) VALUES (
  'duplicate number',
  'You have an unsorted array of n + 1 numbers, with the numbers from 1 to n. One number is duplicated. Find it.',
  'Example: [1,5,4,3,6,2,4,7] should return 4',
  '["duplicateNumber([1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15])===7", "duplicateNumber([12,14,3,7,15,1,11,9,10,3,5,2,4,6,13,8]===3", "duplicateNumber([12,14,3,7,15,1,11,9,10,5,2,4,6,13,14,8]===5)"]'
);

INSERT INTO algos (title, content, example, tests) VALUES (
  'mode',
  'Given an array of numbers (integers), return the mode, that is, the number that appears most often. If there are multiple modes, use the max of the modes.',
  'Example: mode([7, 5, 8, 8, 2, 5]) -> 8',
  '["mode([3])===3", "mode([-7, -7, -7])===-7", "mode([0, 0, 0, 0])===0", "mode([1, 6, 7, 5, 8, 8, 10, 6, 10, 4, 6, 11])===6", "mode([12, 5, 32, 4])===32"]'
);





