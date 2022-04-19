"use strict";
exports.__esModule = true;
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello Typescript';
var numberArray = [1, 1, 2, 3, 4, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 4, 5, 8, 13];
var words = ['Hello', 'Typescript'];
// Tuple
var contact = ['Lev', 123213];
// Any
var variable = 42;
// ...
variable = 'New String';
variable = [];
// ===
function sayMayName(name) {
    console.log(name);
}
sayMayName('Lev');
// Never (type for infinite and never ending functions)
function throwError(message) {
    throw new Error("");
}
function infinite() {
    while (true) {
        //...
    }
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
