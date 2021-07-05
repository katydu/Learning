
//TS不會鳥你的狀況
let parseJSON = JSON.parse(aJSONString);

//接受TS型別系統的擁抱
let parseJSON1 = JSON.parse(aJSONString) as { hello: string, luckyNumber: number};
let parseJSON2 = <{ hello: string, luckynumber: number}>JSON.parse(aJSONString);
let parseJSON3: { hello: string, luckynumber: number} = JSON.parse(aJSONString);