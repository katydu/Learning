"use strict";
//註記型式一:註記在變數面前
var word = 'Hello World!';
//函式型別註記會在之後介紹
function mayReturnEitherStringOrNumber(b) {
    if (b) {
        return '20';
    }
    else {
        return 20;
    }
}
//註記型式二:註記在未知的值
var age = mayReturnEitherStringOrNumber(false);
console.log(typeof age);
//註記型式三:註記在未知的值，但是是用 as 的TS關鍵字
var ageAsString = mayReturnEitherStringOrNumber(true);
console.log(typeof ageAsString);
