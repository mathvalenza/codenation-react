'use strict'

const fibonacci = ({ fibonacciParam = [0, 1], maxValue = 350 } = {}) => {
    const temp = [...fibonacciParam];
    const lastElement = temp.pop();
    const penultElement = temp.pop();
    const sum = lastElement + penultElement;

    if (sum > maxValue)
        return [...fibonacciParam, sum];

    return fibonacci({ fibonacciParam: [...fibonacciParam, sum] });
}

const isFibonnaci = (num) => fibonacci({ maxValue: num }).includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
