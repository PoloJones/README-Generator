const generateMarkdown = ({ title, description, installation, use, license, contribute, tests, github, email}) =>

`
# ${title} ![License](https://img.shields.io/badge/license-${license}-blue)

## Description

${description}

## Table of Contents

-[Installation](#installation)
-[Use](#Use)
-[License](#License)
-[Questions](#Questions)

## Installation

${installation}

## USE

${use}

## License 

${license}

Contact me if you have any questions contact me through ${github}, or by my ${email}.
`;

module.exports = generateMarkdown;