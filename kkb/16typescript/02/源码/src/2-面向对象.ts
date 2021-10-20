// // class User{
// //   username:string;
// //   age:number;
// //   //构造函数不能有返回值，且不能给构造函数标注类型
// //   constructor(username:string,age:number){
// //     //在ts中的成员属性不能通过构造函数的初始化类定义，而是需要单独的定义的
// //     this.username = username
// //     this.age=age
// //     //不允许
// //     //return 1
// //   }

// //   postArticle(title: string, content: string): void {
// //     console.log(`${this.username} 发表了一篇文章： ${title}`)
// //   }
// // }

// class User{
//   // username:string;
//   // age:number;

//   constructor(
//     public username:string,
//     public age:number
//     ){
//     // this.username = username
//     // this.age=age
//   }

//   postArticle(title: string, content: string): void {
//     console.log(`${this.username} 发表了一篇文章： ${title}`)
//   }
// }
// class VIP extends User {
//   constructor(username:string,age:number){
//     super(username,age)
//     //t
//   }
// }

// let user1 = new User('yoi',30)



// 类类型  对象类型
class User{
  static gender=['男','女']
  constructor(
    public username:string
  ){

  }

  eat():void{}

  static method():string{
    return ''
  }
}

//当一个类被创建出来的时候，产生了两种不同的类型:一个是类(构造函数)的类型，另外一个是类实例化出来的对象
interface UserObject{
  username:string
  eat():void
}

interface UserClass{
  new (username:string):UserObject
}

let user1 = new User('yoi')

let fn:UserClass=function(username:string){
  return new User(username)
}

let user2 = fn('yoi')
