#! /usr/bin/env node
import inquirer from "inquirer";
import select from "inquirer";
import chalk from "chalk";

let GetRange = await select.prompt([
  {
    message: "select the range between 1 to",
    type: "list",
    name: "selectRange",
    choices: ["5", "10", "15"],
  },
]);
let range: number = 5;
if (GetRange.selectRange == 5) {
  range = 5;
} else if (GetRange.selectRange == 10) {
  range = 10;
} else if (GetRange.selectRange == 15) {
  range = 15;
}


let answer;
let flag: boolean = false;
let attempts = 5;
let score = 5;

for (let i = 0; i < attempts; i++) {
  const randomFloat = Math.random() * range + 1;
  const randomInt = Math.floor(randomFloat);
  answer = await inquirer.prompt([
    {
      message: `guess the number between 1 to ${range} =>`,
      type: "number",
      name: "guess",
    },
  ]);

  if (answer.guess === randomInt) {
    console.log(
      chalk.whiteBright.bgGreen.bold("Hurray! You guessed the Right Number")
    );
    flag = true;
    break;
  } else if (answer !== randomInt && i < 4) {
    console.log(
      chalk.bgRedBright.white.bold(
        `You guessed the wrong Number. the Right number was \t`
      ) +
        chalk.green.underline(randomInt) +
        `\n` +
        chalk.underline.italic.bold.white.bgBlue.underline("Please Try Again")
    );
    score--;
  }
}
if (flag == false) {
  console.log(
    chalk.bgRed.white.bold(
      "You haven't got Right any of the Number. Better Luck Next Time"
    )
  );
  score--;
}

let Perc = (score / 5) * 100;

console.log(
  `\n${chalk.yellow.bold(
    `Your probability of guessing the right number was ${Perc}%`
  )}`
);
