let animal = {
    name: "Tiger",
    age: 3,
    size: "big",
    country: "Ukraine",
    maleGender: false
}

function showProps(animal){
    return Object.values(animal);
}

console.log (showProps(animal));