const arr = [2, 3, 4, 5];

function multiply (arr) {
    var sum=1;
    for (var i=0; i<arr.length; i++) {
        sum = sum * arr[i];
    } 
    return sum;
}
console.log(multiply(arr));