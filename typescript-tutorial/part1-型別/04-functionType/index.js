var aSimpleFunction = function () {
    'Hi';
};
//console.log(aSimpleFunction);
var addition = function (num1, num2) {
    return num1 + num2;
};
var addition2 = function (param1, param2) {
    return param1 + param2;
};
var shouldBeString = addition2(123, 456);
