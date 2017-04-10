const orders = require('../data/orders.json');
const calculateOrderTotalFee = require('./fees').calculateOrderTotalFee;
const dist = require('./distributions');

//Print all of the orders in the required format 
var printFees = () => {
  for (let order of orders) {
    let orderItemFees = calculateOrderTotalFee(order.order_items);
    console.log(`Order ID: ${order.order_number}`);
    for (let orderItem of orderItemFees.itemFees) {
      console.log(`   Order item ${orderItem.type}: $${orderItem.price.toFixed(2)}`);
    }
    console.log(`   Order total: ${orderItemFees.total}`);
  }
}

var printDistributions = () => {
  dist.resetTotalFundDistribution();
  for (let order of orders) {
    let orderFundDist = dist.calculateOrderFundTotal(order.order_items);
    console.log(`Order ID: ${order.order_number}`);
    for (let fund in orderFundDist) {
      console.log(`   Fund - ${fund}: $${orderFundDist[fund]}`)
    }
  }
  let totalFundDist = dist.getTotalFundDistribution();
  console.log('Total distributions:')
  for (fund in totalFundDist) {
    console.log(`   Fund - ${fund}: $${totalFundDist[fund]}`);
  }
}

//Only print the data if the print argument is passed
process.argv.forEach(val => {
  if (val === 'fees') {
    printFees();
  } else if (val === 'dist') {
    printDistributions();
  }
});