//讀者試試看一
let objectsArray2 = [
    {message: 'Hello'},
    {message: 'Hi' ,revolt: true},
    {message: 'Goodbye'}
];

//讀者試試看二
//其實呢，我們除了有選用屬性外（Optional Properties），針對廣義物件諸如：
//函式也有選用參數（Optional Parameters）
//元組有選用元素（Optional Elements）
//但把這兩個東西加入這篇文章，筆者也覺得太大了，
//而且重要性個人認為反倒是還好，因此放在這邊讓讀者自行嘗試看看這些 Feature 囉～
//有空實驗一下，看看各種組合情況會有什麼結果！
let additionThreeAsDefault = function (num1: number, num2?: number){
    if(num2){
        return num1+num2;
    }
    return num1+3;
}

type VehicleInfoWithOptionalElements = [string,string,string?,Date?];