//讀者試試看
//那你能不能夠用剛剛的想法推斷一下，如果是：
type T = void | never;
//也會是同樣的結果嗎？也就是 void 會把 never 這個型別也會吸收掉嗎？
//那麼以下這種情況呢？
type U = any | never;
