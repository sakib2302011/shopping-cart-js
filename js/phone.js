function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value ;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;

    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;

    return newPhoneNumber;
}
function updatePhoneValue(newPhoneNumber){
    const newPhoneTotal = newPhoneNumber * 1219 ;
    const phoneNumberTotal = document.getElementById('phone-total');
    phoneNumberTotal.innerText = newPhoneTotal;
}
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneValue(newPhoneNumber);
    calculateTotalAmount();
    
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneValue(newPhoneNumber);
    calculateTotalAmount();
})