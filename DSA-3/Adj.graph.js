
//Adjacency Matrix Representation
const matrix=[
    [0,1,0],
    [1,0,1],
    [0,1,0]
]
console.log(matrix[2][0])

//Adjacency List Representation
adjancencyList={
    'A':["B"],
    "B":["A","B"],
    "C":["B"]
}
console.log(adjancencyList['C'])