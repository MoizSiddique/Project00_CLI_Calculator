#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';

enum Operators {
    Addition = "addition",
    Subtraction = "subtraction",
    Multiplication = "multiplication",
    Division = "division"
}

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000);
    });
}
async function startCalculation(){
    const intro = chalkAnimation.rainbow("Lets start calculation....\n");
    await sleep();
    intro.stop();
    console.log(chalk.green(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|\n`))
}
async function userPrompt() {

    await startCalculation();
    let operator = await inquirer.prompt([{
        name: "operation",
        type: "list",
        message: "Select Operator",
        choices: Object.values(Operators)
    }]);

    let answers = await inquirer.prompt([{
        name:"operand1",
        type:"number",
        message:"Enter first value:"
    },
    {
        name:"operad2",
        type:"number",
        message:"Enter second value:"
    }])

    calculation(operator.operation, answers.operand1, answers.operad2);
}

function calculation(operator:string, operand1:number, operand2:number): void{
    
    let result = 0;
    
    switch(operator){
        case "addition":
            result = operand1 + operand2;
            break;
        case "subtraction":
            result = operand1 - operand2;
            break;
        case "multiplication":
            result = operand1 * operand2;
            break;
        case "division":
            result = operand1 / operand2;
            break;
    }

    console.log(`\nThe result of ${operator} ${operand1} and ${operand2}: ${chalk.green(result)}`);
}

userPrompt();

