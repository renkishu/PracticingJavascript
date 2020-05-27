const reverseArray = array => {
    let newArray = [];

    for (let counter = 0; counter < array.length; counter++) {
        newArray[counter] = array[(array.length - 1) - counter]
    }

    return newArray;
}

const reverseArrayInPlace = array => {
    for (let counter = 0; counter < Math.floor(array.length/2); counter++) {
        let temp = array[counter];
        array[counter] = array[(array.length - 1) - counter];
        array[(array.length - 1) - counter] = temp;
    }

    return array;
}

let num15 = [1, 2, 3, 4, 5];

console.log(reverseArray(num15));
console.log(reverseArrayInPlace(num15));
