//讀者試試看
//1.參數與回傳型別一模一樣
interface AddOperation1 {
    add(p1: number, p2: number): number;
    add(p1: number, p2: number): number;
}

const implementAddition1: AddOperation1 ={
    add(p1: number, p2: number){
        if(typeof p1 ==='number'&& typeof p2 ==='number'){
            return p1+p2;
        }

        throw new Error(`
        Parameter\`p1\`and\`p2\`should only accept 
        both\`number\`type or\`string \`type.
        `);
    }
};

let answer1: number;
answer1=implementAddition1.add(2,3);
console.log(answer1); //5

//2.回傳型別不同但是參數相同
interface AddOperation2 {
    add(p1: number, p2: number): number;
    add(p1: number, p2: number): string;
}

const implementAddition2: AddOperation2 ={
    add(p1: number, p2: number){
        if(typeof p1 ==='number'&& typeof p2 ==='number'){
            return p1+p2;
        }

        throw new Error(`
        Parameter\`p1\`and\`p2\`should only accept 
        both\`number\`type or\`string \`type.
        `);
    }
};

let answer2: number;
answer2=implementAddition2.add(2,3);
console.log(answer2);

//3.參數數量不同==>無解
interface AddOperation3 {
    add(p1: number): number;
    add(p1: number, p2: number): number;
}

