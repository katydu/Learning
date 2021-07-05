type UnionSet1 = number | string;

type UserInfo1 = {
    name: string,
    age: number
};
type UserInfo2 = {
    hasPet: boolean,
    ownsMotorcycle: boolean
};
type UnionSet2 = UserInfo1|UserInfo2;

//按照數學推理理應只有三種組合:
//1. 只有UserInfo1
let maxwellOnlyInfo1: UnionSet2 = {
    name: 'maxwell',
    age: 20
};
//2. 只有UserInfo2
let maxwellOnlyInfo2: UnionSet2 = {
    hasPet: false,
    ownsMotorcycle: true
};
//3. 都有
let maxwellOnlyInfo3: UnionSet2 = {
    name: 'maxwell',
    age: 20,
    hasPet: false,
    ownsMotorcycle: true
};

//理應要錯的組合:
//1. UserInfo1和UserInfo2皆缺屬性=>錯!
let maxwellWithPartialInfo1: UnionSet2 = {
    name: 'maxwell',
    //缺少age和haspet
    ownsMotorcycle: true
};

//2. UserInfo1滿足但UserInfo2缺屬性
let maxwellWithPartialInfo2: UnionSet2 = {
    name: 'maxwell',
    age: 20,
    //缺少haspet
    ownsMotorcycle: true
};

//3. UserInfo2滿足但UserInfo1缺屬性
let maxwellWithPartialInfo2: UnionSet2 = {
    //缺少name
    age: 20,
    hasPet: false,
    ownsMotorcycle: true
};

//空集合=>錯
let maxwellNoInfo: UnionSet2 = {};

//交集
type IntersectionSet = UserInfo1&UserInfo2;
//正確格式，所有屬性必須出現
let correctInfo: IntersectionSet = {
    name: 'maxwell',
    age: 20,
    hasPet: false,
    ownsMotorcycle: true
};

//錯誤格式，屬性缺一不可
let wrongInfo1: IntersectionSet ={
    //缺少name=>少UserInfo1的屬性
    age: 20,
    hasPet: false,
    ownsMotorcycle: true
}
let wrongInfo2: IntersectionSet ={
    name: 'maxwell',
    age: 20,
    hasPet: false,
    //缺少ownsMotorcycle=>少UserInfo2的屬性
}

//原始型別複合
type PrimitiveIntersection = number&string;


/*型別檢測*/
//遇到物件型別的狀況
//例如:寫一個簡單的總和函式介面
interface ISummation {
    (...arg: number[]): number;
    (arr: number[]): number;
}

let F: ISummation = function(p1: number|number[], ...args: number[]){
    if(
        //type guard 實踐:確保p1是數字，arr是數字型陣列
        typeof p1 === 'number'&& args instanceof Array
    ){
        //將p1與arr裡面的值加總起來
        return args.reduce((acc, cur) => acc+ cur,p1);
    }else if(
        //type guard 實踐:確保p1是陣列
        p1 instanceof Array
    ){
        //因為p1被認為是陣列，因此加總起來
        return p1.reduce((acc, cur) => acc+ cur,0);
    }
    //滿足never的case
    throw new Error('something is wrong with your input');
};


//使用(...arg: number[]): number方式:
F(1,2,3,4,5);
//結果是1+2+3+4+5=15
//使用(arr: number[]): number方式"
F([1,2,3,4,5]);
//結果也是1+2+3+4+5=15
