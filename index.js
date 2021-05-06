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
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter a title for your project to continue');
          return false
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Briefly describe this project',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description for your project to continue')
        } return false
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'List the steps required to install your project',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter installation info to continue')
        } return false
          
      }
    },
    {
        type: 'input',
        name: 'use',
        message: 'What is the use of this application?',
        validate: useInput => {
          if (useInput) {
            return true;
          } else {
            console.log('Please enter a use to continue')
          } return false
            
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Were there any contributors to your project?',
        validate: creditsInput => {
          if (creditsInput) {
            return true;
          } else {
            console.log('Please enter credits to continue')
          } return false
            
        }
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
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter email to continue')
          } return false
            
        }
        
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter github to continue')
          } return false
            
        }
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
