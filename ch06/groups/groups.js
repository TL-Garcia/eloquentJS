 class Group {
    constructor() {
        this.members = [] 
    }

    add(member) {
	if (!this.has(member)) {
	    this.members.push(member)
	}
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
        const group = new Group()
        iterable.forEach(m => group.add(m))

        return group
    }

    [Symbol.iterator]() {
	return new GroupIterator(this)
    } 
}

class GroupIterator {
    constructor(group) {
	this.group = group
	this.counter = 0
    }

    next() {
	if (this.counter >= this.group.length) {
	    return {
		done: true
	    }
	}

	const value = this.group.members[counter]
	this.counter++

	return {
	    value,
	    done: false
	}
    }
}
