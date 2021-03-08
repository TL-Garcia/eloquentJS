const every = (arr, test) => {
    for (el of arr) {
        if (!test(el)) {
            return false
        }
    }

    return true
}

const everyWithSome = (arr, test) => {
    return !arr.some(e => !test(e))
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
