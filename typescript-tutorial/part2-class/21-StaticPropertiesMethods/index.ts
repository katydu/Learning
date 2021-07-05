/*幾何圓形類別*/
class CircleGeometry {
    private PI: number = 3.14;
    //初始化時需要的參數為半徑 radius
    constructor(public radius: number){}
    //計算圓形的面積
    public area(): number {
        return this.PI*(this.radius**2);
    }
    //計算圓形周常
    public circumference(): number {
        return 2*this.PI*this.radius;
    }
}

//初始化半徑為單位2的圓
const myCircle = new CircleGeometry(2);
//計算圓的面積
console.log(myCircle.area());
//計算圓的周長
console.log(myCircle.circumference());

/*Math本身就是提供一系列的屬性和方法*/
//圓周率pi
Math.PI;
//隨機產生介於0~1之間的值
Math.random();
//計算三角函數
Math.sin(Math.PI/2);
//計算次方:2的4次方
Math.pow(2,4);

/*靜態成員版本的幾何圓形類別*/
class StaticCircleGeometry {
    static PI: number = 3.14;

    //改成不需要初始化半徑radius
    //constructor(public radius: number){}

    //計算圓形的面積
    static area(radius: number): number {
        return StaticCirleGeometry.PI*(radius**2);
    }
    //計算圓形周長
    static circumference(radius: number): number {
        return 2*StaticCircleGeometry.PI*radius;
    }
}

/*比對CircleGeometry 跟 StaticCircleGeometry 之間的使用差別*/
/*使用CircleGeometry*/
//初始化半徑為單位2的圓
const circleObj = new CircleGeometry(2);
//計算圓的面積
const areaFromObj = circleObj.area();
//計算圓的周長
const circumferenceFromObj = circleObj.circumference();

/*使用StaticCircleGeometry*/
//計算半徑為2的圓面積
const areaFromStaticMethod = StaticCircleGeometry.area(2);
////計算半徑為2的圓周長
const circumferenceFromStaticMethod = StaticCircleGeometry.circumference(2);

console.log(`
    Uisng CircleGeometry Class caculate radius 2 case:
    Area:           ${areaFromObj}
    Circumference:  ${circumferenceFromObj}

    Uisng StaticCircleGeometry Class caculate radius 2 case:
    Area:           ${areaFromStaticMethod}
    Circumference:  ${circumferenceFromStaticMethod}
`);

/*使用存取修飾子*/
class StaticCircleGeometry1 {
    private static PI: number = 3.14;

    //改成不需要初始化半徑 radius
    //constructor(public radius: number){}

    //計算圓的面積
    static area(radius: number): number {
        return StaticCircleGeometry.PI*(radius**2);
    }
    //計算圓形周長
    static circumference(radius: number): number {
        return 2*StaticCircleGeometry.PI*radius;
    }

    //提供使用者一個管道來取得PT的值
    static getValueOfPI(): number {
        return StaticCircleGeometry.PI;
    }
}
//接觸private的靜態成員會被警告
StaticCircleGeometry1.PI;
//但是可以藉由公用靜態方法取得資訊
StaticCircleGeometry1.getValueOfPI();

/*前一篇火車範例*/
class TrainTicket extends TicketSystem{
    
    private isStopExist(stop: string): boolean{
        for(let i = 0; i< TrainTicket.stops.length;i+=1){
            const existedStop = TrainTicket.stops[i];
            if(existedStop === stop) return true;
        }

        return false;
    }
}
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
        //for迴圈裡面有使用到就必須改
        for(let i = 0; i <TrainTicket.stationsDetail.length;i+=1){
            const detail = TrainTicket.stationsDetail[i];