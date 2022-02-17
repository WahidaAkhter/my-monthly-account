function getInput() {
    let incomeValue = document.getElementById("income-input").value;
    return parseInt(incomeValue);
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

}
function save() {
    let savingValue = document.getElementById("save-input").value;
    let savingParcentage = parseInt(savingValue);
    let savingAmount = getInput() * savingParcentage / 100;
    let saveingOutput = document.getElementById("saving-output");
    saveingOutput.innerText = savingAmount;
}