 function mul(...theArgs) {
    let number = 1;
    let index = 0;
    theArgs.forEach(function(arg) {
        if (typeof arg === 'number') {
            number = number *= arg;
            index += 1;
        }
    });
    if (index === 0) 
        return 0;
        return number;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0