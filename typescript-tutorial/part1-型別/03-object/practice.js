var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//讀者試試看
//1.物件包物件
var nestedObject = {
    prop: 'Hello',
    child: {
        prop1: 123,
        prop2: false
    }
};
//2.物件被展開到另一個物件（須具備 ES7 Rest-Spread Operator 知識）
var obj1 = { hello: 'World' };
var obj2 = __assign(__assign({}, obj1), { goodbye: 'Cruel World' });
//3.使用 Object.assign
var obj3 = { hello: 'Another World' };
var obj4 = Object.assign(obj3, {
    goodbye: 'Cruel World'
});
