class Vec {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    plus(vector) {
        const x = this.x + vector.x
        const y = this.y + vector.y

        return {
            x,
            y
        }
    }

    minus(vector) {
        const x = this.x - vector.x
        const y = this.y - vector.y

        return {
            x,
            y
        }
    }

    get length() {
        return Math.sqrt(this.x**2 + this.y**2)
    }
}

module.exports = Vec
