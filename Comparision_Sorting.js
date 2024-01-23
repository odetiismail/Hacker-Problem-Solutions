function countingSort(arr) {
    let frequencyArray = Array(100).fill(0);

    // Count the occurrences of each value in the input array
    for (let i = 0; i < arr.length; i++) {
        frequencyArray[arr[i]]++;
    }

   
    return frequencyArray;
}

var arr=[1,1,3,2,1]
console.log(countingSort(arr))