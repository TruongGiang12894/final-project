function checkEmpty(input) {
    if (input)
        return true
    return false
}

function checkLengthInput(input, minleng, maxleng) {
    let defineInput = `${input}`;
    if ((defineInput.length) < minleng ||
        (defineInput.length) > maxleng)
        return false
    return true
}


export { checkEmpty, checkLengthInput }; 