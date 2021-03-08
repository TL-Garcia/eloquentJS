const range = (start, end, step) => {
    if (step > 0 && start > end || step < 0 && start < end)  {
        throw new Error('Invalid parameters') 
    }

    if (!step) {
        step = (start < end) ? 1 : -1
    }

    let numbersInRange = []

    for (let i = start; isInRange(i, start, end); i += step) {
        numbersInRange.push(i)
    }
    return numbersInRange
}

// imperative implementation
const sum01 = (nums) => {
    let result = 0

    for (num of nums) {
        result += num
    }
    return result
}

// functional implementation
const sum02 = (nums) => nums.reduce((acc, val) => acc + val, 0)

// utility
const isInRange = (num, range1, range2) => num >= range1 && num <= range2 || num <= range1 && num >= range2

console.log(range(10, 1))


