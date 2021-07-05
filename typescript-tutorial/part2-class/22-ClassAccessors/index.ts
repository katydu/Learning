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
/*類似呼叫物件屬性的方式去改寫*/
class CircleGeometryV2 {
    private PI: number = 3.14;
    //將area改成成員變數
    public area: number;
    //初始化時需要的參數為半徑 radius
    constructor(public radius: number){
        //直接在建構子內進行運算
        this.area = this.PI*(radius**2);
    }
    //計算圓形周長
    public circumference(): number{
        return 2*this.PI*this.radius;
    }
}
//初始化半徑為2的圓形
const randomCircle = new CircleGeometryV2(2);
//取得圓形面積
console.log(randomCircle.area);

/*Getter Method */
class CircleGeometryGetV2 {
    private PI: number = 3.14;

    //初始化時需要的參數為半徑 radius
    constructor(public radius: number){}
    //使用取值方法 Getter Method
    get area(){
        return this.PI * (this.radius**2);
    }
    //計算圓形周長
    public circumference(): number{
        return 2*this.PI*this.radius;
    }
}
//初始化半徑為2的圓形
const getRandomCircle = new CircleGeometryGetV2(2);
//取得圓形面積
console.log(getRandomCircle.area);
//更改radius的值
getRandomCircle.radius =3;
//再次取得圓形面積
console.log(getRandomCircle.area);

//無法覆寫area
getRandomCircle.area = 123324234;

