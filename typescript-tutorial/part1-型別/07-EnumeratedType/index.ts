enum WeekDay{Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday};
//語法錯誤
enum WeekDay = {Sunday,Monday,...,Saturday};

let weekDayOfBirthday = WeekDay.Monday;
//順向使用
let TGIF: WeekDay = WeekDay.Friday;
console.log(TGIF);//5
//逆向取回Enum的key
let keyOfTGIF = WeekDay[TGIF];
console.log(keyOfTGIF);//Friday

WeekDay[WeekDay["Sunday"]=0]="Sunday";
WeekDay["Sunday"]=0;
WeekDay[0]="Sunday";
//推得:
WeekDay[WeekDay["Sunday"]]="Sunday";
