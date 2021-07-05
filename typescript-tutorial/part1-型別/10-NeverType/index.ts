//TS將無線迴圈推論成了never型別
let executesForever = function forever(){
    while(true){

    }
};

//TS將以下皆推論為void但是
const randomNumber =Math.random()*10;
//應該推論出void|never才對
let probablyexecutesForever = function(num: number){
    while(num>5){

    }
};
//應該推論void|never才對
probablyexecutesForever(randomNumber);
//應該推論never
probablyexecutesForever(6);
probablyexecutesForever(4);

let probablyThrowsError = function (num: number): number | never{
    if(num = 0){
        throw new Error('Not a positive number');
    }
    return num;
};

//never會被吃掉，因為number包含了never的概念
type EitherNumberOrNever = number | never;


let ThrowsError = function (num: number){
    if(num <= 0){
        throw new Error('Not a positive number');
    }
    return num;
};
let acceptsNever: number = ThrowsError(-5);
//丟-5給函式會出錯，但acceptsNever仍是number型態因為never是大家的subtype

//必定丟出錯誤=>never
let mustThrowError = function () {
    throw new Error('new error');
}
let mustAcceptsNever: never = mustThrowError();
//將never改成number也會過，因為number裡也包含了never

let wontThrowError = function() {return 42;};
let AcceptsNever: never =wontThrowError();


//函式必須要具備 Unreachable Endpoint（沒辦法結束執行）才能確定回傳值為 never 型態
function possibleNotToThrowError(): never{
    const possibility = Math.random();
    if(possibility>0.5){
        throw new Error('error');
    }
}