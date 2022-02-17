// to get the amount of income 

function getInput() {
    let incomeValue = document.getElementById("income-input").value;
    return parseInt(incomeValue);
}
// to get the amount of balance

function Aboutbalance() {
    let balanceInput = document.getElementById("balance");
    return balanceInput.innerText;
}

// error case handling for negative number

function varifyError() {
    let incomeValue = document.getElementById("income-input").value;
    let foodValue = document.getElementById("food-input").value;
    let rentValue = document.getElementById("rent-input").value;
    let clothesValue = document.getElementById("clothes-input").value;
    let savingValue = document.getElementById("save-input").value;

    if (parseInt(foodValue) < 0) {
        alert("you cant put negative value here sir");

        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }
    if (parseInt(rentValue) < 0) {
        alert("you cant put negative value here sir");

        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }
    if (parseInt(clothesValue) < 0) {
        alert("you cant put negative value here sir");

        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }
    if (parseInt(incomeValue) < 0) {
        alert("you cant put negative value here sir");

        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }
    if (parseInt(savingValue) < 0) {
        alert("you cant put negative value here sir");
        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }

    // error handling part 2 if expenses > income

    if (parseInt(document.getElementById("total-expense").innerText) > parseInt(document.getElementById("income-input").value)) {
        alert("you expended too much!!")
        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }

    // error handling part 3 about save percentage

    if (parseInt(savingValue) > 100) {
        alert("oh! it is too much");
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }

    // error handling part 4

    if (isNaN(foodValue)) {

        alert("enter a valid food value sir");
        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }
    if (isNaN(incomeValue)) {

        alert("enter a valid income value sir");
        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }
    if (isNaN(rentValue)) {

        alert("enter a valid rent value sir");
        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }
    if (isNaN(clothesValue)) {

        alert("enter a valid clothes value sir");
        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }
    if (isNaN(savingValue)) {

        alert("enter a valid number sir");
        document.getElementById("balance").innerText = "";
        document.getElementById("total-expense").innerText = "";
        document.getElementById("saving-output").innerText = "";
        document.getElementById("remaining-input").innerText = "";
    }

    // error handling part 5

    if (parseInt(document.getElementById("saving-output").innerText) > parseInt(document.getElementById("balance").innerText)) {
        alert("please recheck your saving amount sir");
        document.getElementById("remaining-input").innerText = "";
    }

}

function calculate() {

    // total expenses

    let foodValue = document.getElementById("food-input").value;
    let rentValue = document.getElementById("rent-input").value;
    let clothesValue = document.getElementById("clothes-input").value;
    let totalValue = parseInt(foodValue) + parseInt(rentValue) + parseInt(clothesValue);
    let totalExpenseInput = document.getElementById("total-expense");
    totalExpenseInput.innerText = totalValue;

    // total balance

    let incomeValue = document.getElementById("income-input").value;
    let balanceInput = document.getElementById("balance");
    let totalBalance = parseInt(incomeValue) - totalValue;
    balanceInput.innerText = totalBalance;

    varifyError();
}

function save() {

    // saving percentage

    let savingValue = document.getElementById("save-input").value;
    let savingParcentage = parseInt(savingValue);

    // using getInput function to get the amount of income

    let savingAmount = getInput() * savingParcentage / 100;
    let saveingOutput = document.getElementById("saving-output");
    saveingOutput.innerText = savingAmount;

    // remaining balance 

    let remainingBalanceInput = document.getElementById("remaining-input");

    // using balance funtion to get amount of balance

    remainingBalanceInput.innerText = Aboutbalance() - savingAmount;


    varifyError();
}