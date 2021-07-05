//讀者試試看
//1.物件包物件
let nestedObject = {
    prop: 'Hello',
    child: {
      prop1: 123,
      prop2: false
    }
};

//2.物件被展開到另一個物件（須具備 ES7 Rest-Spread Operator 知識）
let obj1 = { hello: 'World' };
let obj2 = { ...obj1, goodbye: 'Cruel World' };

//3.使用 Object.assign
let obj3 = { hello: 'Another World' };
let obj4 = Object.assign(obj3, {
  goodbye: 'Cruel World'
});

