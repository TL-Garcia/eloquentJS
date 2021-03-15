const removeDuplicates = (iterable) => {
    return iterable.filter((e, i) => i === iterable.indexOf(e))
}

module.exports = class Group {
    constructor() {
        this.members = [] 
    }

    add(member) {
        if (this.members.includes(member)) {
            throw new Error('Group already contains member')
        }

        this.members.push(member)
    }

    delete(match) {
        const index = this.members.indexOf(match)
        if (index !== -1) {
            this.members.splice(index, 1)
        } else {
            throw new Error('Value is not a member, cannot delete')
        }
    }

    has(value) {
        return this.members.includes(value)
    }

    get length() {
        return this.members.length
    }

    static from(iterable) {
        const cleanIterable = removeDuplicates(iterable)
        const group = new Group()
        cleanIterable.forEach(m => group.add(m))

        return group
    }
}
