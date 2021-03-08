const flattenArray = (arr) => {
    const flatArr = arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc.concat(val)
        } else {
            acc.push(val)
            return acc
        }
    }, [])

    return flatArr
}

const foo = [1, 2, [3, 4], 5]

console.log(flattenArray(foo))
