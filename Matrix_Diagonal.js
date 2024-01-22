
//diagonalDifference

function diagonalDifference(arr) {
    // Get the number of rows (assuming the matrix is square)
    const n = arr.length;

    // Initialize sums of diagonals
    let leftToRightSum = 0;
    let rightToLeftSum = 0;

    // Iterate through the matrix
    for (let i = 0; i < n; i++) {
        leftToRightSum += arr[i][i];
        rightToLeftSum += arr[i][n - 1 - i];
    }

    // Calculate the absolute difference
    const absoluteDifference = Math.abs(leftToRightSum - rightToLeftSum);

    return absoluteDifference;
}

// Example usage:
const arr = [ [1, 2, 3] ,[4, 5, 6], [9, 8, 9] ];

const result = diagonalDifference(arr);
console.log(result);
