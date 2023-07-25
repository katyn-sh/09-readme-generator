// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your GitHub project?',
    name: 'title',
    validate: (title) => {
      if (title) {
        return true;
      }
      else {
        console.log('Please enter a valid GitHub project title');
        return false;
      }
    }
  },
  {
    type: "input",
    message: "What is the description of your GitHub project?",
    name: "description",
    validate: (description) => {
      if (description) {
        return true;
      }
      else {
        console.log('Please enter a valid project description');
        return false;
      }
    }
  },
  {
    type: "input",
    message: "What is your GitHub Username?",
    name: "userName",
    validate: (userName) => {
      if (userName) {
        return true;
      }
      else {
        console.log('Please enter a valid GitHub username');
        return false;
      }
    }
  },
  {
    type: "input",
    message: "Please enter your GitHub repositary name!",
    name: "repoName",
    validate: (repoName) => {
      if (repoName) {
        return true;
      }
      else {
        console.log('Please enter a valid GitHub repositary name');
        return false;
      }
    }
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: (email) => {
      if (email) {
        return true;
      }
      else {
        console.log('Please enter a valid email address');
        return false;
      }
    }
  },
  {
    type: "input",
    message: "Your project needs detailed step-by-step installation instructions.",
    name: "installation",
    validate: (installation) => {
      if (installation) {
        return true;
      }
      else {
        console.log('Please enter detailed step-by-step installation instructions!');
        return false;
      }
    }
  },
  {
    type: "input",
    message: "For use, please provide instructions and examples [Usage]",
    name: "usage",
    validate: (usage) => {
      if (usage) {
        return true;
      }
      else {
        console.log('Please enter valid instructions and examples for use [Usage]');
        return false;
      }
    }
  },
  {
    type: "list",
    message: "Which license will you use for your project?",
    name: "license",
    choices: ['apache-2.0', 'mpl-2.0', 'bsl-1.0', 'mit', 'No License']
  },
  {
    type: "input",
    message: "Please provide the guidelines for contributing!",
    name: "contributing",
    validate: (contributing) => {
      if (contributing) {
        return true;
      }
      else {
        console.log('Please enter guidelines for contributing!');
        return false;
      }
    }
  },
  {
    type: "input",
    message: "Provide instructions for testing the Terminal Application!",
    name: "tests",
    validate: (tests) => {
      if (tests) {
        return true;
      }
      else {
        console.log('Please enter instructions for testing!');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
