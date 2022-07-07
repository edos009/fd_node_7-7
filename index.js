"use strict";

const {MyMath} = require('./MyMath');
const {Component} = require('./Component');

const result1 = MyMath.sum(7,7);
console.log(result1);

const component1 = new Component();
component1.render();

console.log('Hello guys!');