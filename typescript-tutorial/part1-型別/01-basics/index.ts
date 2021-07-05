//測試型別註記
//part1
let myName = 'Maxwell';
let age = 20;
let hasPet = false;
let nothing = undefined;
let nothingLiterally = null;

let age:number
age = 'Young'

nothing = '20'

//part2
let messageToSend;
messageToSend = '101010101010';

//part3
let absoluteNothing: undefined = undefined;
let literallyAbsoluteNothing: null = null;
absoluteNothing = 123;
literallyAbsoluteNothing ="I can't live in this variable now..."

//tdz 變數還沒給值無法指定
var canBeNullableString: string;
var myString = canBeNullableString;
canBeNullableString = 'hello';

canBeNullableString = undefined;
canBeNullableString = null;
//同上
let a: string;
let b: string;
a = b;

//運用union
let absoluteEitherNullOrString: string | null = null;

absoluteEitherNullOrString = '1';
absoluteEitherNullOrString = null;
absoluteEitherNullOrString = '2';


