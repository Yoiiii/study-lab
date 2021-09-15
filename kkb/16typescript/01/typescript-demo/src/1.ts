let str:string = 'typescript'

class User{
  constructor(
    public username:string
  ){
    
  }
}

// let obj1:object={
//   x:1
// }

// let a = 1
// type a = 'string'

// console.log(a);
// let v:a;


// type user={
//   username:string,
//   age:number
// }

// type t =string|number

// type user={
//   username:string,
//   age:number
// }

// interface user{
//   username:string,
//   age:number
// }

// interface user{
//   gender:string
// }
// function fn(arg:user){

// }

// fn({
//   username:"",
//   age:1,
//   gender:'男'
// })

interface T{
  [x:string]:number|string
}
let o:T

o.x=1
o.y=1