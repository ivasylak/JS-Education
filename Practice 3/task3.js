let arr = [];

function randArray(k) {
    while(arr.length < 5){
            let x = Math.floor(Math.random() * 500) + 1;
            if(arr.indexOf(x) === -1) arr.push(x);
        }
        console.log(arr);
}

randArray(5);