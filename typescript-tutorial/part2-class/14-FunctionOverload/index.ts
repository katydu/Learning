/*函式超載當然不可能直接操作 */
//如果是數字則直接套入加法
function addition(p1: number, p2: number){
    return p1+p2;
}

//如果是字串則轉換成數字
function addition(p1: string, p2: string){
    return parseInt(p1,10)+parseInt(p2,10);
}

/*介面的屬性對應的函式型別可以被超載 */
interface AddOperation{
    addition(p1: number, p2: number): number;
    addition(p1: string, p2: string): number;
}

//測試1
const implementAddition: AddOperation ={
    addition(p1: string, p2: string){
        return parseInt(p1,10)+parseInt(p2,10);
    }
};
//測試2
const implementAddition: AddOperation ={
    addition(p1: string, p2: string){
        return parseInt(p1,10)+parseInt(p2,10);
    },
    addition(p1: number, p2: number){
        return p1+p2;
    },
};
//測試3
const implementAddition: AddOperation ={
    addition(p1: number|string, p2: number|string){
        if(typeof p1 ==='number'&& typeof p2 ==='number'){
            return p1+p2;
        }else if(typeof p1 ==='string'&& typeof p2 ==='string'){
            return parseInt(p1,10)+parseInt(p2,10);
        }
    },
};
//測試4
const implementAddition: AddOperation ={
    addition(p1: number|string, p2: number|string){
        if(typeof p1 ==='number'&& typeof p2 ==='number'){
            return p1+p2;
        }else if(typeof p1 ==='string'&& typeof p2 ==='string'){
            return parseInt(p1,10)+parseInt(p2,10);
        }

        throw new Error(`
        Parameter\`p1\`and\`p2\`should only accept 
        both\`number\`type or\`string \`type.
        `);
    }
};

const $app = document.getElementById('app');
const $a = document.createElement('a');

$a.setAttribute('href', '<url>');
$a.style.color = 'red';
$app.appendChild($a);


/*介面融合*/
//Block-Level Elements
interface MyDocument {
    createElement(tag: 'p'): HTMLParagraphElement;
    createElement(tag: 'body'): HTMLBodyElement;
    createElement(tag: 'div'): HTMLDivElement;
}
//Inline-Level Elements
interface MyDocument {
    createElement(tag: 'a'): HTMLAnchorElement;
    createElement(tag: 'span'): HTMLSpanElement;
    createElement(tag: 'input'): HTMLInputElement;
}