const fees = require('../data/fees.json');
const orders = require('../data/orders.json');

//Calculate total fees for a given order item
var calculateOrderItemTotalFee = (type, pages) => {
  let feeTypeDataList = fees.filter(data => data.order_item_type === type);
  let total = 0.0;
  for (let feeTypeData of feeTypeDataList) {
    for (let fee of feeTypeData.fees) {
      if (fee.type === 'flat') {
        total += parseFloat(fee.amount);
      } else if (fee.type === 'per-page') {
        total += parseFloat((pages-1)*fee.amount);
      }
    }
  }
  return total;
} 

//Calculate total fees for all items in a given order
var calculateOrderTotalFee = orderItems => {
  let order = {total: 0.0, itemFees: []};
  let total = 0.0;
  for (let item of orderItems) {
    let itemFee = {type: item.type, price: calculateOrderItemTotalFee(item.type, item.pages)};
    total += itemFee.price;
    order.itemFees.push(itemFee);
  }
  order.total = total;
  return order;
}

console.log(calculateOrderItemTotalFee('Real Property Recording', 5));