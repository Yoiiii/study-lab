/**
 * webpack 是基于node 实现的
 * 当我们执行webpack 其实本质上运行的是node代码
 * 所以这里是配置文件 webpack.config.js 是node代码文件
 */

// 导出的就是一个对象，这个对象就是webpack命令执行过程中使用到的配置
module.exports={
  mode:"development",//编译模式
  entry:"./src/index.js",//编译入口文件
}