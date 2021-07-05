//json格式
let info = {
    name: 'Maxwell',
    age: 20,
    hasPet: false,
};
let someone = {
    knows: undefined,
    identity: null
};

//第一情況:屬性值被錯誤的型別插入/覆寫干擾
//先確認屬性是否能帶入值，其值對應正確的型別 => PASS
info.name = 'Martin';
info.age = 24;
info.hasPet = true;

someone.knows = undefined;
someone.identity = null;
//確認屬係被錯誤型別的值干擾 => 錯誤!
info.name = false;
info.age = null;
info.hasPet = 'Dog';

someone.knows = 'Nothing';
someone.identity = 'John Snow';

//第二種情況
//正確格式
info ={
    name: 'Martin',
    age: 24,
    hasPet: true
};
//格式錯誤-少了一個鍵
info ={
    name: 'Martin',
    age:24,
};
//格式錯誤-多了一個鍵
someone ={
    knows: undefined,
    identity: null,
    loves: 'katy',
};

//第三種情況
info.job = 'Engineer';

//將屬性刪掉卻可以編譯執行
delete info.hasPet;
console.log(info);

//筆者建議的刪除方式
info.hasPet = undefined;

//object型別註記-覆寫
let justAnObject: object ={hello: 'world'};
console.log(justAnObject);
//我們認為可能正確的狀況
justAnObject.hello ='Max';

//測試情況一:覆寫錯誤型別的值
justAnObject.hello = null;

//測試情況二:完全複寫錯誤的格式
justAnObject = {goodbye: 'crul world'};
console.log(justAnObject);

//測試情況三:無緣無故亂加key
justAnObject.newProp = 123;

//以原始型態覆寫(預期會出錯，畢竟不是物件)
justAnObject = 123;

//以陣列來覆寫
justAnObject=[1,'2',3,'4',5,true,{hello:'world'}];

//以函數來覆寫
justAnObject = function(){console.log('oh my god');}
//在函式裡面用console log是為了debug但是不建議新手使用
justAnObject = function(){'oh my god';}
console.log(justAnObject);

//以物件來覆寫
justAnObject= new object();

//以看起來是原始型態的東西但是用創建物件的方式覆寫
justAnObject = new String("the....");
justAnObject = new Number(42);

//直接用類別名稱覆寫
justAnObject = Object;
justAnObject = Array;