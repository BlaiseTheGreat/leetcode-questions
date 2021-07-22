let array = createArray(1, 100000, 100000);
array.sort((a, b) => a - b);
console.log(array);
let key = 32756;
let ansIdx = binarySearch(array, key)
console.log(ansIdx);
console.log(array[ansIdx]);








//~~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~

//tested and confirmed to run in log2(n) time with correct answer
function binarySearch(array, key) {
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((right) / 2);
    let loopCounter = 0;
    

    while (left <= right) {
        loopCounter++;
        console.log("Enetered loop: ", loopCounter);
        mid = Math.floor((right + left) / 2)
        if (key === array[mid]) return mid;
        else if (key < array[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}





function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function createArray(min, max, length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(getRndInteger(min, max));
    }
    return arr;
}