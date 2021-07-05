//全部都是數字
let numbers = [1,2,3,4,5];

//對陣列裡任一值覆寫
numbers[1] = 123;       //pass
numbers[3] = '123';     //不過

//對陣列使用方法，TS也會幫你檢測型別
numbers.push(456);      //pass
numbers.push('456');    //不過
//concat()將兩陣列串接在一起
numbers.concat([789,987]);      //pass
numbers.concat(['789','987']);  //不過
//以下為concat範例
let numbers = [1,2,3,4];
let newnumbers = numbers.concat(789,987,0,9);
console.log(newnumbers);//[1, 2, 3, 4, 789, 987, 0, 9] 

//對陣列全部覆寫
//依據廣義物件完整性第一條，只要覆蓋的值型別不變，你愛怎麼蓋就怎麼蓋
numbers = [666,888,999];//pass
numbers = ['一','二'];  //不過

//數字和字串混合
let NumberAndString = [1,'2',42,666,"devil"];

//長的一模一樣格式的物件
let objectArray1=[
    { message: 'Hello'},
    { message: 'Hi'},
    { message: 'Goodbye'}
];
//某個物件故意基因突變
let objectArray2=[
    { message: 'Hello'},
    { message: 'Hi', revolt: true},
    { message: 'Goodbye'}
];

//隨便測
let objectArray2=[
    { message: 'Hello'},
    { message: 1010010101010},
    { message: 'Goodbye'}
];

//函式型別的集合
let functionsArray = [
    function addition(num1: number, num2: number){return num1+num2},
    function subtraction(num1: number, num2: number){return num1-num2},
    function multiplication(num1: number, num2: number){return num1*num2},
    function division(num1: number, num2: number){return num1/num2}
];

//陣列集合
let arraysArray = [
    [1,2],
    ['Hello','World','i do'],
    [true,false,true,true,false],
];

//錯誤
let canBeEitherNullOrNumber = [1,2,4];
canBeEitherNullOrNumber.splice(2,0,null);//嗚嗚為什麼沒有跑錯出來
//正確
let canBeEitherNullOrNumber: (number|null)[] = [1,2,4];
canBeEitherNullOrNumber.splice(2,0,null)



