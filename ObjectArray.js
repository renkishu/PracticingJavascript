function arrayToList(array) {
    let list = null

    for (let counter = 0; counter < array.length; counter++) {
        list = { value: array[(array.length - 1) - counter], rest: list };
    }

    return list;
}

function listToArray(list) {
    let array = [];

    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }

    return array;
}

function prepend(value, list) {
    return list = { value: value, rest: list };
}

function nth(list, elementPos) {
    if (!list) return undefined;
    else if (elementPos === 0) return list.value;
    else return nth(list.rest, elementPos - 1);
}

const list = arrayToList([1, 2, 3]);

console.log(list);
console.log(listToArray(list));
console.log(prepend(0, list));
console.log(nth(list, 1));
