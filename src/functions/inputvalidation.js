

function checkEmpty(input) {
    if (input)
        return true
    return false
}

function checkLengthInput(input, minleng, maxleng) {
    let defineInput = String(input)
    if ((defineInput.length) < minleng ||
        (defineInput.length) > maxleng)
        return false
    return true
}


function formatNb(nb) {
    const newNb = new Intl.NumberFormat();
    const newFormatNb = newNb.format(nb);
    return newFormatNb
}

function discount(price, saleoff) {
    const newPrice = Number(price) - (Number(price) * Number(saleoff) / 100);
    const discountPrice = formatNb(newPrice);
    return discountPrice 
}

export { checkEmpty, checkLengthInput, discount, formatNb }; 