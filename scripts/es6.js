class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getfullName() {
        return this.firstName + " " + this.lastName;
    }

    promote(newJobTitle, newPayRate) {

        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    getIntro() {
        let intro =
        "Hi! I'm " + this.getfullName() + " and I am a " +
        this.jobTitle;
        return intro;
        }
       
}



let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
let employee2 = new Employee(
    2, "John", "Smith", "Graphic Designer", 40.00);

console.log(`Employee ${employee1.getfullName()} created`);
employee1.promote("Sr. Graphic Artist", 46.75);
let intro1 = employee1.getIntro();
console.log(intro1);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

console.log(`Employee ${employee2.getfullName()} created`);
employee2.promote("Sr. Designer Artist", 44.75);
let intro2 = employee2.getIntro();
console.log(intro2);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);
