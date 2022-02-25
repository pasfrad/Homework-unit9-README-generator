const inquirer = require("inquirer");
const fs = require("fs");

function licenseBadge(data) {
    console.log(data)
    const licenseType = data
    let licenseString = " "
    if (licenseType == "MIT") {
      licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
    if (licenseType == "GNU General Public License 2.0") {
      licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
    };
    if (licenseType == "Apache License 2.0") {
       licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
      };
    if (licenseType == "GNU General Public License 3.0") {
        console.log("Working!")
        licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
      };
    return licenseString
    };

const generateREADME = ({ title, license, description, installation, usage, contributing, tests,  
    github, email }) => `
    # ${title}

    #license
    ${license}
    ${licenseBadge(license)}

    ## Description
    
    ${description}
    
    ## Table of Contents
    
    - Installation
    - Usage
    - Credits
    - License
    
    ## Installation
    
    ${installation}
    
    ## Usage
    
    ${usage}
    
    ## License
    
    ## How to Contribute
    
    ${contributing}
    
    ## Tests
    
    ${tests}
    
    ## For Questions
    My GitHub: https://github.com/${github}
    My email: ${email}`;

inquirer.prompt([
    {
        type: "input",
        message: "What is the project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe the project:",
        name: "description"
    },
    {
        type: "input",
        message: "How is the project installed?",
        name: "installation"
    },
    {
        type: "input",
        message: "How is the finished project used?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What are the testing instructions?",
        name: "tests"
    },
    {
        type: "checkbox",
        message: "What license does the project have?",
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
]).then((answers) => {
       fs.writeFile("README.md", generateREADME(answers), 
    (err) => err ? console.error(err) : console.log("Created README"));
});