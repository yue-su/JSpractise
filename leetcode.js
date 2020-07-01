/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let arr = [0]
    let i = 1
    while (n >= i) {
        arr.push(i)
        n -= i
        i++
    }

    return arr[arr.length -1]
};

console.log(arrangeCoins(10))