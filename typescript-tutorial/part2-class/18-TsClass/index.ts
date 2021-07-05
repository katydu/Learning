/*介面-物件規格*/
//延伸
//定義一個介面
interface PersonInfo {
    name: string;
    age: number;
    hasPet: boolean;
    printInfo(): void;
};

//使用介面
const maxwell: PersonInfo = {
    name: 'maxwell',
    age: 20,
    hasPet: false,
    printInfo(){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet: ${this.hasPet}
        `);
    },
};

const martin: PersonInfo = {
    name: 'martin',
    age: 4,
    hasPet: true,
    printInfo(){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet: ${this.hasPet}
        `);
    },
};

const leo: PersonInfo = {
    name: 'leo',
    age: 9,
    hasPet: true,
    printInfo(){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet: ${this.hasPet}
        `);
    },
};

const toby: PersonInfo = {
    name: 'toby',
    age: 34,
    hasPet: false,
    printInfo(){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet: ${this.hasPet}
        `);
    },
};

//將介面以class方式定義
class CPersonInfo {
    name: string;
    age: number;
    hasPet: boolean;
    printInfo(){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet: ${this.hasPet}
        `);
    };
};

//解法一:直接對那些欄位指派值
class CPersonInfo1 {
    name: string = 'maxwell';
    age: number = 20;
    hasPet: boolean = false;
    printInfo(){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet: ${this.hasPet}
        `);
    };
};

//從類別建立出物件
let maxwellInfoFromClass = new CPersonInfo1();
console.log(maxwellInfoFromClass);

let customInfo = new CPersonInfo('Martin',24,true);

class CustomPersonInfo {
    name: string;
    age: number;
    hasPet: boolean;
    //建立子函式
    constructor(name: string, age: number, hasPet: boolean){
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }

    printInfo(){
        console.log(`
            Name: ${this.name}
            Age: ${this.age}
            Owns a pet: ${this.hasPet}
        `);
    }
}

class CustomPersonInfo1 {
    //略
    //建立子函式
    constructor(
        name: string = 'maxwell',
        age: number = 20,
        hasPet: boolean = false
    ){
        this.name = name;
        this.age = age;
        this.hasPet = hasPet;
    }

    //略
}

//1.不填入參數
let  customInfo1 = new CustomPersonInfo();
console.log(customInfo1);
customInfo1.printInfo();

//2. 填入自訂參數
let  customInfo2 = new CustomPersonInfo('tobby',32,true);
console.log(customInfo2);
customInfo2.printInfo();

//填錯型別
let wrongCustomInfo = new CustomPersonInfo('tobby','32',true);
//填對型別
let correctCustomInfo = new CustomPersonInfo('leo',28,false);

//呼叫不存在的屬性
correctCustomInfo.inexistedProps;
//呼叫不存在的方法
correctCustomInfo.inexistedMethod();
