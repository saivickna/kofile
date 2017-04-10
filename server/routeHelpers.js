const fees = require('../lib/fees');
const dist = require('../lib/distributions');

module.exports = {
  orderPrice: (req, res) => {
    let orders = req.body;
    if (orders === undefined || !Array.isArray(orders)) res.status(400).send('Order List not provided.');
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
      console.log(e);
      res.status(500).send(e);
    }
    res.status(200).send(JSON.stringify(priceOrders));
  },
  orderDist: (req, res) => {
    let orders = req.body;
    if (orders === undefined || !Array.isArray(orders)) res.status(400).send('Order List not provided.');
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
      res.status(500).send(e);
    }
    res.status(200).send(JSON.stringify(distOrders));   
  }
}