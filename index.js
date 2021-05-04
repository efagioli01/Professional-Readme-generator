// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const fs = require('fs');
const path = require('path') //owrks with fs, path is telling where files are or should go
const generateMarkDown = require('./utils/generateMarkdown')


const questions = [


    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Briefly describe this project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'List the steps required to install your project',
    },
    {
        type: 'input',
        name: 'use',
        message: 'What is the use of this application?',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Were there any contrubutors to your project?',
      },
      {
        type: 'checkbox',
        name:"license",
        nmessage: 'Is there a License you used?',
        choices: [
          'MIT',
          'APACHE 2.0',
          'GPO 3.0',
          'none'

        ],
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
      },

    ];
  
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data) //method 
}

// TODO: Create a function to initialize app
function init() {
  prompt(questions).then(responses => {
    console.log(responses)
    console.log('generating readme...')
    writeToFile('README.md', generateMarkDown({ ...responses })) //.. turns to ittrable array
  })
}

// Function call to initialize app
init();
