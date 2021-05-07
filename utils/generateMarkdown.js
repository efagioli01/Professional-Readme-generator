// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    // license = license.split(' ').join('%20')
    return `![Github license](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`
  }
  return
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
    This project is licensed under ${license} license`
  }
  return
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //data is responses
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Use](#use)
* [Credits](#credits)
* [Email](#email)
* [IGithub](#github)

${renderLicenseLink(data.license)} 

## Installation
to install dependancies run the follow command
${data.installation}

${renderLicenseSection(data.license)}

## Useage

${data.use}

## Credits

${data.credits}

## Email

${data.email}

## Github

${data.github}



`;
}

module.exports = generateMarkdown;
