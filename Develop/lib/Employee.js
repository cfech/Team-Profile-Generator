// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name// left side is key , right side is values 
        this.id = id
        this.email = email
    };
    
    getName() {
        this.name
    };
    getId() {
        this.id
    };
    getEmail() {
        this.email
    };
    getRole() {
        this.class
    };

}


// var todd = new Employee("Todd", 12, "todd@email")

// todd.getName()
// todd.getId()
// todd.getEmail()
module.exports = Employee;