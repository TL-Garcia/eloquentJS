const num = Number(process.argv[2])
const isEven = (num) => {
    if (num > 1) {
        return isEven(num -2)
    } else if (num === 1) {
        console.log(true)
    } else if (num === 0) {
        console.log(false)
    } else {
        console.log('this wat you get ' + num)
    }
}

isEven(num)
