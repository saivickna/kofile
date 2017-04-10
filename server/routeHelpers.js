const fees = require('../lib/fees');
const dist = require('../lib/distributions');

module.exports = {
  orderPrice: (req, res) => {
    let orders = req.body;
    if (orders === undefined || !Array.isArray(orders)) return res.status(400).send('Order List not provided.');
    let priceOrders = [];
    try {
      for (let order of orders) {
        let priceOrder = {
          order_number: order.order_number, 
          fees:fees.calculateOrderTotalFee(order.order_items)
        };
        priceOrders.push(priceOrder);
      }
    } catch (e) {
      return res.status(500).send(e);
    }
    res.status(200).send(priceOrders);
  },
  orderDist: (req, res) => {
    let orders = req.body;
    if (orders === undefined || !Array.isArray(orders)) return res.status(400).send('Order List not provided.');
    let distOrders = [];
    try {
      for (let order of orders) {
        let distOrder = {
          order_number: order.order_number, 
          fees:dist.calculateOrderFundTotal(order.order_items)
        };
        distOrders.push(distOrder);
      }
    } catch (e) {
      return res.status(500).send(e);
    }
    res.status(200).send(distOrders);   
  }
}