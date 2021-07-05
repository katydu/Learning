//型別化名
//全部都是原始型別集合
type Primitives = number|string|boolean|null|undefined;

//該陣列可以任意存取各種原始型別值
type PrimitiveArray = Primitives[];

//函式型別的化名
type operatorFunc = (op1: Primitives, op2: Primitives) => undefined;

//狹義物件明文型別的化名
type PersonalInfo = {
    name: string,
    age: number,
    hasPet: boolean
};

//元組化名
type VehicleInfo = [string, string, string, Date];

//列舉組合化名
enum WeekDayEnum {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
type WeekDayString ='Sun'|'Mon'|'Tue'|'Wed'|'Thu'|'Fri'|'Sat';
type WeekDayFormat = WeekDayEnum | WeekDayString;

//介面的表現形式
enum Gender { Male, Female, Other};
//物件格式的表示方法
interface UserInfo{
    //原始型別
    id: number;
    name: string;

    //廣義物件型別
    birth: Date;
    interests: string[];

    //typescript enum或tuple都可,這裡用enum
    gender: Gender;

    //明文型別，這裡用物件明文型別
    address: {
        country: string;
        city: string;
        postalCode: string;
    };

    //函數型別
    logInfo(message: string): void;
}

//單純只有函式的格式
interface UpdateRecord{
    (id: number, newRecord: UserInfo): void;
}

//基本的Interface使用方式
//定義一個介面
interface Person {
    name: string;
    age: number;
    hasPet: boolean;
};

//使用介面
const maxwell: Person = {
    name: 'maxwell',
    age: 20,
    hasPet: false,
};

//少一個鍵會被認為錯誤 
const martin: Person = {
    name: 'martin',
    age: 4,
};

//多一個鍵會被認為錯誤
const leo: Person = {
    name: 'leo',
    age: 9,
    hasPet: true,
    job: 'DevOps',
};

//屬性對應型別錯誤
const toby: Person = {
    name: 'toby',
    age: 34,
    hasPet: 'no'
};

//檢測物件被推論結果作為函式的參數狀況
//這一次函數是使用interface 而不是型別化名
function printPersonInfo(person: Person){
    console.log(`Name: ${person.name}`);
    console.log(`Age is: ${person.age}`);
    console.log(`Own a pet: ${person.hasPet}`);
}

//情形一:直接帶入狹義物件的明文格式
printPersonInfo({
    name:'maxwell',
    age: 20,
    hasPet: false,

    job:'Front-End',//因為Person沒有job這個屬性因此警告
    nothingSpecial: null,
});

//情形二:物件形式存入參數，型別推論過後的結果，將變數作為函式的參數帶入
let infoMaxwell = {
    name: 'maxwell',
    age: 20,
    hasPet: false,

    job: 'Front-End',
    nothingSpecial: null,
};
printPersonInfo(infoMaxwell);

