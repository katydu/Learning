/*介面擴張*/
type T = number;
interface I{
    a: string;
}

type U =T&I;
interface J extends T, I{};//T是type不是interface，因此噴錯

/*介面融合*/
interface I1{
    P1: U1;
    P2: U2;
}

interface I1{
    P3: U3;
    P4: U4;
    P5: U5;
}
//以上等同於:
interface I1{
    P1: U1;
    P2: U2;
    P3: U3;
    P4: U4;
    P5: U5;
}

/*選用屬性*/
//介面宣告裡面可以使用選用屬性
interface IOptionalProp {
    message?: string;
}
//型別化名宣告裡，也可以使用選用屬性
type TOptionalProp = {
    message?: string
};

/*函式超載*/
//介面宣告可以使用函式超載
interface IFunctionOverLoad{
    createElement(name: 'a'): HTMLAnchorElement;
    createElement(name: 'p'): HTMLParagraphElement;
}

//型別化名宣告裡也可以使用函式超載
//但是不建議在型別化名宣告使用函式超載
type TFunctionOverLoad = {
    createElement(name: 'a'): HTMLAnchorElement;
    createElement(name: 'p'): HTMLParagraphElement;
};

/*Indexable Types*/
//介面宣告裡可以使用Indexable Types
interface IStringTypeDict {
    [prop: string]: string;
}
//型別化名宣告裡也可以使用Indexable Types
type TStringDict = {
    [prop: string]: string;
};

/*唯讀屬性*/
//介面宣告裡可以使用唯讀屬性
interface IReadonlyProp {
    readonly message: string;
}
//型別化名宣告裡也可以使用唯讀屬性
type TReadonlyProp = {
    readonly message: string;
};

//介面、型別都可以進行複合（union 與 intersection）
//甚至也可以介面與型別一起複合
type T = <arbitrary-type>; //任意型別皆可
interface I {
    //介面宣告
}
//介面與型別的union或intersection是可以動作的
type Tunion = T | I;
type Tintersect = T & I;

//宣告型別T，擁有prop1屬性對應型別Tprop1
type T ={
    prop1: Tprop1;
};

//宣告介面I，擁有prop2屬性對應型別Tprop2
interface I extends T {
    prop2: Tprop2;
};

//介面不能跟原始型別進行擴展的動作，不然會噴錯
type Tprmitive = number;
interface Ierror extends Tprmitive {};

//靜態擴展
enum Gender {Male, Female, Other};

interface AccountSystem {
    email: string;
    password: string;
    subscribed: boolean;
}

interface AccountInfo {
    nickName: string;
    age: number;
    gender: Gender;
}
//user的靜態格式為AccountSystem與AccountInfo的結合
type User = AccountSystem & AccountInfo;