class Person {

    constructor (name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return this.name + this.surname;
    }
}

class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName){
        return super.showFullName() +`${middleName}`;   
}

    showCourse(){
        let currentYear = new Date().getFullYear();
        let studCurrentCourse = (currentYear - this.year) + 1;
        return `${studCurrentCourse}`;
    }
}

const stud1 = new Student ("Petro", "Petrenko", 2018);
console.log(stud1.showFullName(" Petrovych"));
console.log("Current course: " + stud1.showCourse());
