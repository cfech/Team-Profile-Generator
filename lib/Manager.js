//Importing the Employee class 
const Employee = require("./Employee")

//Defining the Manager class as an extension of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    // Function to acquire the role
    getRole() {
        var instance = new Manager();
        return instance.constructor.name

    }

    // Function to acquire the office number
    getOfficeNumber() {
        return this.officeNumber
    }
}

//Exporting manager class
module.exports = Manager;