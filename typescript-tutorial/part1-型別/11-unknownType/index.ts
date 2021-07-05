//any和unknown可接受任意值
let anyType: any;
let unknownType: unknown;

anyType = 123;
anyType = 'string';
anyType = true;
anyType = null;
anyType = undefined;
anyType = {hello: 'world'};
anyType = [1,true,null,'string'];
anyType = function(){console.log('Hello');};
anyType = new Object;

unknownType = 123;
unknownType = 'string';
unknownType = true;
unknownType = null;
unknownType = undefined;
unknownType = {hello: 'world'};
unknownType = [1,true,null,'string'];
unknownType = function(){console.log('Hello');};
unknownType = new Object;

//
let isAny: any;
let isUnknown: unknown;

let isNumber: number;
let isString: string;
let isBoolen: boolean;
let isNull: null;
let isUndefined: undefined;
let isObjectLiteral: {name:string, age: number};
let isArray: number[];
let isFunction: () => void;
let isObject: Object;
//任何型別的變數都可以被'Any'型別所指派
isNumber        =          isAny;
isString        =          isAny;
isBoolen        =          isAny;
isNull          =          isAny;
isUndefined     =          isAny;
isObjectLiteral =          isAny;
isArray         =          isAny;
isFunction      =          isAny;
isObject        =          isAny;
isAny           =          isAny;
isUnknown       =          isAny;
//除了'unknown'和'any'型別以外
//其他型別的變數都不可以被'unknown'所指派
isNumber        =          isUnknown;
isString        =          isUnknown;
isBoolen        =          isUnknown;
isNull          =          isUnknown;
isUndefined     =          isUnknown;
isObjectLiteral =          isUnknown;
isArray         =          isUnknown;
isFunction      =          isUnknown;
isObject        =          isUnknown;//這要出錯才對
isAny           =          isUnknown;
isUnknown       =          isUnknown;

//直接指派一定會錯
isNumber = isUnknown;
//經過所謂的type guard 縮小型別推論的範疇就有可能
//可以直接將 Unknown 型別的值指派到相對應的型別
if(typeof isUnknown === 'number'){
    isNumber = isUnknown;
}

//顯性型別註記
//直接跟ts說isUnknown是字串
isString = <string>isUnknown;

//用as關鍵字，直接跟ts說isUnknown是數字型別的陣列
isArray = isUnknown as number[];

//any可以做任何事；unknown則被鎖住了
isAny.KnockKnock;
isUndefined.Hello;

isAny.greets('.......');
isUnknown.response('...');

let unknownObj: unknown ={
    Hello: 'katy',
    response: function(content: string){console.log(content);},
};

type Unicorn = {
    Hello: string,
    response: (content: string) => void
};

//用顯示註記方式去使用Unknown型別的變數
//無註記會被ts警告
unknownObj.Hello;
unknownObj.response('no');
//顯示註記之後就安全了
(<Unicorn>unknownObj).Hello;
(unknownObj as Unicorn).response('no');

let unknownPrimitive: unknown = '123';

//控制流程分析後限縮unknown型別到特定型別
//型別未確切認定下會被ts退回
parseInt(unknownPrimitive,10);
//運用控制流程分析限縮型別=>安全
if(typeof unknownPrimitive === 'string'){
    parseInt(unknownPrimitive, 10); //第二個參數代表幾進制
}

function safelyParseJSON(jsonString: string): unknown{
    return JSON.parse(jsonString);
}

let randomJSONString = `｛
    "message": "Hello World",
    "unknownTypeIsAwesome": true
}`;

//原本的JSON.parse
let parsedFromNormalJSONParse = JSON.parse(randomJSONString);
parsedFromNormalJSONParse.message;

//使用safe-counterpart JSON.parse
let parsedFromSafeJSONParse = safelyParseJSON(randomJSONString);
parsedFromSafeJSONParse.message;

//unknown 型別的複合特性
type t1 = unknown & null;
type t2 = unknown & undefined;
type t3 = unknown & null & undefined;
type t4 = unknown & string;
type t5 = unknown & string[];
type t6 = unknown & any;
type t7 = unknown & unknown;