
const minValue = (a, b) => {
    if (b == undefined || a < b) return a; 
    else return b;
}

console.log(minValue(-100));

