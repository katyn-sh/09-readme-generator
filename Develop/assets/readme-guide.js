// License Function
function renderLicenseBadge(license) {
  if (license === 'apache-2.0') {
      return `https://img.shields.io/badge/license-Apache-yellow`;
  }
  else if (license === 'mpl-2.0') {
      return `https://img.shields.io/badge/license-Mozilla Public-yellow`;
  }
  else if (license === 'bsl-1.0') {
      return `https://img.shields.io/badge/license-Boost Software-yellow`;
  }
  else if (license === 'mit') {
      return `https://img.shields.io/badge/license-MIT-yellow`;
  }
  else {
      return `https://img.shields.io/badge/license-No License-blue`;
  }
}
// Function that returns license link
function renderLicenseLink(license) {
  if (license !== 'No License') {
      return `https://choosealicense.com/licenses/${(license)}`;
  }
  else {
      return `#`;
  }
}
// no license -> empty string
function renderLicenseSection() {
  return `* [License](#license)`;
}

//Create a function to generate markdown for README
function generateReadme(data) {
  return `# ${data.title}
      
## [Description](#table-of-contents)
${data.description}

<img src="${renderLicenseBadge(data.license)}"/>

## Table-of-Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseSection()}
* [Contributing](#contributing)
* [Tests](#tests)
* [FAQs](#faqs)
   
## [Installation](#table-of-contents)
${data.installation}
   
## [Usage](#table-of-contents)
${data.usage}
       
## [license](#table-of-contents)
<img src="${renderLicenseBadge(data.license)}"/>

Your repository is licensed under an ${(data.license)} open source license, so other people can contribute more easily.More information can be found by clicking this [link.](${renderLicenseLink(data.license)})

## [Contributing](#table-of-contents)
If you want to:
* Suggest a feature
* Report an issue
* Improve documentation
* Contribute to the code

${data.contributing}
   
GitHub [issues page](https://github.com/${data.userName}/${data.repoName}/issues) 
   
## [Tests](#table-of-contents)
${data.tests}
   
## [FAQs](#table-of-contents)
Contact Information:

[GitHub](https://github.com/${data.userName}) / Email: ${data.email}`;
}

module.exports = { generateReadme };