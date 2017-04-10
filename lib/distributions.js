const fees = require('../data/fees.json');
const orders = require('../data/orders.json');
const calculateOrderItemTotalFee = require('./fees').calculateOrderItemTotalFee;

let totalFundDistribution = {};

module.exports = {
  calculateDistribution: (type, price, distFund) => {
    let distTypeDataList = fees.filter(data => data.order_item_type === type);
    for (let distTypeData of distTypeDataList) {
      for (let dist of distTypeData.distributions) {
        distFund[dist.name] = distFund[dist.name] || 0.0;
        totalFundDistribution[dist.name] = totalFundDistribution[dist.name] || 0.0;
        let amt = parseFloat(dist.amount);
        distFund[dist.name] += amt; 
        totalFundDistribution[dist.name] += amt;
        price -= amt;
      }
    }
    if (price > 0) {
      distFund['Other'] = distFund['Other'] || 0.0;
      distFund['Other'] += price;
      totalFundDistribution['Other'] = totalFundDistribution['Other'] || 0.0; 
      totalFundDistribution['Other'] += price;
    }
    return distFund;
  },
  calculateOrderFundTotal: orderItems => {
    let distFund = {};
    for (item of orderItems) {
      let itemFee = calculateOrderItemTotalFee(item.type, item.pages);
      module.exports.calculateDistribution(item.type, itemFee, distFund);
    }
    return distFund;
  },
  resetTotalFundDistribution: () => {
    totalFundDistribution = {};
  },
  getTotalFundDistribution: () => {
    return totalFundDistribution;
  }
}