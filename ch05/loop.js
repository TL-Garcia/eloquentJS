const loopRecursive = (val, doTest, doUpdate, doBody) => {
    if (!doTest(val)) {
       return 
    }

    doBody(val)
    const newVal = doUpdate(val)
    loopRecursive(newVal, doTest, doUpdate, doBody)

    return newVal
}

const loop = (val, doTest, doUpdate, doBody) => {
    let currentVal = val

    while (doTest(currentVal)) {
        doBody(currentVal)
        currentVal = doUpdate(currentVal)
    }

    return currentVal
}

loop(3, n => n > 0, n => n -1, console.log)
