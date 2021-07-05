/*交通票務系統*/
//使用列舉定義我們的車票種類
enum TransportTicketType{
    Train,
    MRT,
    Aviation,   //航空
};

//使用元組:依順序分別代表小時、分鐘、秒鐘
type TimeFormat = [number, number, number];

//定義名為交通的類別
class TicketSystem {
    constructor(
        private type: TransportTicketType,
        protected startingPoint: string,
        protected destination: string,
        private departureTime: Date,
    ){}

    //計算交通的間隔時間
    protected deriveDuration(): TimeFormat {
        //因為交通方式有三種,所以我們選擇先寫死
        return[1,0,0];//這邊代表一小時，要看TimeFormat的定義
    }

    //計算交通的抵達時間
    private deriveArrivalTime(): Date {
        const {departureTime} = this;

        //從間隔時間倒出總共間隔的微秒數
        const [hours, minutes, seconds] = this.deriveDuration();
        const durationSeconds = hours*60*60+minutes*60+seconds;
        const durationMilliseconds = durationSeconds*1000;

        //導出抵達時間
        const arrivalMilliseconds = departureTime.getTime()+durationMilliseconds;
        return new Date(arrivalMilliseconds);
    }

    //印出交通票卷的詳細內容
    public getTicketInfo(){
        //根據day7提到的列舉的反射性
        //可以反向由值推回列舉的鍵的名稱
        const ticketName = TransportTicketType[this.type];
        const arrivalTime = this.deriveArrivalTime();

        console.log(`
            Ticket Type: ${ticketName}
            Station:     ${this.startingPoint}-${this.destination}
            Departure:   ${this.departureTime}
            Arrival:     ${arrivalTime}
        `);
    }
}

//我們來開張火車票
const randomTicket = new TicketSystem(
    //這是火車票
    TransportTicketType.Train,
    //啟程地點
    'Tainan',
    //抵達終點
    'Kaohsiung',
    //起程時間2019/09/01早上9點00分00秒
    new Date(2019,8,1,9,0,0),
)

/*使用類別繼承創造火車票卷類別 */
type TrainStation = {
    name: string,
    nextStop: string,
    duration: TimeFormat,
};

class TrainTicket {
    private stops: string[]=[
        'Pingtung',
        'Kaohsiung',
        'Tainan',
        'Taichung',
        'Hsinchu',
        'Taipei',
    ];

    private stationsDetail: TrainStation[] = [
        {name: 'Pingtung',  nextStop: 'Kaohsiung',  duration:[2,30,0] },
        {name: 'Kaohsiung', nextStop: 'Tainan',     duration:[1,45,30]},
        {name: 'Tainan',    nextStop: 'Taichung',   duration:[3,20,0] },
        {name: 'Taichung',  nextStop: 'Hsinchu',    duration:[2,30,30]},
        {name: 'Hsinchu',   nextStop: 'Taipei',     duration:[1,30,30]},
    ];
}

//加進去
class TrainTicket{
    //略
    private isStopExist(stop: string): boolean{
        for(let i = 0; i< this.stops.length;i+=1){
            const existedStop = this.stops[i];
            if(existedStop === stop) return true;
        }

        return false;
    }
}

class TrainTicket {
    //略
    protected deriveDuration(): TimeFormat {
        //我們必須取得起程站和抵達站
        const {startingPoint, destination} = this;
        //略
        //先確保車站的站點是合理的
        if(
            this.isStopExist(startingPoint)&&
            this.isStopExist(destination)
        ){
            let time: TimeFormat = [0,0,0];
            let stopFound = false;

            /*1.開始進行站點間的運算 */
            for(let i = 0; i <this.stationsDetail.length;i+=1){
                const detail = this.stationsDetail[i];
                //起程站還未找到但是名稱對應到時開始累計交通時間
                if(!stopFound&&detail.name === startingPoint){
                    stopFound = true;
                    time[0] += detail.duration[0];
                    time[1] += detail.duration[1];
                    time[2] += detail.duration[2];
                }
                //早已找到起程站
                else if(stopFound){
                    //繼續累計交通時間
                    time[0] += detail.duration[0];
                    time[1] += detail.duration[1];
                    time[2] += detail.duration[2];
                    //然而，若下一站為終點站則跳出迴圈不再累計
                    if(detail.nextStop === destination) break;
                }
                
            }
            /*2. 將時間轉換成合理的格式 */
            //每六十秒轉一分鐘
            let minutes = Math.floor(time[2]/60);
            time[1] += minutes;
            time[2] -= minutes *60;

            //每六十分種轉一小時
            let hours = Math.floor(time[1]/60);
            time[0] += hours;
            time[1] -= hours *60;
            //回傳時間的格式 TimeFormat
            return time;
        }

        //never型別的例外請參見day10
        throw new Error('wrong stop name');
    }
}

class TrainTicket {
    //略
    protected deriveDuration(): TimeFormat {
        //我們必須取得起程站與抵達站
        const {startingPoint, destination} = this;
        //略
    }
}

/*繼承*/
class TrainTicket extends TicketSystem {
    //略
}

//我們來開張火車票
const randomTicket = new TicketSystem(
    //這是火車票
    TransportTicketType.Train,
    //啟程地點
    'Tainan',
    //抵達終點
    'Kaohsiung',
    //起程時間2019/09/01早上9點00分00秒
    new Date(2019,8,1,9,0,0),
)

/*使用類別繼承創造火車票卷類別 */
type TrainStation = {
    name: string,
    nextStop: string,
    duration: TimeFormat,
};

class TrainTicket extends TicketSystem{
    private stops: string[]=[
        'Pingtung',
        'Kaohsiung',
        'Tainan',
        'Taichung',
        'Hsinchu',
        'Taipei',
    ];

    private stationsDetail: TrainStation[] = [
        {name: 'Pingtung',  nextStop: 'Kaohsiung',  duration:[2,30,0] },
        {name: 'Kaohsiung', nextStop: 'Tainan',     duration:[1,45,30]},
        {name: 'Tainan',    nextStop: 'Taichung',   duration:[3,20,0] },
        {name: 'Taichung',  nextStop: 'Hsinchu',    duration:[2,30,30]},
        {name: 'Hsinchu',   nextStop: 'Taipei',     duration:[1,30,30]},
    ];
    private isStopExist(stop: string): boolean{
        for(let i = 0; i< this.stops.length;i+=1){
            const existedStop = this.stops[i];
            if(existedStop === stop) return true;
        }

        return false;
    }
    protected deriveDuration(): TimeFormat {
        //我們必須取得起程站與抵達站
        const {startingPoint, destination} = this;
        //略
    }
}

class TrainTicket extends TicketSystem {
    //子類別的建構子函式
    constructor(
        startingPoint: string,
        destination: string,
        departureTime: Date,
    ){
        //使用super將初始值傳到父類別的建構子函式裡
        super(
            TransportTicketType.Train,
            startingPoint,
            destination,
            departureTime,
        );
    }
}

const trainTicket = new TrainTicket(
    //自台南啟程
    'Tainan',
    //終點到新竹
    'Hsinchu',
    //發車時間:2019/09/01早上9:00
    new Date(2019,8,1,9,0,0)
);

//父類別擁有三個成員變數
class TestSuperClass {
    constructor(
        public p1: number,
        public p2: string,
        public p3: boolean,
    ){}
}

//子類別繼承父類別，並且呼叫super進行初始化物件的動作
class TestChildClass1 extends TestSuperClass{
    constructor(
        p1Child: number,
        p2Child: string,
        p3Child: boolean,
    ){
        super(p1Child,p2Child,p3Child);
    }
}

const objFromChildClass1 = new TestChildClass1(123,'hello',true);
console.log(objFromChildClass1);

//子類別繼承父類別，但是沒有實現建構子函式
class TestChildClass2 extends TestSuperClass{};

const objFromChildClass2 = new TestChildClass2();
