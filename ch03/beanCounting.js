const countChar = (char, str) => {
    const counter = [...str].reduce((acc, val) => {
        return val === char ?   ++acc : acc
    }, 0) 

    return counter
}

console.log(countChar('b', 'bebeto'))
