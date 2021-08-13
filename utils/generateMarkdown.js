// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  // [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  // [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

  if (license === "None"){
    return '';
  }else {
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return '';
  }else if (license === "MIT"){
    return 'https://opensource.org/licenses/MIT'; 
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.github}/${data.title}

  ## Description 

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usege)
  * [License](#license)
  * [Tests](#Tests)
  * [Contributions](#Contributions)
  * [Credits](#Credits)
  * [Contact](#Contact)
  
  ## Installation 

  These dependencies must be installed for this application to work properly: ${data.dependencies}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}

  License Link: ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Tests
  To run tests use: ${data.tests}

  ## Contributions
  Thanks to ${data.contributing} for contributing to this project.

  ## Credits
  ${data.credit}

  ## Contact
  If you have any questions, feel free to cantact me at: 
  * GitHub : https://github.com/${data.github}
  * Linkedin Profile Name :${data.linkedin}
  * E-mail :${data.email}
`;
  
}

module.exports = generateMarkdown;
