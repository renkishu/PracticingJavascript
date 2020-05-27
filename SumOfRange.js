// creates an array that includes all numbers 
// from the start to the end parameter inclusive
const range = (start, end, step = 1) => {
    let result = [];
    
    // conditionals for steps that are positive,
    // negative, and zero
    // for loops add the values from start to end
    // to the result array
    if (step > 0) {
        for (start; start <= end; start+=step) {
            result.push(start);
        }
    } else if (step < 0) {
        if(start < end) return 'Invalid Parameters'
        else {
            for (start; start >= end; start+=step) {
                result.push(start);
            }
        }
    } else result = [start];
    
    return result;
}
// sum of the numbers between two values
const sum = (start, end) => {
    let total = 0;

    for (let value of range(start, end)) {
        total += value;
    }

    return total;
}

// prints out the sum and the range functions
console.log(sum(1, 100));
console.log(range(2, 5, 0));
