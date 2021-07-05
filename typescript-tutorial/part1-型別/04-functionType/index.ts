//測試函式型別

let aSimpleFunction = function() {'Hi'};
//console.log(aSimpleFunction);


//TS無法推論你的參數型別
const addition = function (num1, num2){
    return num1+num2;
};
let shouldBeString: string = addition(123,456);//579

//錯誤
let addition =function (param1: any, param2: any){
    return param1+param2;
};
let shouldBeString: string = addition(123,456);//579

//錯誤
let addition = function (num1: number, num2: number):number {
    return num1+num2;
}
let shouldBeString: string = addition(123,456);//579

//錯誤
let addition = function (num1: string, num2: string) {
    return num1+num2;
}
let shouldBeString: string = addition(123,456);//579

//正確
let addition = function (num1: string, num2: string) {
    return num1+num2;
}
let shouldBeString: string = addition(123,'456');//"123456" 

//正確
let addition = function (num1, num2) {
    return num1+num2;
}
let shouldBeString: string = addition('123',456);//"123456" 


//覆寫函式
//原本的addition 型別為{number, number}=> number
let addition = function (param1: number, param2: number){
    return param1+param2;
}
//複寫addition:其型別為(number, number) =>number
addition = function (param1: number, param2: number){
    return param2+param1;//交換位置而已
}
//錯誤的複寫addition:參數型別錯誤!其型別為(string, string)=>string
addition = function(param1: string, param2: string){
    return param1+param2;
} 
//錯誤的複寫addition:參數型別錯誤!其型別為(number, number)=>void(沒有Return)
addition = function(param1: number, param2: number){
    param1+param2;
} 
