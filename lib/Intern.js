//Importing the Employee class 
const Employee = require("./Employee")

//Defining the intern class as an extension of Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school

    }

    // Function to acquire the role
    getRole() {
        var instance = new Intern();
        return instance.constructor.name
    }

    //Function to acquire the school
    getSchool() {
        return this.school
    }
}

//Exporting intern class
module.exports = Intern;