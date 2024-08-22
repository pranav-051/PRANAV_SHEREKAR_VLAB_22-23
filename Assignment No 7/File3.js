//Matrix Multiplication

const prompt = require ("prompt-sync") (); 

function matrixMultiply(matrix1, matrix2) {
    var result = [];
    if (matrix1[0].length !== matrix2.length) {
        console.log("Matrices cannot be multiplied. Number of columns in the first matrix must equal the number of rows in the second matrix.");
        return result;
    }

    for (var i = 0; i < matrix1.length; i++) {
        result[i] = [];
    }

    for (var i = 0; i < matrix1.length; i++) {
        for (var j = 0; j < matrix2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < matrix1[0].length; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

var matrixA = [
    [1, 2, 3],
    [4, 5, 6],
];

var matrixB = [
    [7, 8],
    [9, 10],
    [11, 12]
];

var resultMatrix = matrixMultiply(matrixA, matrixB);

console.log("Resultant Matrix:");
for (var i = 0; i < resultMatrix.length; i++) {
    console.log(resultMatrix[i]);
}
