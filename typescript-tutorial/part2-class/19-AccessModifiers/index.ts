/*提款機範例*/
//定義每一個使用陽春提款機的用戶資訊
type TUserAccount = {
    account: string;
    password: string;
    money: number;
}

//定義陽春的提款機介面
interface IeasyCashMachine {
    //存錢，裡面填入要存的錢的量
    deposit(amount: number): void;

    //提錢，裡面填入要提的錢的量
    withdraw(amount: number): void;

    //一系列使用者的帳戶
    user: TUserAccount[];

    //登入的使用者，可為空，代表還沒登入
    currentUser: TUserAccount|undefined;

    //登入系統，必須填入帳號密碼
    signIn(account: string,password: string): void;

    //登出系統
    signOut(): void;
}

//抽象化提款機
//定義帳戶系統介面
interface AccountSystem {
    //一系列使用者的帳戶
    // user: TUserAccount[];

    //登入的使用者，可為空，代表還沒登入
    // currentUser: TUserAccount|undefined;

    //登入系統，必須填入帳號密碼
    signIn(account: string,password: string): void;

    //登出系統
    signOut(): void;
}

//定義交易系統介面
interface TransactionSystem {
    //存錢，裡面填入要存的錢的量
    deposit(amount: number): void;

    //提錢，裡面填入要提的錢的量
    withdraw(amount: number): void;
}

//定義提款機的完整系統介面
interface ICashMachine extends TransactionSystem, AccountSystem {};

//實踐ICashMachine介面
class CashMachine implements ICashMachine {
    //假設我們有這些使用者
    user: TUserAccount[] = [
        {account: 'maxwell',password: '123', money: 12345},
        {account: 'martin',password: '456', money: 893883},
        {account: 'katy',password: '789', money: 39032},
    ];

    currentUser: TUserAccount|undefined;

    signIn(account: string, password: string){
        //因為Array.prototype.find是ES6的語法，暫時使用ES5方法處理
        for(let i=0;i<this.user.length;i+=1){
            const user = this.user[i];
            if(
                user.account === account &&
                user.password === password
            ){
                this.currentUser = user;
                break;
            }
        }
        if(this.currentUser === undefined){
            throw new Error('user not found');
        }
    }

    signOut(){
        //清除目前使用者
        this.currentUser = undefined;
    }

    deposit(amount: number){
        if(this.currentUser !== undefined){
            this.currentUser.money += amount;
        }else{
            throw new Error('no user sign in');
        }
    }

    withdraw(amount: number){
        if(this.currentUser !== undefined){
            this.currentUser.money -= amount;
        }else{
            throw new Error('no user sign in');
        }
    }
}

function printAccountInfo(input: TUserAccount|undefined){
    if(input ===undefined){
        console.log('no user found');
    }else{
        console.log(`
        Current User: ${input.account}
        Money: ${input.money}
        `);
    }
}

//初始化新的提款機
const machine = new CashMachine1();
console.log('初始化:');
printAccountInfo(machine.currentUser);

//登入過後
machine.signIn('maxwell','123');
console.log('sign in:');
printAccountInfo(machine.currentUser);

//提款5000元
machine.withdraw(5000);
console.log('after withdraw:');
printAccountInfo(machine.currentUser);

//登出過後
machine.signOut();
console.log('sign out');
printAccountInfo(machine.currentUser);

//加上存取修飾子
class CashMachine1 implements ICashMachine {
    //假設我們有這些使用者
    private user: TUserAccount[] = [
        {account: 'maxwell',password: '123', money: 12345},
        {account: 'martin',password: '456', money: 893883},
        {account: 'katy',password: '789', money: 39032},
    ];

    private currentUser: TUserAccount|undefined;

    signIn(account: string, password: string){
        //因為Array.prototype.find是ES6的語法，暫時使用ES5方法處理
        for(let i=0;i<this.user.length;i+=1){
            const user = this.user[i];
            if(
                user.account === account &&
                user.password === password
            ){
                this.currentUser = user;
                break;
            }
        }
        if(this.currentUser === undefined){
            throw new Error('user not found');
        }
    }

    signOut(){
        //清除目前使用者
        this.currentUser = undefined;
    }

    deposit(amount: number){
        if(this.currentUser !== undefined){
            this.currentUser.money += amount;
        }else{
            throw new Error('no user sign in');
        }
    }

    withdraw(amount: number){
        if(this.currentUser !== undefined){
            this.currentUser.money -= amount;
        }else{
            throw new Error('no user sign in');
        }
    }
}

/*將成員變數的值在建構子函式（Constructor Function）裡進行初始化動作*/
class CashMachine implements ICashMachine {
    //假設我們有這些使用者
    // private user: TUserAccount[] = [
    //     {account: 'maxwell',password: '123', money: 12345},
    //     {account: 'martin',password: '456', money: 893883},
    //     {account: 'katy',password: '789', money: 39032},
    // ];
    //亦或是直接將users在建構子函式進行初始化
    private users: TUserAccount[];

    constructor (users: TUserAccount[]){
        this.users = users;
    }
}

//還有一種更簡潔的寫法：
class CashMachine implements ICashMachine {
    //假設我們有這些使用者
    // private users: TUserAccount[] = [
    //     {account: 'maxwell',password: '123', money: 12345},
    //     {account: 'martin',password: '456', money: 893883},
    //     {account: 'katy',password: '789', money: 39032},
    // ];
    //亦或是直接將users在建構子函式進行初始化
    //private users: TUserAccount[];

    constructor (private users: TUserAccount[]){}
}



