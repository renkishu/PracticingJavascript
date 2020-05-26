const value = 1;

function isEven(a) {
    if(a === 0) return true;
    else if (a > 0) return isEven(a - 2);
    else return false;
}

if (value >= 0) console.log(isEven(value));
else console.log('Error: Negative Number')
