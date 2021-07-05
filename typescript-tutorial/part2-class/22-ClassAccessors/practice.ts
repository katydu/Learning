//試著把circumference專門計算圓形周長的方法
//改成用 Getter Method 的方式實踐出來
class CircleGeometryGetV3 {
    private PI: number = 3.14;

    //初始化時需要的參數為半徑 radius
    constructor(public radius: number){}
    //使用取值方法 Getter Method
    get area(){
        return this.PI * (this.radius**2);
    }
    //計算圓形周長
    get circumference(){
        return 2*this.PI*this.radius;
    }
}
//初始化半徑為2的圓形
const getRandomCircle1 = new CircleGeometryGetV2(2);
//取得圓形面積
console.log(getRandomCircle1.area);
//更改radius的值
getRandomCircle.radius =3;
//再次取得圓形面積
console.log(getRandomCircle1.area);

//無法覆寫area
getRandomCircle1.area = 123324234;