// Handle Diposite Event Handler
document.getElementById('deposit-button').addEventListener('click', function () {

    // update deposit total 
    const dipositeInput = document.getElementById('deposit-input');
    const dipositeInputAmountText = dipositeInput.value;
    const dipositeInputAmount = parseFloat(dipositeInputAmountText);

    // get the amount deposited
    const dipositeInputTotal = document.getElementById('deposite-total');
    const dipositeTotalAmountText = dipositeInputTotal.innerText;
    const dipositeTotalAmount = parseFloat(dipositeTotalAmountText);
    const dipositeAccountTotal = dipositeTotalAmount + dipositeInputAmount;
    dipositeInputTotal.innerText = dipositeAccountTotal;

    // update account balance
    const totalBalanceInput = document.getElementById('total-Balance');
    const totalBalanceAmountText = totalBalanceInput.innerText;
    const bankTotalBalance = parseFloat(totalBalanceAmountText);

    const newTotalBalance = bankTotalBalance + dipositeInputAmount;
    totalBalanceInput.innerText = newTotalBalance;

    // Clear Diposite Input 
    dipositeInput.value = '';
})


// Handle Withdraw Event Handler

document.getElementById('withdraw-button').addEventListener('click', function () {

    // update withdraw total 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);

    // get the amount withdraw
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const withdrawTotalAmountText = withdrawTotalAmount.innerText;
    const accountTotalWithdraw = parseFloat(withdrawTotalAmountText);
    const totalWithdrawBalance = accountTotalWithdraw + withdrawAmount
    withdrawTotalAmount.innerText = totalWithdrawBalance;

    // update account balance
    const accountBalanceInput = document.getElementById('total-Balance');
    const accountBalanceInputText = accountBalanceInput.innerText;
    const totalAccountBalance = parseFloat(accountBalanceInputText);
    const newAccountTotalBalance = totalAccountBalance - withdrawAmount;
    accountBalanceInput.innerText = newAccountTotalBalance;

    // Clear Withdaw Input 
    withdrawInput.value = '';
})