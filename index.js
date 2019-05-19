module.exports = {
    /**
     * The sum of two operators
     * @example
     * n1 = 1, n2 = 3 = > result 4
     * @param {*} n1 first operator of the sum
     * @param {*} n2 second operator of the sum
     */
    sum: function(n1, n2) {
        return n1 + n2;
    },
    /**
     * The substract of two operators
     * @example
     * n1 = 3, n2 = 1 = > result 2
     * @param {*} n1 first operator of the substraction
     * @param {*} n2 second operator of the substraction
     */
    substract: function(n1, n2) {
        return n1 - n2;
    },
    /**
     * The multiply of two operators
     * @example
     * n1 = 1, n2 = 3 = > result 3
     * @param {*} n1 first operator of the multiplication
     * @param {*} n2 second operator of the multiplication
     */
    multiply: function(n1, n2) {
        return n1 * n2;
    },
    /**
     * The divide of two operators
     * @example
     * n1 = 3, n2 = 1 = > result 3
     * @param {*} n1 first operator of the division (dividend)
     * @param {*} n2 second operator of the division (divider)
     */
    divide: function(n1, n2) {
        return n1 / n2;
    }
}