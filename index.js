// Module Imports
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// declaration of questions
const questions = [
    {
        type: "input",
        message: "Enter 3 letter (max of 3 letters): ",
        name: "text",
        default: "svg"
    },
    {
        type: "input",
        message: "What text color would you like: ",
        name: "textcolor",
        default: "white"
    },
    {
        type: "list",
        message: "Pick a shape: ",
        choices: ["Circle", "Square", "Triangle"],
        name: "shape",
        default: "Circle"
    },
    {
        type: "input",
        message: "What color would you like the shape to be: ",
        name: "shapecolor",
        default: "green"
    }
];

// create file from results of questions
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Generated logo.svg"));
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            if (answers.text.length <= 3) {
                switch (answers.shape) {
                    case "Circle":
                        const circle = new Circle(answers.shapecolor, answers.textcolor, answers.text);
                        writeToFile(`./examples/${answers.shape}-logo.svg`, circle.render());
                        break;
                    case "Square":
                        const square = new Square(answers.shapecolor, answers.textcolor, answers.text);
                        writeToFile(`./examples/${answers.shape}-logo.svg`, square.render());
                        break;
                    case "Triangle":
                        const triangle = new Triangle(answers.shapecolor, answers.textcolor, answers.text);
                        writeToFile(`./examples/${answers.shape}-logo.svg`, triangle.render());
                        break;
                    default: 
                        return err = "We experienced an issue based on your answers"
                }
            }
            else {
                console.log("You entered more letters than requested, please only enter up to 3 letters.");
                init();
            }
        })
        .catch((err) => console.log(err));
}

init();
