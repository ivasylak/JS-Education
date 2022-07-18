function findUnique(arr){
  let newArray =new Set(arr);
  return newArray.size === arr.length;
}

console.log(findUnique([1, 2, 3, 5, 3]));