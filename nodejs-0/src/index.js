'use strict'

const getSum = arr => arr.reduce((acc, crr) => acc + crr);

const fibonacci = (fibonacciParam = [0, 1], maxValue = 350) => {
    const sum = getSum(fibonacciParam);

    console.log(sum);
    if (sum > maxValue)
        return [...fibonacciParam, sum]

    return fibonacci([...fibonacciParam, sum]);
    
}

const isFibonnaci = (num) => null

fibonacci()

module.exports = {
    fibonacci,
    isFibonnaci
}
