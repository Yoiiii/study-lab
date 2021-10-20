// class User{
//   username:string;
//   age:number;
//   //构造函数不能有返回值，且不能给构造函数标注类型
//   constructor(username:string,age:number){
//     //在ts中的成员属性不能通过构造函数的初始化类定义，而是需要单独的定义的
//     this.username = username
//     this.age=age
//     //不允许
//     //return 1
//   }
//   postArticle(title: string, content: string): void {
//     console.log(`${this.username} 发表了一篇文章： ${title}`)
//   }
// }
var User = /** @class */ (function () {
    // username:string;
    // age:number;
    function User(username, age) {
        this.username = username;
        this.age = age;
        this.username = username;
        this.age = age;
    }
    User.prototype.postArticle = function (title, content) {
        console.log(this.username + " \u53D1\u8868\u4E86\u4E00\u7BC7\u6587\u7AE0\uFF1A " + title);
    };
    return User;
}());
var user1 = new User('yoi', 30);
