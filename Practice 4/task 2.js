function checkAge(age){
        if (isNaN(age)) throw "Please, enter a number";
        if (String(age).length == 0) throw "The field is empty! Please enter your age";
        if( age <= 14) throw "Sorry, you are not adult!";
        alert("Select your movie!")
}

    try {
        checkAge("");
    }
    catch (error){
        console.log(error);
    }



