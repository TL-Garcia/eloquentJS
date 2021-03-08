const foo = ['hello', 'world', 'foo', 'bar']

const reverseArray = (arr) => {
    let newArr = []

    for (let e of arr) {
        newArr.unshift(e)
    }
    return newArr
}

const reverseArrayInPlace = (arr) => {
    const arrCopy = [...arr]

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arrCopy[arr.length - i - 1]
    }
}

const reverseArrayInPlace2 = (arr)  => {
    let temp; 

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        temp = arr[i]
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = temp
    }
}

reverseArrayInPlace2(foo)
console.log(foo)
