// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title for your README?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },
  {
    type: "input",
    name: "install",
    message: "What is the command line to install?",
  },
  {
    type: "input",
    name: "GitHubUser",
    message: "What is your Github repository?",
  },
  {
    type: "input",
    name: "license",
    message: "What is the licensing?",
  },
  {
    type: "input",
    name: "contribute",
    message: "Any contributions?",
  },
];

// TODO: Create a function to write README file
const generateREADME = ({
  title,
  description,
  motivation,
  reason,
  learnt,
  usage,
  install,
  GitHubUser,
  license,
  contribute,
  email,
}) =>
  `# ${title}

## Description

${description}<\n>
Motivation: ${motivation}<\n>
Reason to build project: ${reason}<\n>
What I learnt: ${learnt}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Usage

How to use: ${usage}

## Installation
    
 \`\`\`${install}\`\`\`
   
## Credits

[Special credit to this repo link](https://github.com/coding-boot-camp/potential-enigma)

## License

${license}

## Questions
Github Username: ${GitHubUser}
[Contribute at this repo link] (${contribute})
Email: ${email}`;

// TODO: Create a function to initialize app
inquirer
  .prompt([
    // Your application should prompt the user for information like their name, location,
    //bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.
    {
      type: "input",
      name: "title",
      message: "What is the title for your README?",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project",
    },
    {
      type: "input",
      name: "motivation",
      message: "What was the motivation for this project?",
    },
    {
      type: "input",
      name: "reason",
      message: "Reason to build the project?",
    },
    {
      type: "input",
      name: "learnt",
      message: "What did you learn in this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this?",
    },
    {
      type: "input",
      name: "install",
      message: "What is the command line to install?",
    },
    {
      type: "input",
      name: "GitHubUser",
      message: "What is your Github repository?",
    },
    {
      type: "list",
      name: "license",
      message: "What is the licensing?",
      choices: [
        "Academic Free License v3.0",
        "Apache license 2.0",
        "Artistic license 2.0",
        "Boost Software License 1.0",
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        "BSD 3-clause Clear license",
        "BSD Zero-Clause license",
        "Creative Commons license family",
        "Creative Commons Zero v1.0 Universal",
        "Creative Commons Attribution 4.0",
        "Creative Commons Attribution Share Alike 4.0",
        `Educational Community License v2.0`,
        `Eclipse Public License 1.0`,
        `Eclipse Public License 2.0`,
        `European Union Public License 1.1`,
        `GNU Affero General Public License v3.0`,
        `GNU General Public License family`,
        `GNU General Public License v2.0`,
        `GNU General Public License v3.0`,
        `GNU Lesser General Public License family`,
        `GNU Lesser General Public License v2.1`,
        `GNU Lesser General Public License v3.0`,
        `LaTeX Project Public License v1.3c`,
        `Microsoft Public License`,
        `MIT`,
        `Mozilla Public License 2.0`,
        `Open Software License 3.0`,
        `PostgreSQL License`,
        `SIL Open Font License 1.1`,
        `University of Illinois/NCSA Open Source License`,
        `The Unlicense`,
        `zLib License`,
      ],
    },
    {
      type: "input",
      name: "contribute",
      message: "Any contributions?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ])
  .then((answers) => {
    const readMe2 = generateREADME(answers);
    fs.writeFile("README2.md", readMe2, (err) =>
      err ? console.log(err) : console.log("ReadMe file created!")
    );
  });
