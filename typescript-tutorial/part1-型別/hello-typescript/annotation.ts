//0319
//註記型式一:註記在變數面前
const word: string ='Hello World!';
//函式型別註記會在之後介紹
function mayReturnEitherStringOrNumber(b:boolean): string | number{
    if(b){
        return '20';
    }else{
        return 20;
    }
}

//註記型式二:註記在未知的值
const age = <number>mayReturnEitherStringOrNumber(false);
console.log(typeof age);//number
//註記型式三:註記在未知的值，但是是用 as 的TS關鍵字
const ageAsString = mayReturnEitherStringOrNumber(true) as string;
console.log(typeof ageAsString);//string

