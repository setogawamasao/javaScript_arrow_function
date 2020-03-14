// アロー関数基本形
// let 関数名 =　(引数1,引数2・・・) => { 処理 }

// 処理が一文である場合
// {}とreturnが省略できる
const func1 = (a, b) => a + b;
console.log(func1(1, 2));

// オブジェクトリテラルを返す場合
// 処理に「()」が必要
// ※ 波括弧が「オブジェクトを表すのか処理内容のブロック」を表すのかわからなくなるので
// ※ オブジェクトリテラル　->　{プロパティ名1:値1, プロパティ名2:値2, ...};
const func2 = (a, b) => ({ first: a, secont: b });
console.log(func2(1, 2));

// 引数が1個の場合
// ()を省略できる
const func3 = a => a + a;
console.log(func3(1));

// 引数が0個の場合
// ()は省略できない
const func4 = () => console.log("hello world");
console.log(func4());
