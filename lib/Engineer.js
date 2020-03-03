//Requiring employee constructor
const Employee = require("./Employee")

//Making the engineer constructor as an extension of Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    //Function to acquire the role
    getRole() {
        var instance = new Engineer();
        return instance.constructor.name
    }

    //Function to acquire the github 
    getGithub() {
        return this.github
    }
}

//Exporting engineer class
module.exports = Engineer;