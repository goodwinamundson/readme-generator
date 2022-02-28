// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function returnLicenseBadge(license) {
  if (license === "") {
    return "";
  } else {
    return `![${license}](${returnLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function returnLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/MIT-license-green";
    case "Apache 2.0":
      return "https://img.shields.io/badge/Apache2.0-license-green"
    case "GNU GPL 2.0":
      return "https://img.shields.io/badge/GNU%20GPL%202.0-license-green"
      case "GNU GPL 3.0":
        return "https://img.shields.io/badge/GNU%20GPL%203.0-license-green"
    default:
      return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function returnLicenseSection(license) {
  if (license === "") {
    return "";
  } else {
    return returnLicenseBadge(license);
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {

  return `# ${data.title}

  ${returnLicenseSection(data.license[0])}

  ### Description 
  ${data.description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation 
  ${data.installation}


  ## Usage 
  ${data.usage}


  ## License 
  ${returnLicenseSection(data.license[0])} 


  ## Contribute
  ${data.contribute}


  ## Tests
  ${data.tests}


  ## Questions
  For any questions about this project, contact me at ${data.questions}. Or on github https://github.com/${data.username}.
`;
}


module.exports = generateMarkdown;
