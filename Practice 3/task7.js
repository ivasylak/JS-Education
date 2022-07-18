function lastElem (arr, count){
    if (count === undefined) 
    count = 1; 
    console.log(arr.slice(-count));
}

console.log(lastElem([3, 4, 10, -5]));      
console.log(lastElem([3, 4, 10, -5],2));   
console.log(lastElem([3, 4, 10, -5],8));   
