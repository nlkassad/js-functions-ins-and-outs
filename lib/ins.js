'use strict';

const product = function () {

};
// Test product(2, 5, 1);
const max = function () {
  let result = -Infinity; // can also use let result = arguments[0];
  for (let i = 0; i < arguments.length; i++){
    if(arguments[i] > result){
      result = arguments[i];
    }
  }
  return result;
};
// Test with max(4, 56, 4687, 3);
// Break test max(-45, -234, -234234234);

// Lab
// Test product(2, 5, 1);
let array = {
  time1: '3',
  time2: '1',
  time3: '2'
};

const max = function () {
  let result = -Infinity; // can also use let result = arguments[0];
  for (let i = 0; i < arguments.length; i++){
    if(array[i] > result){
      result = arguments[i];
    }
  }
  return result;
};
// Test with max(4, 56, 4687, 3);
// Break test max(-45, -234, -234234234);

// take an array, and return a new array with values inside multiplied by 2
const arrayTimes2 = function () {
  // arguments[]
  let doubledArray = [];
  for(let i = 0; i < array.length; i++){
    doubledArray[i] = array[i] * 2;
  }

  // return result
  return doubleArray;
};
// Test with let array = [1, 5, 23, 983]

// this function takes an object and adds a property to it
const addProperty = function (obj, prop, val) {
  console.log('prop is ', prop);
  obj[prop] = val;
  //in order to use a variable we need to use bracket notation without quotes
};
// Test with let alex = { name: 'Alex', lastName: 'Not beers'};


// this function takes a value, a predicate callback and a mutator call back
// use: only get only get evens out of array of numbers and multiply even numbers
const transform = function (values, predicate, mutator) {
  // if calling predicate with value as argument == true
  // call mutator with value as argument
  let result = [];
  //
  for(let i = 0; i < values.length; i++){
    if (predicate(values[i])) {
      result.push(mutator(values[i])); // will return just the values
      // result[i] = (mutator(values[i])); // will return a value including empty for all positions
    }
    else {
      result.push(values[i]);
    }
  }
  return result;
};
// Test for usable transform should return [function]
// Test values => [3, van, test]

const isCentimeters = function(height){
  if(height > 100){
    return true;
  }
  else{
    return false;
  }
};
// Test for usable isCentimeters should return [function]

const convertCmtoIn = function(val){
  return val * 0.39;
//  return result;
};
// Test for usable convertCmtoIn should return [function]

// expect a list that's an array of numbers, if it's even doble that numbers
// expected action transform([3, 4, 1, 8, 6]); returns var([3, 8, 1, 16, 12]);

const isEven = function(number){
  if((number%2) === 0){
    return true;
  }
  else{
    return false;
  }
};
// Test for usable isCentimeters should return [function]

const double = function(val){
  return val * 2;
//  return result;
};

const

module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
};
