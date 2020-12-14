// Code to define and export the Intern class.  
const Employee = require("./Employee");

class Intern extends Employee {

    constructor(school) {
        this.school = school;


        super(name, id, email);
    }


    getSchool() {
        return this.school;

    }

    getRole() {

        return "Intern";
    }

}


module.exports = Intern;