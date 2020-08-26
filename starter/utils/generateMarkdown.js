// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Description

  ${data.description}

  ## Table of Contents

  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions please email me (${data.Github}),(${data.link}) here: ${data.email}


`;
}

module.exports = generateMarkdown;
