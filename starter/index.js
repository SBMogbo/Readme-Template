
var fs=require("fs");
const inquirer=require("inquirer");
const { async } = require("rxjs");
const util=require("util");
const generateMarkdown=require("./utils/generateMarkdown")
const writeFileAsync=util.promisify(fs.writeFile);


inquirer.prompt([
  // array of questions for user
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "Github"

  },
  {
    type: "input",
    message: "What is your Github profile link?",
    name: "link"

  },
 
  {
    type: "input",
    message: "What is your project's name",
    name: "projectName"
  },
  {
    type: "input",
    message: "What is your project description",
    name: "description"
  },
  {
    type: "input",
    message: "What is your project installation infomation",
    name: "installation"
  },
  {
    type: "input",
    message: "How do you use your project ",
    name: "usage"
  },
  {
    type: "input",
    message: "What kind of license should your project have",
    name: "license"
  },
 
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo ",
    name: "contributing"
  },
  {
    type: "input",
    message: "What kind of test should be done",
    name: "test"
  },

]).then(function (response) {
  fs = require('fs');
  const markDown=generateMarkdown(response)
  fs.writeFile("./README.md", markDown, function (err) {
    if (err) {
      console.log("Error:", error);
    } else {
      console.log("saved new readme!");
    }
    if (err) {
      throw err;
    }
    
  });
  
  //calling github(may not use)
  //const queryUrl = `https://api.github.com/users/${response.Github}${username}/repos?per_page=100`;
  //calling the queryurl 
  //axios.get(queryUrl).then(response => {
   // console.log(response.data);
    //const repostories = response.data.map(repository => repository.full_name);
   // writeFileAsync("./repostories")
 // });
  
});

// function to write README file
//function writeToFile(fileName, data) {

//}


// function to initialize program
//function init()

// function call to initialize program
//init();
