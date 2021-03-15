const Vec= require('./vectors.js')

describe('vector', () => {
    const x = 3
    const y = 4
    const length = Math.sqrt(x**2 + y**2)
    const newVector = new Vec(x, y)

    test('is a vector', () => {
        expect(newVector).toBeInstanceOf(Vec)
    })

    test('has an "x" property', () => {
        expect(newVector).toHaveProperty('x', x)
    })

    test('has an "y" property', () => {
        expect(newVector).toHaveProperty('y', y)
    })

    test('has "length" property', () => {
        expect(newVector).toHaveProperty('length', length)
    })

    test('can substract another vector', () => {
        const anotherX = 2
        const anotherY = 4
        const anotherVector = new Vec(anotherX, anotherY)

        const expected = {
            x: x - anotherX,
            y: y - anotherY
        } 

        const result = newVector.minus(anotherVector)


        expect(result).toStrictEqual(expected)
    })


    test('can add another vector', () => {
        const anotherX = 2
        const anotherY = 4
        const anotherVector = new Vec(anotherX, anotherY)

        const expected = {
            x: x + anotherX,
            y: y + anotherY
        } 

        const result = newVector.plus(anotherVector)


        expect(result).toStrictEqual(expected)
    })
})
