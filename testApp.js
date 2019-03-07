var assert = require('assert');
const tool = require('./app.js')
describe('testing Bobs Banana Budget',function() {
    it('check cost for only one day on first 7 days of month',function(){
      let oneDayCost=tool.calculateTotalCost("03/05/2019",1);
      assert.equal(oneDayCost,0.05);
    });
    it('check cost for only one day on second 7 days of month',function(){
      let oneDayCost2=tool.calculateTotalCost("03/11/2019",1);
      assert.equal(oneDayCost2,0.1);
    });
    it('check cost for only one day on third 7 days of month',function(){
      let oneDayCost3=tool.calculateTotalCost("03/19/2019",1);
      assert.equal(oneDayCost3,0.15);
    });
    it('check cost for only one day on fourth 7 days of month',function(){
      let oneDayCost4=tool.calculateTotalCost("03/25/2019",1);
      assert.equal(oneDayCost4,0.2);
    });
    it('check cost for only one day on remaining days of month',function(){
      let oneDayCost5=tool.calculateTotalCost("03/29/2019",1);
      assert.equal(oneDayCost5,0.25);
    });
    it('check cost on weekend',function(){
      let weekendCost=tool.calculateTotalCost("03/9/2019",1);
      assert.equal(weekendCost,0);
    });
    it('check cost for all first 7 days of the month',function(){
      let sevenDayCost=tool.calculateTotalCost("03/1/2019",7);
      assert.equal(sevenDayCost,0.25);
    });
    it('check cost for all second 7 days of the month',function(){
      let sevenDayCost2=tool.calculateTotalCost("03/7/2019",7);
      assert.equal(sevenDayCost2,0.45);
    });
    it('check cost for all third 7 days of the month',function(){
      let sevenDayCost3=tool.calculateTotalCost("03/14/2019",7);
      assert.equal(sevenDayCost3,0.7);
    });
    it('check cost for all fourth 7 days of the month',function(){
      let sevenDayCost4=tool.calculateTotalCost("03/21/2019",7);
      assert.equal(sevenDayCost4,0.95);
    });
    it('check cost for a month',function(){
      let monthlyCost=tool.calculateTotalCost("03/1/2019",30);
      assert.equal(monthlyCost,2.75);
    });
});
