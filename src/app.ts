#!/usr/bin/env node

import inquirer from "inquirer";

enum Operators {
    Addition = "addition",
    Subtraction = "subtraction",
    Multiplication = "multiplication",
    Division = "division"
}

async function userPrompt() {
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

    console.log(`The result of ${operator} ${operand1} and ${operand2}: ${result}`);
}

userPrompt();

