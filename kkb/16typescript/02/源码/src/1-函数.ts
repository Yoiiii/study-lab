/**
 * 函数这种类型的数据，标注：
 * - 参数的类型
 * - 返回值的类型
 */
// function fn1(a:number,b:number):number{
//     return a+b;
// }

// let f1 = fn1(1,2)


/**
 * type callback 是一个类型名称，在编译以后的代码中将会被删除
 * fn2 callback 新参是一个参数，变量
 */
// function fn2(callback:(a:number,b:number)=>number){
// }

// type callback = (a:number,b:number)=>number
// function fn2(callback:callback){

// }

// fn2(function(a,b){
//     return a+b
// })

//通过接口的形式来标注函数
// interface IUser{
//     username:string;
//     age:number;
//     // 如果在接口中定义一个函数，且这个函数有名称的话，则表示是一个对象中包含了一个方法，并非是用接口去单独定义了一个函数
//     eat():void;
// }
// // type callback = (a:number,b:number)=>number


// let obj:IUser={
//     username:'yoi',
//     age:25,
//     eat(){}
// }
// function fn3(args:IUser){

// }
// fn3(obj)

// interface ICallBack{
//     eat(a:number,b:number):number;
// }

// function fn4(callback:ICallBack){

// }

// fn4({
//     eat(a,b){
//         return a+b
//     }
// })

//this
// function fn5(){
//     //普通函数在声明的时候是无法去确定this的类型的
//     this
// }

// fn5()
// document.onclick = fn5

// interface IUser{
//     username:string;
//     age:number;
//     eat():void;
// }

// let obj2={
//     username:'yoi',
//     age:25,
//     eat(this:IUser,a){//this的标注是不占用实际参数位置的
//         console.log(this);
//     }
// }

// function showOrHide(ele: HTMLElement, attr: string, value: 'block'|'none'|number) {
// 	//
// }

// let div = document.querySelector('div');

// if (div) {
//   showOrHide( div, 'display', 'none' );
//   showOrHide( div, 'opacity', 1 );
// 	// error，这里是有问题的，虽然通过联合类型能够处理同时接收不同类型的参数，但是多个参数之间是一种组合的模式，我们需要的应该是一种对应的关系
//   showOrHide( div, 'display', 1 );
// }

//当同名函数接受的参数类型或者参数的个数不一致的时候，那么这个时候，我们需要函数重载
function showOrHide(ele:HTMLElement,attr:'display',value:'block'|'none')
function showOrHide(ele:HTMLElement,attr:'opacity',value:number)
function showOrHide(ele:any,attr:any,value:any){
  if(attr==='opacity'){
    //...
  }
}

showOrHide(document.body,'display','none')
showOrHide(document.body,'opacity',1)