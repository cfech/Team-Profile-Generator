//All required modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//People array
var people = []

//Initial questions
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
        default: 123456789
    },

]

//Engineer specific questions 
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

//Intern specific questions
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

//Prompt initial questions and then a list question
function initialQuestionsStart() {
    inquirer
        .prompt(initialQuestions)
        .then(function (answers) {
            var createdManager = new Manager(answers.manager, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            people.push(createdManager)
            listQuestion()
        })
}

//List question prompts specific array when a certain choice is picked
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

            // Calls engineer questions array when engineer is selected
            if (listAnswer === "Engineer") {
                engineerQuestionArray()

                //Calls intern array when intern is selected
            } else if (listAnswer === "Intern") {
                internQuestionArray()

                //Writes the file when no more is selected
            } else {
                var renderedOutput = render(people)
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

//Prompts engineer specific questions, creates a new engineer and pushes to people array, also prompts listQuestion
function engineerQuestionArray() {
    inquirer
        .prompt(engineerQuestions)
        .then(function (engineerAnswers) {
            var newEngineer = new Engineer(engineerAnswers.engineer, engineerAnswers.engineerId, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub)
            people.push(newEngineer)
            listQuestion()
        })
}

//Prompts intern specific questions, creates a new intern and pushes to people array, also prompts listQuestion
function internQuestionArray() {
    inquirer
        .prompt(interQuestions)
        .then(function (internAnswers) {
            var newIntern = new Intern(internAnswers.intern, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool)
            people.push(newIntern)
            listQuestion()
        })
}

//Prompts initial question to start app
initialQuestionsStart()