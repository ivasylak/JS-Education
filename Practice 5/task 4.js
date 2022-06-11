class Worker {

    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary(){
        let salary = this.dayRate * this.workingDays;
        return salary;
    }

    #experience = 1.2;

    showSalaryWithExperience(){
        return this.dayRate * this.workingDays * this.#experience;
    }
   
    get setExp (){
        return this.#experience;
    }

    set setExp(value){
        this.#experience = value;
    }
}

let worker1 = new Worker ("Iryna Vasylak", 20, 5);
console.log(worker1.fullName);
worker1.showSalary();
console.log(worker1.showSalary())
console.log("New experience: " + worker1.setExp);
worker1.showSalaryWithExperience();
console.log(worker1.fullName + " salary is " + worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.setExp);
worker1.showSalaryWithExperience();
console.log(worker1.fullName + " salary is " + worker1.showSalaryWithExperience());

let worker2 = new Worker ("Petro Petrov", 25, 6);
console.log(worker2.fullName);
worker2.showSalary();
console.log(worker2.showSalary());
console.log("New experience: " + worker2.setExp);
worker2.showSalaryWithExperience();
console.log(worker2.fullName + " salary is " + worker2.showSalaryWithExperience());
worker2.setExp = 1.5;
console.log("New experience: " + worker2.setExp);
worker2.showSalaryWithExperience();
console.log(worker2.fullName + " salary is " + worker2.showSalaryWithExperience());

let worker3 = new Worker ("Ivan Ivanov", 30, 8);
console.log(worker3.fullName);
worker3.showSalary();
console.log(worker3.showSalary());
console.log("New experience: " + worker3.setExp);
worker3.showSalaryWithExperience();
console.log(worker3.fullName + " salary is " + worker3.showSalaryWithExperience());
worker3.setExp = 1.5;
console.log("New experience: " + worker3.setExp);
worker3.showSalaryWithExperience();
console.log(worker3.fullName + " salary is " + worker3.showSalaryWithExperience());

const array = [worker1.showSalaryWithExperience(), worker2.showSalaryWithExperience(), worker3.showSalaryWithExperience()];

console.log(array.sort(function(b, a){return a - b}).reverse());
console.log('Sorted salary:')
console.log(`${worker1.fullName}  : ${array[0]}`)
console.log(`${worker2.fullName}  : ${array[1]}`)
console.log(`${worker3.fullName}  : ${array[2]}`)