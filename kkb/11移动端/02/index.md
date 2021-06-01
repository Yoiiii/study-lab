# 移动端事件

## 上节课内容回顾
- 实现移动端幻灯片

## 本节课知识点
- orientationchange 监听横竖屏切换
- window.orientation 检测手机横竖屏
- devicemotion 监听手机加速度发生变化
  - acceleration 手机加速度检测
  - 案例：摇一摇功能实现
  - accelerationIncludingGravity 手机重力加速度检测
  - 案例: 方块移动
    - IOS 和 安卓的兼容处理
    `
      function getIos(){
          var u = window.navigator.userAgent;
          return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      }
    `
  - 注意 IOS 下，数值和 安卓的数值刚好相反  
- 扩展：函数防抖和函数节流
  - lodash https://www.lodashjs.com/docs/latest
  - 函数防抖[debounce]
    - 希望函数只执行一次，哪怕我进行了多次调用
    `
      func (Function): 要防抖动的函数。
      [wait=0] (number): 需要延迟的毫秒数。
      [options={}] (Object): 选项对象。
      [options.leading=false] (boolean): 指定在延迟开始前调用。
      [options.maxWait] (number): 设置 func 允许被延迟的最大值。
      [options.trailing=true] (boolean): 指定在延迟结束后调用。
      https://github.com/lodash/lodash/blob/master/debounce.js
    `
  - 函数节流[throttle]
    - 让函数保持在一个可接受的固定频率执行
    `
      func (Function): 要节流的函数。
      [wait=0] (number): 需要节流的毫秒。
      [options={}] (Object): 选项对象。
      [options.leading=true] (boolean): 指定调用在节流开始前。
      [options.trailing=true] (boolean): 指定调用在节流结束后。
      https://github.com/lodash/lodash/blob/master/throttle.js
    `
### 重点备注
- 在 ios 11(包括目前的一些安卓机) 之后，如果想要在页面中使用陀螺仪相关的一些事件,必须使用 https 协议

## 观看录播
- better-scroll
- 多指操作(自定义事件)
- tap longtap
- 检测手机倾斜角度
  - 类 VR 3d 场景
  - 淘宝造物节

## 下节课内容
### 主题 Webpack
- 模块
    - ESM、AMD、UMD
- webpack 安装与基础使用
- 基本配置
- loaders

## 下节课讲师
钟毅

高级全栈工程师，5 年前后端 php 开发经验，6 年前端开发经验，包含 5 年研发教学经历。涉及PHP、symfony、laravel，Node.js、Express、KOA，MySQL、MongoDB 等，前端 Angular、Vue、React 开发框架，以及 webpack 工程化相关技术，参与过《前端HTML+CSS修炼之道》一书的内容编写。





 




