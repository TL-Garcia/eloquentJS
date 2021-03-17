const map = {
    one: true,
    two: true,
    hasOwnProperty: true
}

const hasTwo = Object.prototype.hasOwnProperty.call(map, 'one')
console.log(hasTwo)
