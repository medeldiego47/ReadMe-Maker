//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions =[
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName',
          },
          {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username',
          },
          {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
          },
          {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description',
          }, {
            type: 'input',
            message: 'please describe how users can use your project',
            name: 'Usage',
          }, {
            type: 'input',
            message: 'please describe installation instructions for the user',
            name: 'installation',
          }, {
            type: 'input',
            message: 'please outline contribution guidelines',
            name: 'contribution',
          }, {
            type: 'input',
            message: 'please describe testing functionality for the user',
            name: 'testing',
          }, {
            type: 'list',
            message: 'please select a license for your project?',
            name: 'license',
            choices:[
                "Apache",
                "MIT",
                'none',
            ]
          },
    ];
//create function to write content to a new file called readme.md
    const writeToFile = content => {
        fs.writeFile('readme.md',content, err =>{
            err?console.log(err): console.log(`file created succesfully!`)
        }
        )
    }
//initial function to prompt questions from inquirer then return answers as data
function init(){
    return inquirer.prompt(questions)
    .then(data => {
        return data;
    })}
    
//call to initial function then input data into generate markdown function from imported modules to create the read me
init()
.then(data => {
    console.log(data);
    return generateMarkdown(data);
})
// then run data through write to file function 
.then(data=>{
    return writeToFile(data);
})
