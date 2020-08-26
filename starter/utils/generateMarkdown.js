// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation -Link](#Link)
  * [Usage -Link](#Link)
  * [License -Link](#Link)
  * [Contributing -Link](#Link)
  * [Tests -Link](#Link)
  * [Questions -Link](#Link)
  

  ## [Installation -Link] (#Installation)

  ${data.installation}

  ## [Usage -Link](#Link)

  ${data.usage}

  ## [License -Link](#Link)

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## [Contributing -Link](#Link)

  ${data.contributing}

  ## [Tests -Link](#Link)

  ${data.test}

  ## [Questions -Link] (#Link)

  If you have any questions please email me (${data.Github}),(${data.link}) here: ${data.email}


`;
}

module.exports = generateMarkdown;
