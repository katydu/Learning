//讀者試試看
//函式主動回傳 undefined
let doesItWork1 = function doesItWork1(){
    return undefined;
}
//函式輸出形式註記為undefined，也回傳undefined
let doesItWork2 = function doesItWork2(): undefined{
    return undefined;
}

//函式輸出型別註記為undefined，但不回傳任何東西
let doesItWork3 = function doesItWork3(): undefined{

}

//函式輸出型別註記為void,但回傳undefined
let doesItWork4 = function doesItWork4(): void{
    return undefined;
}