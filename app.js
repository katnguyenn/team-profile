const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function teamMembers() {
    try {
        return inquirer.prompt([

            {

                type: "list",
                message: "Enter team member's role.",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ],
                name: "role"

            },

        ]).then(response => {
            if (response.role === "Engineer") {
                inquirer.prompt([

                    {

                        type: "input",
                        message: "Enter team member's name.",
                        name: "name"
                    },


                    {
                        type: "input",
                        message: "Enter team member's id.",
                        name: "id"
                    },
                    {
                        type: "input",
                        message: "Enter team member's email.",
                        name: "email"
                    },
                    {
                        type: "input",
                        message: "Please enter Github username",
                        name: "github"
                    }

                ]).then(({name, id, email, github}) => {
                    let engineer = new Engineer(name, id, email, github);
                    team.push(engineer);
                    addMember();

                })
            } else if (response.role === "Intern") {
                inquirer.prompt([

                    {

                        type: "input",
                        message: "Enter team member's name.",
                        name: "name"
                    },


                    {
                        type: "input",
                        message: "Enter team member's id.",
                        name: "id"
                    },
                    {
                        type: "input",
                        message: "Enter team member's email.",
                        name: "email"
                    },
                    {
                        type: "input",
                        message: "Please enter school name",
                        name: "school"
                    }

                ]).then(({name, id, email, school}) => {
                    let intern = new Intern(name, id, email, school);
                    team.push(intern);
                    addMember();

                }) } else {
                    inquirer.prompt([

                        {

                            type: "input",
                            message: "Enter team member's name.",
                            name: "name"
                        },


                        {
                            type: "input",
                            message: "Enter team member's id.",
                            name: "id"
                        },
                        {
                            type: "input",
                            message: "Enter team member's email.",
                            name: "email"
                        },
                        {
                            type: "input",
                            message: "Please enter office number",
                            name: "officeNumber"
                        }

                    ]).then(({name, id, email, officeNumber}) => {
                        let manager = new Manager(name, id, email, officeNumber);
                        team.push(manager);
                        addMember();

                    })
                }

        })

    } catch (err) {
        console.log(err);
    }


}


function addMember() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Do you want to add more team members?",
            name: "member"
        }
    ]).then(function (confirm) {
        console.log(confirm);
        confirm.member ? teamMembers() : loadPage();
    })
}

//Called render function and passed in array containing all employee objects

function loadPage() {
    const cards = render(team)
    fs.writeFile(outputPath, cards, (err) => {
        if (err) throw err;
        console.log("Your team profile has been generated!")
    })
}






teamMembers();



