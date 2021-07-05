/* Indexable Types */

//定義一種物件型別 Dictionary，其中他的鍵值對都是字串型態
type Dictionary = {
    [propName: string]: string,
};

//正常使用方式
let normalDictionary: Dictionary = {
    hello: 'world',
    thisFeature: 'is crazy'
};

//空的狹義物件也行
let emptyDictionary: Dictionary ={};

//錯誤的使用方式
let wrongDictionary: Dictionary ={
    hello: 123,
    thisFeature: true,
    withFunction(){console.log('Wrong type');},
    nestedDictionary: {hello: 123},
};

//定義類似陣列的型別，裡面儲存的值為字串
interface StringTypedList {
    [index: number]: string;
}
//正常使用方式
let stringTypedArray: StringTypedList = {
    123: 'Hello',
    [456]: 'hi',
};

//空的狹義物件也行
let emptyStringTypedArray: StringTypedList ={};

//不可以直接變成array，因其限制值為字串型別，因此數字型別會錯
let stringTypedArrayLiteral: StringTypedList = [1,2,3];
let stringTypedArrayLiteralCorrect: StringTypedList = ['1','2','3'];

//但卻可以是空的Array
let emptyStringTypedArray2: StringTypedList = [];

//可以用數字進行索引
stringTypedArray[0];
stringTypedArray[1];

//錯誤的使用方式
let wrongStringTypedList: StringTypedList ={
    message: 'Hello',  //message是字串不是數字因此不符合
    thisFeature: true
};

//不能被字串索引
stringTypedArray['Hello'];

//當然更不可能用點來呼叫屬性，因為會被當成字串
stringTypedArray.hello;


/* 選用屬性Optional Properties */

type TAccountUser = {
    email: string,
    password: string,
    name?: string,
    age?: number, 
};

interface IAccountUser {
    email: string;
    password: string;
    name?: string;
    age?: number;
}

/* 唯讀屬性 */

type TAccountUserWithReadonlyProperty = {
    readonly email: string,
    readonly password: string,
    name?: string,
    age?: number,
}

interface ITAccountUserWithReadonlyProperty {
    readonly email: string;
    readonly password: string;
    name?: string;
    age?: number;
}

let sampleAccount: TAccountUserWithReadonlyProperty = {
    email: '@gmail.com',
    password: 'hashed-password',
    name: 'katy'
};
//可以讀取
sampleAccount.email;
//不行寫入
sampleAccount.email = '@yahoo.com.tw';


/*混合型介面Hybrid Type Interface*/

interface Counter {
    //純函式格式
    (start: number): void;
    //狹義物件格式
    increment(): number;
    reset(): void;
    value: number;
}

function createCounter(): Counter {
    let value: number;
    let initializedNumber: number;

    //實踐純函式的部分
    const counter = (function (startNumber: number){
        initializedNumber = startNumber;
        value = startNumber;
    }) as Counter;

    //實踐狹義物件格式的部分
    counter.increment = function(){
        value++;
        return value;
    };

    counter.reset = function(){
        value = initializedNumber;
    };

    Object.defineProperty(counter,'value',{
        get(){return value;}
    });

    return counter;
}
/*實作*/
//建立一個counter物件
const counter: Counter = createCounter();

//藉由counter介面裡面純函式型別裡的格式:
//(start: number):void
//我們可以填入數字
counter(5);//初始化值為5

//呼叫counter介面裡面的value屬性
console.log(counter.value);//5

//呼叫三次counter介面裡面的increment方法
counter.increment();
counter.increment();
counter.increment();

//在呼叫一次counter介面裡面的value屬性
console.log(counter.value);//8

//呼叫counter介面裡面的reset方法
counter.reset();

//在呼叫一次counter介面裡面的value屬性
console.log(counter.value);//要得出5