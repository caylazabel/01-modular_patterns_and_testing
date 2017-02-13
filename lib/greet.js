'use strict';


module.exports = exports = {};

exports.sayHi = function greet(name) {
  if(arguments.length === 0) throw new Error('name not provided');
  return `hello ${name}!`;
};

exports.sayBye = function () {
  console.log('adios');

exports.randomGreeting = function(){
  let someName = process.argv[2];
}
};
