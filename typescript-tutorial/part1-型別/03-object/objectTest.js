//定義一系列隸屬廣義物件讓TS來推論
var arrayObject = [1, 2, 3, 4, 5];
var functionObject = function () { console.log('Again?'); };
var objectObject = new Promise(function (res) { return res(123); });
//promise介紹:https://wcc723.github.io/development/2020/02/16/all-new-promise/
console.log(objectObject); //Promise { 123 }
var primitiveObject = new String('WHAT');
var classItself = Object;
//根據物件完整性的理論推測:以下應該要被TS警告!
arrayObject.customProp = 123;
functionObject.customProp = 456;
objectObject.customProp = '?';
primitiveObject.customProp = 'Bird';
classItself.customProp = 3.14;
//根據物件完整性理論推測:以下應該不會怎麼樣，只是被我們(惡意)串改
//注意!值的型別要跟對應到該屬性接受的型別。這裡還沒教到函式與陣列型別，暫且先跟讀者說明:
//函式的型別組成包含input對應output，姑且先舉個簡單的例子
//Array.prototype.pop方法沒有任何input，但output可能是任意值，但由於陣列的特性，我們的陣列在'arrayObject'
//裡面全都是數字，因此型別為'number[]'，於是pop方法的函式型別理應來說是input為空，output為number:()=>number
//
//因此我們如果將pop複寫為以下方式，則不會出現警告喔:
arrayObject.pop = function () { return 123; };
//
//如果你改錯成其他型別一樣，譬如在這個案例裡return為空或是非'number'型別，
//則會被TS嫌棄，因為一樣是在破壞物件的完整性，以下這兩種就是:
arrayObject.pop = function () { console.log('Return nothing!'); };
arrayObject.pop = function () { return 'string'; };
