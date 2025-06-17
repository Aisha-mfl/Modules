//---------- adjacency matrix -----------
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(matrix[0][1]);
console.log(matrix[1][2]);
console.log(matrix[0][0]);

//------------------adjacency list----------------
 const adjList = {
    'A':['B '],
    'B':['A','B'],
    'C':['B']
 }

 console.log(adjList['A']);
 console.log(adjList['B']);
 console.log(adjList['C']);