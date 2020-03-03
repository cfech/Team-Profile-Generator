// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name// left side is key , right side is values 
        this.id = id
        this.email = email
    };

    getName() {
        return this.name
    };
    getId() {
        return this.id
    };
    getEmail() {
        return this.email
    };
    getRole() {
        var instance = new Employee();
        return instance.constructor.name
        
    };
}

var todd = new Employee("Todd", 12, "todd@email")

todd.getName()
todd.getId()
todd.getEmail()
todd.getRole()
module.exports = Employee;