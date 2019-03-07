var chai = require('chai');
var expect = chai.expect;
const tool = require('./app.js')
describe('testing Bobs Banana Budget error handling',function() {
    it('No arguments passed',function(){
      try{
        tool.calculateTotalCost();
      }catch(error) {
        expect(error).to.equal('No arguments passed in the function,two arguments required');
      }
    });
    it('startDate not a string',function(){
      try{
        tool.calculateTotalCost(567,9);
      }catch(error) {
        expect(error).to.equal('startDate not a string');
      }
    });
    it('numberOfDays not a number',function(){
      try{
        tool.calculateTotalCost("3/1/2019","qwerty");
      }catch(error) {
        expect(error).to.equal('numberOfDays not a number');
      }
    });
    it('argument numberOfDays missing',function(){
      try{
        tool.calculateTotalCost("3/1/2019");
      }catch(error) {
        expect(error).to.equal('argument numberOfDays missing');
      }
    });
    it('numberOfDays should be a positive number',function(){
      try{
        tool.calculateTotalCost("3/1/2019",-1);
      }catch(error) {
        expect(error).to.equal('numberOfDays should be a positive number');
      }
    });
    it('numberOfDays should be less than 365',function(){
      try{
        tool.calculateTotalCost("3/1/2019",500);
      }catch(error) {
        expect(error).to.equal('numberOfDays should be less than 365');
      }
    });
    it('invalid startDate',function(){
      try{
        tool.calculateTotalCost("2019",5);
      }catch(error) {
        expect(error).to.equal('Invalid Date');
      }
    });
});
