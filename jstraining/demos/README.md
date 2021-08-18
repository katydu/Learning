# 課堂練習的操作指導

## 目錄

- 前端開發的歷史和趨勢
  - [Backbone](#backbone)
  - [Angular](#angular)
  - [Vue](#vue)
- React 技術棧
  - [JSX](#jsx)
  - [React 元件語法](#react-元件語法)
  - [React 元件的參數](#react-元件的參數)
  - [React 元件的狀態](#react-元件的狀態)
  - [React 元件實戰](#react-元件實戰)
  - [React 元件的生命週期](#react-元件的生命週期)
  - [ReCharts](#recharts)
  - [MobX](#mobx)
  - [Redux](#redux)
- Node 開發
  - [Simple App](#simple-app)
  - [REST API](#rest-api)
  - [Express](#express)
- 前端工程簡介
  - [ESLint](#eslint)
  - [Mocha](#mocha)
  - [Nightmare](#nightmare)
  - [Travis CI](#travis-ci)

## Backbone

### 實驗目的

1. 理解前端框架的路由元件（`router`）的作用

### 操作步驟

1. 瀏覽器打開 [`demos/backbone-demo/index.html`](./backbone-demo/index.html)
1. 點擊頁面上的連結，注意瀏覽器 URL 的變化
1. 仔細查看 [`js/main.js`](./backbone-demo/js/main.js) 的原始碼，看懂 Router 元件的使用方式

## Angular

### 實驗目的

1. 理解 Angular 的雙向綁定機制

### 操作步驟

1. 瀏覽器打開 [`demos/angular-demo/index.html`](./angular-demo/index.html)
1. 在輸入框填入內容，注意頁面變化
1. 查看 [`index.html`](./angular-demo/index.html) 的原始碼，理解 Angular 對 HTML 標籤的增強

## Vue

### 實驗目的

1. 理解 Vue 的模板與資料的雙向綁定

### 操作步驟

1. 瀏覽器打開 [`demos/vue-demo/index1.html`](./vue-demo/index1.html)
1. 在輸入框填入內容，注意頁面變化
1. 查看 [`app1.js`](./vue-demo/app1.js)，理解 Vue 元件的基本寫法

### 注意事項

1. [`index2.html`](./vue-demo/index2.html) 是一個稍微複雜的例子，模板如何綁定資料物件的一個欄位。
2. [`index3.html`](./vue-demo/index3.html) 是事件綁定模板的例子。

## JSX

### 實驗目的

1. 掌握 JSX 基本語法

### 操作步驟

1. 瀏覽器打開 `demos/jsx-demo/index.html`，仔細查看原始碼。

### 注意事項

1. `ReactDOM.render` 方法接受兩個參數：一個虛擬 DOM 節點和一個真實 DOM 節點，作用是將虛擬 DOM 掛載到真實 DOM。

### 練習

1. 修改原始碼，將顯示文字變為「Hello React!」。

## React 元件語法

### 實驗目的

1. 掌握 React 元件的基本寫法

### 操作步驟

1. 瀏覽器打開 `demos/react-component-demo/index1.html`，仔細查看原始碼。

### 注意事項

1. `class MyTitle extends React.Component` 是 ES6 語法，表示自定義一個 `MyTitle` 類，該類繼承了基類 `React.Component` 的所有屬性和方法。
1. React 規定，自定義元件的第一個字母必須大寫，比如 `MyTitle` 不能寫成 `myTitle`，以便與內置的原生類相區分。
1. 每個元件都必須有 `render` 方法，定義輸出的樣式。
1. `<MyTitle/>` 表示生成一個元件類的實體，每個實體一定要有閉合標籤，寫成 `<MyTilte></MyTitle>` 也可。

## React 元件的參數

### 實驗目的

1. 學會向 React 元件傳參數

### 操作步驟

1. 瀏覽器打開 `demos/react-component-demo/index2.html`，仔細查看原始碼。

### 注意事項

1. 元件內部通過 `this.props` 物件獲取參數。

### 練習

1. 將元件的顏色，從紅色（`red`）換成黃色（`yellow`）。

## React 元件的狀態

### 實驗目的

1. 學會通過狀態變動，引發元件的重新渲染。

### 操作步驟

1. 瀏覽器打開 `demos/react-component-demo/index3.html`，仔細查看原始碼。

### 注意事項

```javascript
  class MyTitle extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        name: '訪問者'
      };
    }
    // ...
```

`constructor` 是元件的構造函式，會在創建實體時自動調用。 `...args` 表示元件參數，`super(...args)` 是 ES6 規定的寫法。 `this.state` 物件用來存放內部狀態，這裡是定義初始狀態。

```html
<div>
  <input
    type="text"
    onChange={this.handleChange.bind(this)}
  />
  <p>你好，{this.state.name}</p>
</div>;
```

`this.state.name` 表示讀取 `this.state` 的 `name` 屬性。每當輸入框有變動，就會自動調用 `onChange` 指定的監聽函式，這裡是 `this.handleChange`，`.bind(this)` 表示該方法內部的 `this`，綁定當前元件。

```javascript
handleChange(e) {
  let name = e.target.value;
  this.setState({
    name: name
  });
}
```

`this.setState` 方法用來重置 `this.state`，每次調用這個方法，就會引發元件的重新渲染。

## React 元件實戰

### 實驗目的

1. 學會自己寫簡單的 React 元件。

### 操作步驟

1. 瀏覽器打開 `demos/react-component-demo/index4.html`。
1. 點擊 `Hello World`，看看會發生什麼。

### 練習

1. 修改原始碼，使得點擊 `Hello World` 後，會顯示當前的日期，比如 `Hello 2016 年 1 月 1 日`。

2. 請在上一步練習的基礎上，進一步修改。現在 `Hello World` 點擊一次，會改變內容，再點擊就不會有反應了。請將其改成，再點擊一次變回原樣。

### 提示

 練習一、下面的程式碼可以得到當前日期。

```javascript
var d = new Date();
d.getFullYear() // 當前年份
d.getMonth() + 1 // 當前月份
d.getDate() // 當前是每個月的幾號
```

練習二、可以在 `this.state` 裡面設置一個開關變數 `isClicked`。

```javascript
this.state = {
  text: 'World',
  isClicked: false
};
```

然後，在 `this.handleClick` 方法裡面，做一個 `toggle` 效果。

```javascript
let isClicked = !this.state.isClicked;
this.setState({
  isClicked: isClicked,
  text: isClicked ? 'Clicked' : 'World'
});
```

## React 元件的生命週期

### 實驗目的

1. 掌握鉤子方法的基本用法
1. 掌握元件如何通過 Ajax 請求獲取資料，並對資料進行處理

### 操作步驟

1. 打開 `demos/react-lifecycle-demo/index.html`，仔細查看原始碼。

### 注意事項

```javascript
componentDidMount() {
  const url = '...';
  $.getJSON(url)
    .done()
    .fail();
}
```

- `componentDidMount` 方法在元件載入後執行，只執行一次。本例在這個方法裡向伺服器請求資料，操作結束前，元件都顯示 `Loading`。
- `$.getJSON` 方法用於向伺服器請求 JSON 資料。本例的資料從 Github API 獲取，可以打開原始碼裡面的連結，看看原始的資料結構。

### 練習

1. 本例的 JSON 資料是 Github 上面最受歡迎的 JavaScript 專案。請在網頁上顯示一個列表，列出這些專案。

### 提示

（1）`this.state.loading` 記錄資料載入是否結束。只要資料請求沒有結束，`this.state.loading` 就一直是 `true`，網頁上顯示 `loading`。

（2）`this.state.error` 保存資料請求失敗時的錯誤資訊。如果請求失敗，`this.state.error` 就是返回的錯誤物件，網頁上顯示報錯資訊。

（3）`this.state.data` 保存從伺服器獲取的資料。如果請求成功，可以先用 `console.log` 方法，將它在控制台裡印出來，看看資料結構。

```javascript
render() {
  // 加一行印出命令，看看資料結構
  console.log(this.state.data);
  return {
  // ...
```

（4）`this.state.data` 裡面的 `this.state.data.items` 應該是一個數組，保存著每個專案的具體資訊。可以使用 `forEach` 方法進行遍歷處理。

```javascript
var projects = this.state.data.items;
var results = [];
projects.forEach(p => {
  var item = <li>{p.name}</li>;
    results.push(item);
});
```

（5）然後，將上一步的 `results` 插入網頁即可。

```javascript
<div>
  <ul>{results}</ul>
</div>
```

## ReCharts

### 實驗目的

1. 了解如何使用第三方元件函式庫。

### 操作步驟

1. 瀏覽器打開 `demos/recharts-demo/index.html`，查看效果。

## MobX

### 實驗目的

1. 理解 MobX 框架

### 操作步驟

（1）瀏覽器打開 `demos/mobx-demo/browser-demo/index.html`，仔細查看原始碼

（2）命令行進入 `demos/mobx-demo/` 目錄，執行如下的命令。

```bash
$ npm install
$ npm start
```

（3）打開瀏覽器，訪問 http://localhost:8080 ，查看結果，並仔細研究 `app/` 目錄下面的程式碼。

### 注意事項

```javascript
@observer
class App extends React.Component {
  render() {
    // ...
  }
}
```

`@observer` 是一種新的語法，叫做「裝飾器」（Decorator），表示對整個類別的行為進行修改，即將 `App` 類別作為參數傳入 `observer` 函式。這裡的意思是，整個`App` 類別都是一個「觀察者」，觀察 `store` 的變化，只要一有變化，立刻重新渲染。

資料保存在 `Store` 裡面。 `Store` 的屬性分成兩種：被觀察的屬性（`@observable`），和自動計算得到的屬性 `@computed`。

```javascript
class Store {
  @observable name = 'Bartek';
  @computed get decorated() {
    return `${this.name} is awesome!`;
  }
}
```

`Store` 的變化由用戶引發。元件觀察到 `Store` 的變化，自動重新渲染。

```javascript
<p>
  {this.props.store.decorated}
</p>
<input
  defaultValue={this.props.store.name}
  onChange={
    (event) =>
      this.props.store.name = event.currentTarget.value
  }
/>
```

## Redux

### 實驗目的

1. 理解 Redux 架構

### 操作步驟

（1）命令行下進入 `demos/redux-demo` 目錄，執行如下的命令。

```bash
$ npm install
$ npm start
```

（2）打開瀏覽器，訪問 http://localhost:8080 ，查看結果，並仔細研究程式碼。

### 注意事項

（1）Redux 要求 UI 的渲染元件都是純元件，即不包含任何狀態（`this.state`）的元件。

```javascript
<div className="index">
  <p>{this.props.text}</p>
  <input
    defaultValue={this.props.name}
    onChange={this.props.onChange}
  />
</div>
```

（2）進行資料處理、並包含狀態的元件，稱為「容器型元件」。 Redux 使用 `connect` 方法，自動生成展示型元件對應的「容器型元件」。

```javascript、
// MyComponent 是純的 展示型元件
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);
```

（3）`mapStateToProps` 函式返回一個物件，表示一種映射關係，將展示型元件的參數映射到 `state`。

```javascript
function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name
  };
}
```

（4）`mapDispatchToProps` 函式也是返回一個物件，表示一種映射關係，但定義的是哪些用戶的操作應該當作 `Action`，傳給 `Store`。

```javascript
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch({
      type: 'change',
      payload: e.target.value
    })
  }
}
```

（5）`reducer` 函式用來接收 `action`，算出新的 `state`。

```javascript
function reducer(state = {
  text: '你好，訪問者',
  name: '訪問者'
}, action) {
  switch (action.type) {
    case 'change':
      return {
        name: action.payload,
        text: '你好，' + action.payload
      };
  }
}
```

`Store` 由 Redux 提供的 `createStore` 方法生成，該方法接受 `reducer` 作為參數。

```javascript
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
```

為了把 `Store` 傳入元件，必須使用 Redux 提供的 `Provider` 元件在應用的最外面，包裹一層。

## Simple App

### 實驗目的

1. 學會使用 Node 編寫簡單的前端應用。

### 操作步驟

（1）新建一個目錄

```bash
$ mkdir simple-app-demo
$ cd simple-app-demo
```

（2）在該目錄下，新建一個 `package.json` 文件。

```bash
$ npm init -y
```

`package.json` 是專案的配置文件。

（3）安裝 `jquery`、`webpack`、`webpack-cli` 這三個模組。

```bash
$ npm install -S jquery
$ npm install -S webpack webpack-cli
```

打開 `package.json` 文件，會發現 `jquery`、`webpack` 和 `webpack-cli` 都加入了 `dependencies` 欄位，並且帶有版本號。

（4）在專案根目錄下，新建一個網頁文件 `index.html`。

```html
<html>
  <body>
    <h1>Hello World</h1>
    <script src="bundle.js"></script>
  </body>
</html>
```

（5）在專案根目錄下，新建一個腳本文件 `app.js`。

```javascript
const $ = require('jquery');
$('h1').css({ color: 'red'});
```

上面程式碼中，`require` 方法是 Node 特有的模組載入命令。

（6）打開 `package.json`，在 `scripts` 欄位裡面，加入一行。

```javascript
"scripts": {
  "build": "webpack --mode production ./app.js -o ./bundle.js",
  "test": "...."
},
```

（7）在專案根目錄下，執行下面的命令，將腳本打包。

```bash
$ npm run build
```

執行完成，可以發現專案根目錄下，新生成了一個文件 `bundle.js`。

（8）瀏覽器打開 `index.html`，可以發現 `Hello World` 變成了紅色。

### 練習

1. 修改樣式，將標題變為藍色，然後重新編譯生成打包文件。

## REST API

### 實驗目的

1. 熟悉 REST API 的基本用法

### 操作步驟

（1）命令行進入 `demos/rest-api-demo` 目錄，執行下面的命令。

```bash
$ npm install -S json-server
```

（2）在專案根目錄下，新建一個 JSON 文件 `db.json`。

```javascript
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

（3）打開 `package.json`，在 `scripts` 欄位加入一行。

```javascript
"scripts": {
  "server": "json-server db.json",
  "test": "..."
},
```

（4）命令行下執行下面的命令，啟動服務。

```bash
$ npm run server
```

（5）打開 Chrome 瀏覽器的 Postman 應用。依次向 `http://127.0.0.1:3000/posts`、`http://127.0.0.1:3000/posts/1` 發出 `GET` 請求，查看結果。

（6）向 `http://127.0.0.1:3000/comments` 發出 `POST` 請求。注意，主體 `Body` 要選擇 `x-www-form-urlencoded` 編碼，然後依次加入下面兩個欄位。

```javascript
body: "hello world"
postId: 1
```

發出該請求後，再向 `http://127.0.0.1:3000/comments` 發出 `GET` 請求，查看結果。

（7）向 `http://127.0.0.1:3000/comments/2` 發出 `PUT` 請求，主體 `Body` 要選擇 `x-www-form-urlencoded` 編碼，然後加入下面的欄位。

```javascript
body: "hello react"
```

發出該請求後，再向 `http://127.0.0.1:3000/comments` 發出 `GET` 請求，查看結果。

（8）向 `http://127.0.0.1:3000/comments/2`發出 `DELETE` 請求。

發出該請求後，再向 `http://127.0.0.1:3000/comments`發出 `GET` 請求，查看結果。

## Express

### 實驗目的

1. 學會 Express 搭建 Web 應用的基本用法。

### 操作步驟

（1）進入 `demos/express-demo` 目錄，命令行執行下面的命令，安裝依賴。

```bash
$ cd demos/express-demo
$ npm install
```

（2）打開 `app1.js`，嘗試看懂這個腳本。

```javascript
var express = require('express');
var app = express();
```

上面程式碼調用 `express`，生成一個 Web 應用的實體。

```javascript
var router = express.Router();

router.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

app.use('/home', router);
```

上面程式碼新建了一個路由物件，該物件指定訪問根路由（`/`）時，返回 `Hello World`。然後，將該路由載入在 `/home` 路徑，也就是說，訪問 `/home` 會返回 `Hello World`。

`router.get` 方法的第二個參數是一個回調函式，當符合指定路由的請求進來，會被這個函式處理。該函式的兩個參數，`req` 和 `res` 都是 Express 內置的物件，分別表示用戶的請求和 Web 伺服器的回應。 `res.send` 方法就表示伺服器回應所送出的內容。

```javascript
var port = process.env.PORT || 8080;

app.listen(port);
console.log('Magic happens on port ' + port);
```

上面程式碼指定了外部訪問的連接埠，如果環境變數沒有指定，則連接埠預設為 `8080`。最後兩行是啟動應用，並輸出一行提示文字。

（3）在命令行下，啟動這個應用。

```bash
$ node app1.js
```

瀏覽器訪問 `localhost:8080/home`，看看是否輸出 `Hello World`。

然後，命令行下按 `Ctrl + C`，退出這個行程。

（4）通過環境變數，自定義啟動連接埠。

假定我們指定必須啟動在 `7070` 連接埠，命令行可以這樣操作。

```bash
# Linux & Mac
$ PORT=7070 node app1.js

# windows cmd / (git cmd)
$ set PORT=7070
$ node app1.js

# windows powershell
$ $env:PORT=7070
$ node app1.js
```

瀏覽器就可以訪問 `localhost:7070/home` 了。

然後，命令行下按 `Ctrl + C`，退出這個行程。

思考題：Node 應用能否直接在 `80` 連接埠啟動？

（5）打開 `app2.js`，查看新增的那個路由。

```javascript
router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});
```

上面程式碼新增了一個路由，這個路由的路徑是一個命名參數 `:name`，可以從 `req.params.name` 拿到這個傳入的參數。

在命令行下，啟動這個應用。

```bash
$ node app2.js
```

瀏覽器訪問 `localhost:8080/home/張三`，看看是否輸出 `Hello 張三`。

然後，命令行下按 `Ctrl + C`，退出這個行程。

（6）打開 `app3.js`，先查看頁面頭部新增的兩行程式碼。

```javascript
var express = require('express');
var app = express();

// 新增程式碼...
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// ...
```

上面程式碼中，`body-parser` 模組的作用，是對 `POST`、`PUT`、`DELETE` 等 HTTP 方法的主體進行解析。 `app.use` 用來將這個模組載入到當前應用。有了這兩句，就可以處理 `POST`、`PUT`、`DELETE` 等請求了。

下面查看新增的那個路由。

```javascript
router.post('/', function (req, res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name});
});
```

上面程式碼表示，如果收到了 `/` 路徑（實際上是 `/home` 路徑）的 `POST` 請求，先從主體拿到 `name` 欄位，然後返回一段 JSON 資訊。

在命令行下，啟動這個應用。

```bash
$ node app3.js
```

然後，在 Chrome 瀏覽器的 Postman 插件裡面，向 `http://127.0.0.1:8080/home` 發出一個 `POST` 請求。主體的編碼方法設為 `x-www-form-urlencoded`，裡面設置一個 `name` 欄位，值可以隨便取，假定設為 `Alice`。也就是說，發出這樣一個請求。

```
POST /home HTTP/1.1
Host: 127.0.0.1:8080
Content-Type: application/x-www-form-urlencoded

name=Alice
```

如果一切正常，伺服器會返回一段 JSON 資訊。

```javascript
{
  "message": "Hello Alice"
}
```

（7）打開 `app4.js`，查看在所有路由之前新增的那個函式。

```javascript
var router = express.Router();

// 新增的程式碼
router.use(function(req, res, next) {
  console.log('There is a requesting.');
  next();
});

router.get('/', function(req, res) {
  // ...
```

`router.use` 的作用是載入一個函式。這個函式被稱為中介軟體，作用是在請求被路由匹配之前，先進行一些處理。上面這個中介軟體起到 logging 的作用，每收到一個請求，就在命令行輸出一條記錄。請特別注意，這個函式內部的 `next()`，它代表下一個中介軟體，表示將處理過的請求傳遞給下一個中介軟體。這個例子只有一個中介軟體，就進入路由匹配處理（實際上，`bodyparser`、`router` 本質都是中介軟體，整個 Express 的設計哲學就是不斷對 HTTP 請求加工，然後返回一個 HTTP 回應）。

### 練習

1. 請增加一個中介軟體，伺服器每次收到用戶請求，會在伺服器的控制台印出收到請求的時間。

2. URL 的查詢字串，比如 `localhost:8080?name=Alice` 裡面的 `name`，可以用 `req.query.name` 拿到。請修改一個路由，使之可以收到查詢字串，然後輸出 `'Hello ' + req.query.name`。

## ESLint

### 實驗目的

1. 學會使用 ESLint 進行程式碼檢查。

### 操作步驟

（1）進入 `demos/eslint-demo` 目錄，安裝 ESLint。

```bash
$ cd demos/eslint-demo
$ npm install eslint --save-dev
```

（2）通常，我們會使用別人已經寫好的程式碼檢查規則，這裡使用的是 Airbnb 公司的規則。所以，還要安裝 ESLint 這個規則模組。

```bash
$ npm install eslint-plugin-import eslint-config-airbnb-base --save-dev
```

上面程式碼中，`eslint-plugin-import` 是運行這個規則集必須的，所以也要一起安裝。

（3）ESLint 的配置文件是 `.eslintrc.json`，放置在專案的根目錄下面。新建這個文件，在裡面指定使用 Airbnb 的規則。

```javascript
{
  "extends": "airbnb-base"
}
```

（4）打開專案的 `package.json`，在 `scripts` 欄位裡面加入三個腳本。

```javascript
{
  // ...
  "scripts" : {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint **/*.js",
    "lint-html": "eslint **/*.js -f html -o ./reports/lint-results.html",
    "lint-fix": "eslint --fix **/*.js"
  },
  // ...
}
```

除了原有的 `test` 腳本，上面程式碼新定義了三個腳本，它們的作用如下。

- `lint`：檢查所有 `js` 文件的程式碼
- `lint-html`：將檢查結果寫入一個網頁文件 `./reports/lint-results.html`
- `lint-fix`：自動修正某些不規範的程式碼

（5）運行靜態檢查命令。

```bash
$ npm run lint

  1:5 error Unexpected var, use let or const instead no-var
  2:5 warning Unexpected console statement no-console

✖ 2 problems (1 error, 1 warning)
```

正常情況下，該命令會從 `index.js` 腳本裡面，檢查出來兩個錯誤：一個是不應該使用 `var` 命令，另一個是不應該在生產環境使用 `console.log` 方法。

（6）修正錯誤。

```bash
$ npm run lint-fix
```

運行上面的命令以後，再查看 `index.js`，可以看到 `var x = 1;` 被自動改成了 `const x = 1;`。這樣就消除了一個錯誤，但是還留下一個錯誤。

（7）修改規則。

由於我們想要允許使用 `console.log` 方法，因此可以修改 `.eslintrc.json`，改變 `no-console` 規則。請將 `.eslintrc.json` 改成下面的樣子。

```javascript
{
  "extends": "airbnb-base",

  "rules": {
    "no-console": "off"
  }
}
```

再運行 `npm run lint`，就不會報錯了。

```bash
$ npm run lint
```

## Mocha

### 實驗目的

1. 學會使用 Mocha 進行單元測試。

### 操作步驟

（1）進入 `demos/mocha-demo` 目錄，安裝 Mocha 和 Chai。

```bash
$ cd demos/mocha-demo
$ npm install -D mocha
$ npm install -D chai
```

（2）打開 `add.js` 文件，查看原始碼，我們要測試的就是這個腳本。

```javascript
function add(x, y) {
  return x + y;
}

module.exports = add;
```

（3）編寫一個測試腳本 `add.test.js`。

```javascript
var add = require('./add.js');
var expect = require('chai').expect;

describe('加法函式的測試', function() {
  it('1 加 1 應該等於 2', function() {
    expect(add(1, 1)).to.be.equal(2);
  });
});
```

測試腳本與所要測試的原始碼腳本同名，但是後綴名為 `.test.js`（表示測試）或者 `.spec.js`（表示規格）。比如，`add.js` 的測試腳本名字就是 `add.test.js`。

測試腳本裡面應該包括一個或多個 `describe` 區塊，每個 `describe` 區塊應該包括一個或多個 `it` 區塊。

`describe` 區塊稱為「測試套件」（test suite），表示一組相關的測試。它是一個函式，第一個參數是測試套件的名稱（`加法函式的測試`），第二個參數是一個實際執行的函式。

`it` 區塊稱為「測試用例」（test case），表示一個單獨的測試，是測試的最小單位。它也是一個函式，第一個參數是測試用例的名稱（`1 加 1 應該等於 2`），第二個參數是一個實際執行的函式。

上面的測試腳本裡面，有一句斷言。

```javascript
expect(add(1, 1)).to.be.equal(2);
```

所謂「斷言」，就是判斷原始碼的實際執行結果與預期結果是否一致，如果不一致就拋出一個錯誤。上面這句斷言的意思是，調用 `add(1, 1)`，結果應該等於 `2`。

所有的測試用例（ `it` 區塊）都應該含有一句或多句的斷言。它是編寫測試用例的關鍵。斷言功能由斷言庫來實現，Mocha 本身不帶斷言函式庫，所以必須先引入斷言函式庫。

```javascript
var expect = require('chai').expect;
```

斷言函式庫有很多種，Mocha 並不限制使用哪一種。上面程式碼引入的斷言庫是 `chai`，並且指定使用它的 `expect` 斷言風格。

（4）打開 `package.json` 文件，改寫 `scripts` 欄位的 `test` 腳本。

```javascript
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},

// 改成

"scripts": {
  "test": "mocha *.test.js"
},
```

（5）命令行下，執行下面的命令，運行測試用例。

```bash
$ npm test
```

正常情況下，命令行會有提示，表示測試用例已經通過了。

### 練習

1. 請在 `add.test.js` 裡面加入一個測試用例，測試 `3` 加上 `-3`，`add` 函式應該返回 `0`。

## Nightmare

### 實驗目的

1. 學會使用 Nightmare 完成功能測試。

### 操作步驟

（1）進入 `./demos/nightmare-demo` 目錄，安裝依賴。

```bash
$ cd demos/nightmare-demo

# Linux & Mac
$ env ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ npm install

# Windows
$ set ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
$ npm install
```

注意，Nightmare 會先安裝 Electron，而 Electron 的安裝需要下載境外的包，有時會連不上，導致安裝失敗。所以，這裡先設置了環境變數，指定使用國內的 Electron 源，然後才執行安裝命令。

（2）查看一下瀏覽器自動化腳本 `taobao.test.js`。

```javascript
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
```

上面程式碼表示新建一個 Nightmare 實體，並且運行功能中，自動打開瀏覽器窗口。

```javascript
nightmare
  .goto('https://www.taobao.com/')
  .type('#q', '電視機')
  .click('form[action*="/search"] [type=submit]')
  .wait('#spulist-grid')
  .evaluate(function () {
    return document.querySelector('#spulist-grid .grid-item .info-cont')
      .textContent.trim();
  })
  .end()
```

上面程式碼表示，打開淘寶首頁，在搜尋框鍵入`電視機`，點擊「搜尋」按鈕，等待 `#spulist-grid` 元素出現，在頁面內註入（`evaluate`）程式碼，將執行結果返回。

```javascript
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
```

Nightmare 會返回一個 Promise 物件，`then` 方法指定操作成功的回調函式，`catch` 方法指定操作失敗的回調函式。

（3）命令行下運行這個範例腳本。

```bash
$ node taobao.test.js
```

正常情況下，運行結束後，命令行會顯示淘寶“電視機”搜尋結果的第一項。

（4）瀏覽器打開 `index.html` 文件，這是 React 練習時做過的一個例子，點擊 `Hello World`，標題會變成 `Hello Clicked`。我們就要編寫測試腳本，測試這個功能。

（5）打開測試腳本 `test.js`。

```javascript
var Nightmare = require('nightmare');
var expect = require('chai').expect;
var fork = require('child_process').fork;

describe('test index.html', function() {
  var child;

  before(function (done) {
    child = fork('./server.js');
    child.on('message', function (msg) {
      if (msg === 'listening') {
        done();
      }
    });
  });

  after(function () {
    child.kill();
  });
```

上面程式碼中，`before` 和 `after` 是 Mocha 提供的兩個鉤子方法，分別在所有測試開始前和結束後運行。這裡，我們在 `before` 方法裡面，新建一個子行程，用來啟動 HTTP 伺服器；測試結束後，再殺掉這個子行程。

注意，`before` 方法的參數是一個函式，它接受 `done` 作為參數。 `done`是 Mocha 提供的一個函式，用來表示異步操作完成。如果不調用 `done`，Mocha 就會認為異步操作沒有結束，一直停在這一步，不往下執行，從而導致超時（timeout）錯誤。

子行程腳本 `server.js` 的程式碼非常簡單，只有四行。

```javascript
var httpServer = require('http-server');
var server = httpServer.createServer();
server.listen(8080);
process.send('listening');
```

上面程式碼中，我們在 `8080` 連接埠啟動 HTTP 伺服器，然後向父行程發消息，表示啟動完成。

（6）真正的自動化測試腳本如下。

```javascript
  it('點擊後標題改變', function(done) {
    var nightmare = Nightmare({ show: true });
    nightmare
      .goto('http://127.0.0.1:8080/index.html')
      .click('h1')
      .wait(1000)
      .evaluate(function () {
        return document.querySelector('h1').textContent;
      })
      .end()
      .then(function(text) {
        expect(text).to.equal('Hello Clicked');
        done();
      })
  });
```

上面程式碼中，首先打開網頁，點擊 `h1` 元素，然後等待 1 秒鐘，注入腳本獲取 `h1` 元素的 text 內容。接著，在 `then` 方法裡面，做一個斷言，判斷獲取的 text 是否正確。

（7）運行這個測試腳本。

```bash
$ npm test
```

如果一切正常，命令行下會顯示測試通過。

### 練習

1. 請寫一個測試用例，驗證 `<h1>` 的字體顏色是紅色。 （提示：可以使用 `Window.getComputedStyle()` 方法，獲取元素的最終樣式。）

## Travis CI

### 實驗目的

1. 了解持續整合的做法，學會使用 Travis CI。

### 操作步驟

（1）註冊 [Github](https://github.com) 的帳號。如果你已經註冊過，跳過這一步。

（2）訪問這個儲存庫 [`github.com/ruanyf/travis-ci-demo`](https://github.com/ruanyf/travis-ci-demo)，點擊右上角的 `Fork` 按鈕，將它 clone 到你自己的空間裡面。

（3）將你 `fork` 的儲存庫，clone 到本地。注意，要將下面網址之中的 `[your_username]` 改成你的 Github 用戶名。

```bash
// Linux & Mac
$ git clone git@github.com:[your_username]/travis-ci-demo.git

// Windows
$ git clone https://github.com:[your_username]/travis-ci-demo
```

（4）使用你的 Github 帳號，登錄 [Travis CI](https://travis-ci.org/auth) 的首頁。然後，訪問 [Profile](https://travis-ci.org/profile) 頁面，選定 `travis-ci-demo` 儲存庫運行自動構建。

（5）回到命令行，進入你本地的 `travis-ci-demo` 目錄，切換到 `demo01` 分支。

```bash
$ cd travis-ci-demo
$ git checkout demo01
```

專案根目錄下面有一個 `.travis.yml` 文件，這是 Travis CI 的配置文件。如果沒有這個文件，就不會觸發 Travis CI 的自動構建。打開看一下。

```bash
language: node_js
node_js:
  - "node"
```

上面程式碼指定，使用 Node 完成構建，版本是最新的穩定版。

指定 Node 的版本號也是可以的。

```javascript
language: node_js
node_js:
  - "4.1"
```

上面程式碼指定使用 Node 4.1 版。

（6）Travis CI 預設依次執行以下九個腳本。

- `before_install`
- `install`
- `before_script`
- `script`
- `after_success` 或者 `after_failure`
- `after_script`
- `before_deploy`（可選）
- `deploy`（可選）
- `after_deploy`（可選）

用戶需要用到哪個腳本，就需要提供該腳本的內容。

對於 Node 專案，以下兩個腳本有預設值，可以不用自己設定。

```javascript
"install": "npm install",
"script": "npm test"
```

（7）打開當前分支的 `package.json`，可以發現它的 `test` 腳本是一個 `lint` 命令。

```javascript
"scripts": {
  "test": "jshint hello.js"
},
```

（8）在專案根目錄下，新建一個新文件 `NewUser.txt`，內容是你的用戶名。提交這個文件，就會觸發 Travis CI 的自動構建。

```bash
$ git add -A
$ git commit -m 'Testing Travis CI'
$ git push
```

（9）等到 Travis CI 完成自動構建，到頁面上 [檢查](https://travis-ci.org/repositories) 構建結果。

（10）切換到 `demo02` 分支，打開 `package.json`，可以看到 `test` 腳本，現在需要完成兩步操作了。

```javascript
  "scripts": {
    "lint": "jshint hello.js hello.test.js",
    "test": "npm run lint && mocha hello.test.js"
  },
```

（11）重複上面第 8 步和第 9 步。

### 練習

1. 修改 `hello.js`，讓其輸出 `Hello Node`。並修改測試用例 `hello.test.js`，使之能夠通過 Travis CI 的自動構建。
