//使用者帳戶
enum Gender {Male,Female,Other};
type AccountInfo = {
    account: string,
    password: string,
    nickname: string,
    birth: Date,
    gender: Gender,
    subscribed: boolean
};
//可能為空值的情況
type AccountInfo = {
    account: string,
    password: string,
    nickname: string|undefined,
    birth: Date|undefined,
    gender: Gender|undefined,
    subscribed: boolean
};
let accountMaxwell: AccountInfo = {
    account:'nordic',
    password:'<hashed-password>',
    subscribed:false
};

//之前的小範例
let someone ={
    knows: undefined,
    identity: null
};
someone.knows = 'No';
someone.identity = 'i';
//延伸上面的範例
type someoneUnknown ={
    knows: undefined,
    identity: null
};
let AnotherSomeone:
someoneUnknown = {};

//正確寫法
type AccountInfo = {
    account: string,
    password: string,
    nickname?: string,
    birth?: Date,
    gender?: Gender,
    subscribed: boolean
};
let accountMaxwell: AccountInfo = {
    account:'nordic',
    password:'<hashed-password>',
    subscribed:false
};

//檔案中快速查找型別化名被宣告的位置
type AccountSystem = {
    account: string,
    password: string,
    subscribed: boolean,
};

type AccountPersonalInfo ={
    nickname?: string,
    birth?: Date,
    gender?: Gender
};
//使用複合型別的 intersection
type PersonalAccount = AccountSystem & AccountPersonalInfo;

let accountMaxwell: PersonalAccount = {
    account: 'nordic',
    password: '<hashed-password>',
    birth: new Date(2000,1,1),
    subscribed: false,
};