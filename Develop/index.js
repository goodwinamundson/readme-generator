// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username? (Required)',
        validate: usernameInput => {
          if (usernameInput) {
            return true;
          } else {
            console.log('Please enter your username!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a title for your project!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description for your project!');
            return false;
          }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstall',
        message: 'Would you like to enter some instructions on how to install the application?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide some installation instructions:',
        when: ({ confirmInstall }) => confirmInstall
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide some usage instructions:',
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What licensing did you use?',
        choices: ["MIT", "GNU GPL 2.0", "Apache 2.0", "GNU GPL 3.0", "None"]
      },
      {
        type: 'confirm',
        name: 'confirmContributions',
        message: 'Can others contribute to this project?',
        default: true
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How can others contribute to this project?',
        when: ({ confirmContributions }) => confirmContributions
      },
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'are there any tests available for your application?',
        default: true
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide any tests for your application and how to use them',
        when: ({ confirmTests }) => confirmTests
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Please provide an email for questions people may have about your project:',
      },
      

]);
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
}; 

// function call to initialize program
questions()

.then(answers => {
    return generateMarkdown(answers);
})
// writing answers to new file 
.then(data => {
    return writeFile(data);
})

.catch(err => {
    console.log(err)
})



