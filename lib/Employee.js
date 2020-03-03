//This creates the employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    };

    //Function to acquire the name
    getName() {
        return this.name
    };

    //Function to acquire the id
    getId() {
        return this.id
    };

    //Function to acquire the email
    getEmail() {
        return this.email
    };

    //Function to acquire the role
    getRole() {
        var instance = new Employee();
        return instance.constructor.name
    };
}

//Exporting the employee class
module.exports = Employee;