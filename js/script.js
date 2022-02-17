
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
    let savingValue = document.getElementById("saving-input");
    savingValue.innerText = 10000 * 0.2;
}