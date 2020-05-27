let inputString = '';

const countChar = (inputString, requiredChar) => {
    let CharAmount = 0;
    for (let counter = 0; counter < inputString.length; counter++) {
        if (inputString[counter] === requiredChar) CharAmount++;
    }

    return CharAmount;
}

console.log(countChar(inputString, 'z'));
