/**
 * 函数这种类型的数据，标注：
 * - 参数的类型
 * - 返回值的类型
 */
// function fn1(a:number,b:number):number{
//     return a+b;
// }
function fn2(callback) {
}
fn2(function (a, b) {
    return a + b;
});
