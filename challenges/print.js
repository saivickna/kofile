const orders = require('../data/orders.json');
const calculateOrderTotalFee = require('./fees').calculateOrderTotalFee;

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

//Only print the data if the print argument is passed
process.argv.forEach(val => {
  if (val === 'fees') {
    printFees();
  } else if (val === 'distributions') {
    printDistributions();
  }
});