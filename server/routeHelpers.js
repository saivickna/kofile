const fees = require('../lib/fees');
const dist = require('../lib/distributions');

module.exports = {
  orderPrice: orders => {
    let priceOrders = [];
    for (let order of orders) {
      let priceOrder = {
        order_number: order.order_number, 
        fees:fees.calculateOrderTotalFee(order.order_items)
      };
      priceOrders.append(priceOrder);
    }
    return priceOrders;
  },
  orderDist: orders => {
    let distOrders = [];
    for (let order of orders) {
      let distOrder = {
        order_number: order.order_number, 
        fees:dist.calculateOrderFundTotal(order.order_items)
      };
      distOrders.append(distOrder);
    }
    return distOrders;    
  }
}