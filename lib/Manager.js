// Code to define and export the Manager class.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;

        super(name, id, email);
    }

    getOfficeNumber() {

        return this.officeNumber;

    }

    getRole() {

        return "Manager";
    }
}


module.exports = Manager;