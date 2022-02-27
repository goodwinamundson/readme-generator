// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else {
    return `![${license}](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/apm/l/MIT";
    case "Apache 2.0":
      return "https://img.shields.io/badge/license-Apache-green"
    case "GNU GPLv3":
      return "https://img.shields.io/badge/license-GPL-green"
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return renderLicenseBadge(license);
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {

  return `# ${data.title}

  ${renderLicenseSection(data.license)}

  ### Description 
  ${data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License 
  This project is licensed under ${renderLicenseSection(data.license[0])} 
  ## Contributions
  ${data.contribute}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.questions}. You can view more of my projects at https://github.com/${data.username}.
`;
}


module.exports = generateMarkdown;
