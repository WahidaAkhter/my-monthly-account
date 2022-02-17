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

    // clearing input value
    foodValue = "";
    rentValue = "";
    clothesValue = "";
    incomeValue = "";
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

    //    clean up
    savingValue.value = "";


}