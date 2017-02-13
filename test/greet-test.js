'use strict';

const greet = require ('../lib/greet.js');
const assert = require ('assert');

describe('Greeting Module',function() {
  describe('#sayHi', function (){
    it('should return hello cayla!', function(){
      var result = greet.sayHi('cayla');
      assert.ok(result === 'hello cayla!', 'not equal to hello cayla');
    });
    it('should throw a missing name name error', function(){
      assert.throws(function(){
        greet.sayHi();
      },'error not thrown');
    });
  });
  describe('#sayBye', function(){
    it('should return see ya later!!', function(){
      var adios = 'see ya later!!';
      assert.ok(adios === 'see ya later!!', 'not equal to see ya later!!');
    });
  });
});
