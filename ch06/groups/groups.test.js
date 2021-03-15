const Group = require('./groups.js')

describe('Can create a Group', () => {
    test('returning an empty set', () => {
        const newGroup = new Group
        expect(newGroup.length).toBe(0)
    })

    test('from an iterable object', () => {
        const newGroup = Group.from([10, 20])
        expect(newGroup).toBeInstanceOf(Group)
        expect(newGroup.length).toBe(2)
    })
})

describe('groups can add new elements', () => {
    test('', () => {
        const newGroup = new Group
        const val = 10
        newGroup.add(val)
        const hasElement = newGroup.has(val)

        expect(newGroup.length).toBe(1)
        expect(hasElement).toBe(true)
    })

    test('but will throw error if the element is already a member', () => {
        const newGroup = Group.from([10, 20])
        const fn = () => newGroup.add(10)
        expect(fn).toThrow()
    })
})

describe('groups can delete elements', () => {
    test('if they are members of the group', () => {
        const newGroup = Group.from([10, 20, 30])
        const length = newGroup.length

        expect(newGroup.has(10)).toBe(true)
        newGroup.delete(10)
        expect(newGroup.has(10)).toBe(false)
        expect(newGroup.length).toBe(length - 1)
    })

    test('but will throw error if value is not a member', () => {
        const newGroup = Group.from([10, 20, 30])
        const fn = () => newGroup.delete(40)

        expect(fn).toThrow()
    })
})
