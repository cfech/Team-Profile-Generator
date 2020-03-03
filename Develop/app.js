const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var people = []

var initialQuestions = [
    {
        type: "input",
        message: "What is your manager's name?",
        name: "manager",
        default: "Tom"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerId",
        default: 0001
    },
    {
        type: "input",
        message: "What is your manager's email?",
        name: "managerEmail",
        default: "manager@m.com"
    },
    {
        type: "input",
        message: "What is your manager's office Number",
        name: "managerOfficeNumber",
        default: 0001234567
    },

]

var engineerQuestions = [{
    type: "input",
    message: "What is your engineer's name?",
    name: "engineer",
    default: "Tim"
},
{
    type: "input",
    message: "What is your engineer's ID?",
    name: "engineerId",
    default: 0001
},
{
    type: "input",
    message: "What is your engineer's email?",
    name: "engineerEmail",
    default: "engineer@m.com"
},
{
    type: "input",
    message: "What is the engineer's github username?",
    name: "engineerGithub",
    default: "cfech"
}
]

var interQuestions = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "intern",
        default: "Tim"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "internId",
        default: 0001
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "internEmail",
        default: "intern@m.com"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "internSchool",
        default: "Upenn"
    },
]

function initialQuestionsStart() {
    inquirer
        .prompt(initialQuestions) //create the manager, / push to array /if statement for next question 
        .then(function (answers) {
            var createdManager = new Manager(answers.manager, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            people.push(createdManager)
            listQuestion()
        })
}

function listQuestion() {
    inquirer
        .prompt([{
            type: "list",
            message: "What type of team member would you like to add ?",
            name: "teamMember",
            choices: ["Engineer", "Intern", "No more"]
        },])
        .then(function (answers) {

            var listAnswer = answers.teamMember
            if (listAnswer === "Engineer") {
                engineerQuestionArray()

            } else if (listAnswer === "Intern") {
                internQuestionArray()
            } else {
                
                var renderedOutput = render(people)
                console.log(renderedOutput)
                fs.writeFile(outputPath, (renderedOutput), function (err) {
                    if (err) {
                        console.log("There was an error")
                    } else {
                        console.log('Team was generated')
                    }
                })
                

            }
        })
}

function engineerQuestionArray() {
    inquirer
        .prompt(engineerQuestions)
        .then(function (engineerAnswers) {
            var newEngineer = new Engineer(engineerAnswers.engineer, engineerAnswers.engineerId, engineerAnswers.engineer, engineerAnswers.engineerGithub)
            people.push(newEngineer)

            listQuestion()
        })
}


function internQuestionArray() {
    inquirer
        .prompt(interQuestions)
        .then(function (internAnswers) {
            var newIntern = new Intern(internAnswers.intern, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool)
            people.push(newIntern)

            listQuestion()
        })
}

// create engineer and intern 

initialQuestionsStart()




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
