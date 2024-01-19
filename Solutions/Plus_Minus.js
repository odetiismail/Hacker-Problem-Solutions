//Given an array of integers, calculate the ratios of its elements
// that are positive, negative, and zero. Print the decimal value of 
//each fraction on a new line with  places after the decimal.

//Note: This challenge introduces precision problems. 
//The test cases are scaled to six decimal places, 
//though answers with absolute error of up to 10-4 are acceptable.

// Example:

//var arr = [1,1,0,-1,-1]

//There aren 5 elements, two positive, two negative and one zero. 
//Their ratios are 2/5= 0.400000. 2/5=0.400000 and 1/5= 0.200000.

//Results are printed as:

//0.400000
//0.400000
//0.200000



var ar = [1, 1, 0, -1, -1];

function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let ze = 0;

    arr.forEach((arr) => {
        if (arr > 0) {
            pos++;
        } else if (arr < 0) {
            neg++;
        } else {
            ze++;
        }
    });

    var total = arr.length;

    let posi = pos / total;
    let nega = neg / total;
    let zer = ze / total;

    let positive = posi.toFixed(6);
    let negative = nega.toFixed(6);
    let zero = zer.toFixed(6);

    console.log(positive);

    console.log(zero);
    console.log(negative);
}
plusMinus(ar);
