const fees = require('../data/fees.json');
const orders = require('../data/orders.json');
const calculateOrderItemTotalFee = require('./fees').calculateOrderItemTotalFee;
console.log(calculateOrderItemTotalFee('Real Property Recording', 5));