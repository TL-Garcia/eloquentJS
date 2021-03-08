const SCRIPTS = require('./scripts')

const dominantDirection = (text) => {
    const words = getWords(text)
    const scripts = words.map(identifyScript)
    const directionCount = countScripts(scripts)    

    const dominantDirection = directionCount.reduce((top, cur) => {
        return top.count > cur.count ? top : cur
    }).direction 
    return dominantDirection
}

const countScripts = (scripts) => {
    let counts = []
    
    for (const script of scripts) {
        const index = counts.findIndex(c => c.direction === script.direction)
        if (index === -1) {
            counts.push({direction: script.direction, count: 1})
        } else {
            ++counts[index].count 
        }
    }
    return counts
}

const identifyScript = (word) => {
    const charCode = word.codePointAt(0)

    for (script of SCRIPTS) {
        const isMatch = script.ranges.some(([lowerBound, upperBound]) => {
            return charCode >= lowerBound && charCode <= upperBound
        })

        if (isMatch) {
            return script
        }
    }
}

const getWords = (text) => text.split(' ').map(w => w.replace(/,$/g, ''))

const foo = "Hey, مساء الخير"
console.log(dominantDirection(foo))
