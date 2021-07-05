/*介面的擴展*/
enum Gender {Male, Female, Other};

interface AccountSystem{
    email: string;
    password: string;
    subscribed: boolean;
}

interface AccountPersonalInfo{
    nickname?: string;
    birth?: Date;
    gender?: Gender;
}

//UserAccount是AccountSystem和AccountPersonalInfo的結合
interface UserAccount extends AccountSystem,AccountPersonalInfo {};

/*擴展過後的interface*/
//正常使用方法
let accountMaxwell: UserAccount = {
    email: 'max@google.com',
    password: '<hashed-password>',
    subscribed: false,
    nickname: 'maxwell',
    gender: Gender.Male,
    //birth可以被忽略，因為是optional property(?)
};

//少一鍵，且該鍵非選用屬性，因此會噴錯
let accountMartin: UserAccount = {
    email: 'martin@google.com',
    password: '<hashed-password>',
    nickname: 'mars',
    birth: new Date(2000,1,1),
    gender: Gender.Male,
}

//多一鍵也會錯
let accountLeo: UserAccount = {
    email: 'leo@google.com',
    password: '<hashed-password>',
    subscribed: true,
    nickname: 'leonard',
    birth: new Date(2000,1,1),
    gender: Gender.Male,
    hasPet: true,
}

/*介面的交集*/
//定義I1,I2,I3三種不同介面
interface I1 {a: string; b: number;            }
interface I2 {           b: number; c: boolean }
interface I3 {a: string;            c: string  }

//I1和I2同時有b屬性且對應型別相同 ==>pass
interface I12 extends I1,I2{}
//I2和I3同時有c屬性但對應型別不同 ==>wrong
interface I23 extends I2,I3{}
//I1和I3同時有a屬性且對應型別相同 ==>pass
interface I13 extends I1,I3{}
////I1、I2和I3因為 I23有衝突了想當然也會有衝突==>wrong
interface I123 extends I1,I2,I3{}

/*用型別去 */
type TAccountSystem={
    email: string;
    password: string;
    subscribed: boolean;
};

type TAccountPersonalInfo={
    nickname?: string;
    birth?: Date;
    gender?: Gender;
};
//TUserAccount型別是TAccountSystem和TAccountPersonalInfo的intersection
type TUserAccount = TAccountSystem & TAccountPersonalInfo;