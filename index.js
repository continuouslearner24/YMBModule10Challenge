const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
const fs = require("fs");
const Shape = require("./lib/shapes");

// Define the questions for user input
const promptUser = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for your logo:",
    validate: (input) => input.length <= 3 || "Please enter no more than three characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the color for the text (e.g., 'red', '#FF0000'):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for your logo:",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the color for the shape (e.g., 'blue', '#0000FF'):",
  },
];

// Function to write the SVG logo to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error saving the file:", err);
    } else {
      console.log(`Your logo has been saved as ${fileName}`);
    }
  });
}

// Function to initialize the application
function init() {
  prompt(promptUser)
    .then(({ text, textColor, shape, shapeColor }) => {
      // Create a new shape object based on the user's choice
      const selectedShape = new Shape(shape, shapeColor);

      // Generate the SVG content with the shape and text
      const logo = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${selectedShape.render()}<text x="110" y="130" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

      // Ensure the directory exists or create it before writing the file
      const dir = "./Logos";
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }

      // Write the generated logo to a file
      writeToFile(`${dir}/logo.svg`, logo);
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
}

// Start the application
init();
