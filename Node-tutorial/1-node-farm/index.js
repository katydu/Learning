////////////////////////////////////////////////////////////////////////////////
//file
//video 6-10
//先呼叫module
const FileSystem = require('fs');
//同步化方式
//1.寫入檔案
// const textIn = FileSystem.readFileSync('./starter/txt/input.txt','utf-8');
//console.log(textIn);

//2.寫出檔案
// const textOut = `this is : ${textIn} .\n Created on ${Date.now()}`;
// FileSystem.writeFileSync('./starter/txt/output.txt',textOut);
//console.log("file written!");


//非同步化方式
//單層callback function
//FileSystem.readFile('./txt/start.txt','utf-8', (err,data) =>{
    //console.log(data);
//});
//console.log('will read file!');
//多層的callback function
// FileSystem.readFile('./txt/start.txt','utf-8', (err,data1) =>{
//     FileSystem.readFile(`./txt/${data1}.txt`,'utf-8', (err,data2) =>{
//         console.log(data2);
//     });
// });
// console.log('will read file!');
//多層的callback function
// FileSystem.readFile('./txt/star.txt','utf-8', (err,data1) =>{
//     if(err) return console.log('出錯啦!!');//若出錯以後的程式碼皆不會再執行
//     FileSystem.readFile(`./txt/${data1}.txt`,'utf-8', (err,data2) =>{
//         console.log(data2);
//         FileSystem.readFile('./txt/append.txt','utf-8', (err,data3) =>{
//             console.log(data3);
//             //寫出
//             FileSystem.writeFile('./txt/final.txt',`${data2}\n${data3}`, err =>{
//                 console.log('your file has been written!');
//             });
//         });
//     });
// });
// console.log('will read file!');

////////////////////////////////////////////////////////////////////////////////
//server

//video 11-
//先呼叫module
const http = require('http');
const url = require('url');

const replaceTemplate = (temp,product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName); 
    output = output.replace(/{%IMAGE%}/g,product.image);
    output = output.replace(/{%PRICE%}/g,product.price);
    output = output.replace(/{%FROM%}/g,product.from);
    output = output.replace(/{%NUTRIENTS%}/g,product.nutrients);
    output = output.replace(/{%QUANTITY%}/g,product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g,product.description);
    output = output.replace(/{%ID%}/g,product.id);
    
    if(!product.organic){
        output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    }
    return output;
}



//以下readFileSync是同步程式碼，不能放進createServer的callback function裡面，
//因為callback只要被觸發就會執行，但是同步處理一次而已
const tempCard = FileSystem.readFileSync(`${__dirname}/starter/templates/template-card.html`,'utf-8');
console.log(tempCard);
const tempOverview = FileSystem.readFileSync(`${__dirname}/starter/templates/template-overview.html`,'utf-8');
const tempProduct = FileSystem.readFileSync(`${__dirname}/starter/templates/template-product.html`,'utf-8');

const data = FileSystem.readFileSync(`${__dirname}/starter/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);//JSON字串轉換成 JavaScript的數值或是物件

//建立server
const server = http.createServer((req,res) =>{
    
    const pathName = req.url;
    //overview page 
    
    //若url是沒有寫在if else裡的內容，則server會因無法處理這個request而一直等待，
    //導致網址上會一直轉圈圈
    if(pathName ==='/' || pathName ==='/overview'){
        res.writeHead(200,{'Content-type':'text/html'});
        
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml);
        res.end(output);
        //res.end(tempOverview);
        
    //product page
    }else if(pathName === '/product'){
        res.end('this is product');
    //api page
    }else if(pathName ==='/api'){
        
        //FileSystem.readFile(`${__dirname}/starter/dev-data/data.json`,'utf-8', (err,
        //data) =>{
            res.writeHead(200,{'Content-type':'application/json'});
            res.end(data);//每次client hit the server,都必須重讀一次檔案，很沒效率
        //});
        //res.end('api');
    //not found
    }else{
        //http status code，打開f12 console可以看到或是network
        res.writeHead(404,{
            'Content-type': 'text/html',//下面res.end可以使用html語法
            'my-own-header': 'hello-world'//Content-type跟my-own-heade是html header
        });
        res.end('<h1>page not found!</h1>');
    }
});

server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to request on port 8000');
});
