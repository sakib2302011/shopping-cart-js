function getElementValueById(elementId){
    const getElementValue = document.getElementById(elementId);
    const getElementValueString = getElementValue.innerText;
    const currentElementValue = parseInt(getElementValueString);

    return currentElementValue;
}
function setValueById(elementId, elementValue){
    const getElementValue = document.getElementById(elementId);
    getElementValue.innerText = elementValue;
}
function calculateTotalAmount(){
    // sub total
    const currentPhoneTotal = getElementValueById('phone-total');
    const currentCaseTotal = getElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal ;
    setValueById('sub-total', currentSubTotal);

    // total tax
    const totalTax = currentSubTotal * 0.1 ;
    const totalTaxString = (totalTax).toFixed(2);
    const currentTotalTax = parseFloat(totalTaxString);
    setValueById('total-tax', currentTotalTax);

    // total price 
    const totalAmount = currentSubTotal + currentTotalTax ;
    setValueById('total-price', totalAmount);

}