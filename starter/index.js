var inquirer = require('inquirer');


inquirer.prompt([
  // array of questions for user
  {
    type: "input",
    message: "What is your Github username?",
    name: "name"

  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"

  },
  {
    type: "input",
    message: "What is your project's name",
    name: "projectName"
  },
  {
    type: "input",
    message: "What kind of license should your project have",
    name: "license"
  },
  {
    type: "input",
    message: "What command should be run to install dependecies",
    name: "dependecies"
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "test"
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo",
    name: "info"
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo ",
    name: "input"
  },

]).then(function(response){
  fs=require('fs');
  fs.writeFile("./README.md",JSON.stringify(response),function(err)
  {
    if(err){
      console.log("Error:",error);
    }else{
      console.log("saved new readme!");
    }
  });
});


// function to write README file
//function writeToFile(fileName, data) {
  
//}


// function to initialize program
//function init()

// function call to initialize program
//init();
