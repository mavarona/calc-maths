module.exports = {
    /**
     * The sum of two operators
     * @example
     * n1 = 1, n2 = 3 = > result 4
     * @param {*} n1 first operator of the sum
     * @param {*} n2 second operator of the sum
     */
    sum: function(n1, n2) {
        return (this.areNumbers(n1, n2) ? n1 + n2 : this.messageError());
    },
    /**
     * The substract of two operators
     * @example
     * n1 = 3, n2 = 1 = > result 2
     * @param {*} n1 first operator of the substraction
     * @param {*} n2 second operator of the substraction
     */
    substract: function(n1, n2) {
        return (this.areNumbers(n1, n2) ? n1 - n2 : this.messageError());
    },
    /**
     * The multiply of two operators
     * @example
     * n1 = 1, n2 = 3 = > result 3
     * @param {*} n1 first operator of the multiplication
     * @param {*} n2 second operator of the multiplication
     */
    multiply: function(n1, n2) {
        return (this.areNumbers(n1, n2) ? n1 * n2 : this.messageError());
    },
    /**
     * The divide of two operators
     * @example
     * n1 = 3, n2 = 1 = > result 3
     * @param {*} n1 first operator of the division (dividend)
     * @param {*} n2 second operator of the division (divider)
     */
    divide: function(n1, n2) {
        return (this.areNumbers(n1, n2) ? n1 / n2 : this.messageError());
    },
    /**
     * Return message of error indicates that the two operators must be numbers
     */
    messageError: function() {
        console.log('The two operators must be numbers');
    },
    /**
     * Check if the two operators are numbers
     * @param {*} n1 first operator 
     * @param {*} n2 second operator
     */
    areNumbers: function(n1, n2) {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') {
            return false;
        }
        return true;
    }
}