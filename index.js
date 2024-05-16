import inquirer from "inquirer";
//initialize user balance and pin code 
let myBalance = 5000;
let mypin = 1234;
//print welcome message
console.log("welcome to khadija - ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code:"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("pin is correct, login successfuly!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter the amount to withdraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount}withdraw successfuly`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your account balance is: ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect,try again!");
}
