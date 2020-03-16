
function maxTotal( arr ) {
    let sum = 0;
    let arrCopy = arr.slice();
    arrCopy.sort(function(x, y){return y-x})
    for (let i = 0; i < 5; i++) {
        sum += arrCopy[i];
    }
    return sum;
}



// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])) // 43
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]))   // 100
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) )   // 40