class person {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;

    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

class employee extends person {
    constructor(firstName, lastName, id, jobTitle, payRate, hrWork) {
        super(firstName, lastName);

        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
        this.hrWork = hrWork;
    }
    getGrossPay(){
        return this.payRate * this.hrWork
    }
}



let person1 = new person(
    "Ian", "Auston");

let employee1 = new employee(
    "John", "Smith", "2", "Software Developer", 42.00, 38
);

let employee2 = new employee(
    "Jane", "Smith", "1", "Software Checker", 32.00, 42
);

console.log(person1.getFullName()) 

console.log(employee1.getFullName() + " ID: " + employee1.id + ". My job is " + employee1.jobTitle + ". The payrate is: $" + employee1.payRate)  
console.log("The hours I worked this week is " + employee1.hrWork + "hr and the payrate is $" + employee1.payRate + ". The Gross Pay is $"+ employee1.getGrossPay())

console.log(employee2.getFullName() + " ID: " + employee2.id + ". My job is " + employee2.jobTitle + ". The payrate is: $" + employee2.payRate)  
console.log("The hours I worked this week is " + employee2.hrWork + "hr and the payrate is $" + employee2.payRate + ". The Gross Pay is $"+ employee2.getGrossPay())