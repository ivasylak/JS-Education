let hour = new Date();
let hourNow = hour.getHours();

if (hourNow >= 23 || hourNow <= 5 ){
    console.log('Доброї ночі');
}
else if (hourNow > 5 || hourNow <= 11){
    console.log('Добрий ранок');
}
else if (hourNow > 11 || hourNow <= 17){
    console.log('Добрий день');
}
else if (hourNow > 17 || hourNow < 23){
    console.log('Добрий вечір');
}