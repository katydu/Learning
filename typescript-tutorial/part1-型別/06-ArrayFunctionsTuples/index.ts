let numbers = [1,2,3,4,5];
let mappedNumbers = numbers.map(num => num*2);
//不熟悉ES6 Arrow Function 語法可以把它視為:
//let mappedNumbers = numbers.map(function(num){return num*2;});
//但是Arrow Function和普通的Fuction還是以有差異

let nums = [1,2,3,4,5];
let doubleNums = [];
for(let i=0;i<nums.length;i++){
    const originalValue = nums[i];
    doubleNums.push(originalValue*2);
}

numbers.push(666);
numbers.push('666');

//元組
//JS陣列
let BMWMoter = ['BMW','motorcycle','silver',new Date(2019,2,17)];
let JaguarOffRoad = ['Jaguar','OffRoad','royal-blue',new Date(2019,1,3)];
let ToyotaRV = ['Toyota','recent','white',new Date(2018,6,4)];

//元組型別
let BMWMoter: [string, string, string, Date]=
    ['BMW','motorcycle','silver',new Date(2019,2,17)];
let JaguarOffRoad: [string, string, string, Date]=
    ['Jaguar','OffRoad','royal-blue',new Date(2019,1,3)];
let ToyotaRV: [string, string, string, Date]=
    ['Toyota','recent','white',new Date(2018,6,4)];

//使用型別化名方式
type Vehicle = [string, string, string, Date];
let BMWMoter: Vehicle = ['BMW','motorcycle','silver',new Date(2019,2,17)];
let JaguarOffRoad: Vehicle=['Jaguar','OffRoad','royal-blue',new Date(2019,1,3)];
let ToyotaRV: Vehicle=['Toyota','recent','white',new Date(2018,6,4)];
//其他型別化名表示法
let JaguarOffRoad = <Vehicle>['Jaguar','OffRoad','royal-blue',new Date(2019,1,3)];
let ToyotaRV = ['Toyota','recent','white',new Date(2018,6,4)] as Vehicle;

//陣列型別表示法
type arrayTypeRepresentation = (string|Date)[];
//元組型別表示法
type tupleTypeRepresentation = [string, string, string, Date];

//不符合元組型別之定義=>type Vehicle = [string, string, string, Date];
let v1: Vehicle = ['Honda','motorcycle','red'];
let v2: Vehicle = ['Gogoro','scooter','white',new Date(2019,4,4),'electronic'];
let v3: Vehicle = ['Tesla','electric','sapphire','2019-03-14'];
let v4: Vehicle = ['Prosche','race',new Date(2019,4,6),'black'];
//前三項皆為string但是順序反了，但是TS不會幫你噴錯
let wtfVehicle: Vehicle = ['taxi','yellow','Toyota',new Date(2020,5,7)];
//以JSON型式來表示元組
let BMWMoter = {
    brand:'BMW',
    type:'motorcycle',
    color:'silver',
    manufactureDate:new Date(2019,2,17)
};