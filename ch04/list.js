const arrayToList = (arr) => {
    let list = null

    for (let i = arr.length -1; i >= 0; i--) {
        const listElement = {
            value: arr[i],
            rest: list
        }
        list = listElement
    }
    return list
}

const listToArray = (list) => {
    let remainingList = list
    const values = [] 

    while (remainingList) {
        values.push(remainingList.value)
        remainingList = remainingList.rest
    }

    return values
}

const prepend = (el, list) => {
    return {
        value: el,
        rest: list
    }
}

const nth = (list, index) => {
    const arr = listToArray(list)
    return arr[index]
}

const nthRecursive = (list, index) => {
    if (!list) {
        return undefined
    } 

    if (index === 0) {
        return list.value
    } else {
        return nthRecursive(list.rest, --index)
    }
}

const deepEqual = (objA, objB) => {
    const keysA = Object.keys(objA)
    const keysB = Object.keys(objB)

    if (keysA.length !== keysB.length) {
        return false
    }

    for (let i = 0; i < keysA.length; i++) {
        const keyA = keysA[i]
        const keyB = keysB[i]
        const valA = objA[keyA]
        const valB = objB[keyB]

        if (keyA !== keyB) {
            return false
        } else {
            if (valA && valB && typeof valA === 'object' && typeof valB === 'object') {
                return deepEqual(valA, valB)
            } else if (valA !== valB) {
                return false
            }
        }
    }

    return true
}

const foo = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}

const bar = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: {
                value: 4,
                rest: null
            }
        }
    }
}

console.log(deepEqual(foo, bar))
