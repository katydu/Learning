//數學運算式
let addOp = function (n1: number, n2: number){
    return n1+n2;
}
let subtractOp = function (n1: number, n2: number){
    return n1-n2;
}
let multiplyOp = function (n1: number, n2: number){
    return n1*n2;
}
let divideOp = function (n1: number, n2: number){
    return n1/n2;
}
//過長
let powerOp: (n1: number, n2: number)=>number =function (n1: number, n2: number): number {
    return n1**n2;
};
//使用型別化名來簡化程式碼
type MathOperator = (n1: number, n2: number)=>number;
let powerOp: MathOperator =function (n1: number, n2: number): number {
    return n1**n2;
};
//嘗試TS可能會找查知範例
//錯誤:型別錯誤
let wrongPowerOp1: MathOperator = function(n1: string, n2: string){
    return n1**n2;
};
//錯誤:函示型別之回傳型別錯誤
let wrongPowerOp2: MathOperator = function(n1: number, n2: number){
    return(n1**n2).toString();
};

//明文型別化名
type MathOperator = (n1: number, n2: number)=>number;
let powerOp: MathOperator =function (n1,n2){
    return n1**n2;
};
//以下這些行為會被 TypeScript 開罰單:
let powerOpWithNoParamsAnnotation: MathOperator =function (n1,n2){
    return n1**n2;
};
//屬性值不是number
powerOpWithNoParamsAnnotation(
    '123',
    '456'
);

//用Day03之範例來展示型別化名
let info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};
//使用後
type PersonInfo = {
    name: string,
    age: number,
    hasPet: boolean
};
let infoAboutMaxwell: PersonInfo = {
    name: 'Maxwell',
    age: 20,
    hasPet: false
};

//隨便新增屬性會出錯
infoAboutMaxwell.newInfo = 'graduated from NTUST';
//更改屬性值，型別對就OK
infoAboutMaxwell.hasPet = true;
//更改屬性值，型別錯就88
infoAboutMaxwell.hasPet = 'dog';
//全面覆寫，格式正確就給過
infoAboutMaxwell = {
    name: 'Katy',
    age: 22,
    hasPet: false
};
//全面覆寫，格式錯誤就88
infoAboutMaxwell = {
    firstName: 'Katy',
    graduated: true,
    age: 22,
    hasPet: false
};

//狹義物件的明文形式作為函式參數的狀況
function printInfo(info: PersonInfo){
    console.log(`Name: ${info.name}`);
    console.log(`Age: ${info.age}`);
    console.log(`Has Pet? ${info.hasPet}`);
}
//物件的形式沒有被積極註記為PersonInfo，直接將值暴力帶入函示作為參數
printInfo({
    name: 'Martin',
    age: 28,
    hasPet: true,
    hello: 'world',
    nothingSpecial: null,
});

//物件的形式存入變數，其中該變數沒有被積極註記為PersonInfo，該變數卻被帶入函示作為參數
let infoAboutMartin = {
    name: 'Martin',
    age: 28,
    hasPet: true,
    hello: 'world',
    nothingSpecial: null,
};

printInfo(infoAboutMartin);