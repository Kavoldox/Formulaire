import { should } from 'chai';
import store from 'src/store';

should();
/* eslint-disable */
describe('Store', function() {
  describe('getState()', function() {
    it('should be a function', function() {
      store.getState.should.be.a('function');
    });
  });
});
