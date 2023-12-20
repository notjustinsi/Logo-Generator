import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes';
import fs from 'fs';

async function run() {
  // Prompt user for input
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (value) => value.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  // Create the selected shape
  let shape;
  switch (userInput.shape) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape.');
      return;
  }

  // Set shape properties based on user input
  shape.setText(userInput.text);
  shape.setTextColor(userInput.textColor);

  // Generate SVG file
  const svgContent = shape.render();
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

// Run the application
run();
