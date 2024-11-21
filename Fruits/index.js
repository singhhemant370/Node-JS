// get the data from the files apple, banana, orange and module.exports these data for script file get from the index file

const apple = require("./apple")
const mango = require("./mango")
const orange = require("./orange")

let fruits = [apple, mango, orange];

module.exports = fruits;