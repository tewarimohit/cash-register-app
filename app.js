const billingAmount = document.querySelector("#bill-amt");
const cashReceived = document.querySelector("#cash-amt");
const checkButton = document.querySelector("#check-btn");
const inputBox = document.querySelector(".input-box");
const checkBillAmount = document.querySelector("#check-bill-amt");
const errorHandler = document.querySelector("#error-handler");
const noteCount = document.querySelectorAll(".final-count")
const amtMessage = document.querySelector(".amt-msg");
const denominations = [2000, 500, 100, 50, 10, 5, 1];
hideAmount();

checkBillAmount.addEventListener("click", function eventHandlerOne() {
    
    hideMessage();
    
    if (isNaN(billingAmount.value)) {
        showMessage("Don't enter a String!! Enter the Amount.. ");}
        else {
            if (billingAmount.value > 0) {
                inputBox.type="text";
                 
                showAmount("Amount Received :");

                checkButton.addEventListener("click", function eventHandler() {
    
                    if (cashReceived.value >= billingAmount.value) {
                                    
                                    const changeToBeReturned = cashReceived.value - billingAmount.value;
                                    console.log(changeToBeReturned)
                                    changeHandler(changeToBeReturned);
                                } else {
                                    showMessage("Billing amount should be at least equal to the Received amount!!");
                                }
                    
                    });

            }
            else {

                showMessage("Invalid Amount!!");
            }

        }

})


function hideAmount() {
    amtMessage.style.display="none";
    
    inputBox.type="hidden";
}
function showAmount(amt) {
    
    amtMessage.style.display= "block";
    amtMessage.innerText = amt;
    
}

function hideMessage() {
    errorHandler.style.display = "none";
}

function showMessage(message) {

    errorHandler.style.display = "block";
    errorHandler.innerText = message;
}

function changeHandler(changeToBeReturned) {
    for (var i = 0; i < denominations.length; i++) {
        const numberOfNotes = Math.trunc(changeToBeReturned / denominations[i]);
        changeToBeReturned = changeToBeReturned % denominations[i];
        noteCount[i].innerText = numberOfNotes;
    }

}