# React-2

# 课程目标
- 掌握 React 组件间通信
- 掌握 React 组件的生命周期
- 掌握受控组件的使用

# 课程内容

## React 组件间通信
在 React.js 中，数据是从上自下流动（传递）的，也就是一个父组件可以把它的 state / props 通过 props 传递给它的子组件，但是子组件不能修改 props - React.js 是单向数据流，如果子组件需要修改父组件状态（数据），是通过回调函数方式来完成的。
- 父级向子级通信
    把数据添加子组件的属性中，然后子组件中从props属性中，获取父级传递过来的数据
- 子级向父级通信
    在父级中定义相关的数据操作方法(或其他回调), 把该方法传递给子级，在子级中调用该方法父级传递消息

### 跨组件通信 - context
- React.createContext(defaultValue);
- Context.Provider 在父组件调用 Provider 传递数据
    - value 要传递的数据
- 接收数据
    - class.contextType = Context;
    - static contextType = Context;
    - Context.Consumer

**注意在使用不熟练时，最好不要再项目中使用 context，context一般给第三方库使用**

## 组件的生命周期

所谓的生命周期就是指某个事物从开始到结束的各个阶段，当然在 React.js 中指的是组件从创建到销毁的过程，React.js 在这个过程中的不同阶段调用的函数，通过这些函数，我们可以更加精确的对组件进行控制，前面我们一直在使用的 render 函数其实就是组件生命周期渲染阶段执行的函数

### 生命周期演变

#### 之前（React 16.3 之前）
- 挂载阶段 
    - constructor
    - componentWillMount
    - render
    - componentDidMount
- 更新阶段
    - 父组件更新引起组件更新
      - componentWillReceiveProps(nextProps)
      - shouldComponentUpdate(nextProps, nextState)
      - componentWillUpdate(nextProps, nextState)
      - render
      - componentDidUpdate(prevProps, prevState)
    - 组件自身更新
      - shouldComponentUpdate
      - componentWillUpdate
      - render
      - componentDidUpdate
- 卸载阶段
  - componentWillUnmount

#### 现在
- 挂载阶段
    - constructor
    - static getDerivedStateFromProps(props, state) 
      - 注意 this 问题
    - render
    - componentDidMount
- 更新阶段
    - 父组件更新引起组件更新
      - static getDerivedStateFromProps(props, state)
      - shouldComponentUpdate()
      - render()
      - getSnapshotBeforeUpdate()
      - componentDidUpdate()
    - 组件自身更新
      - static getDerivedStateFromProps(props, state)
      - shouldComponentUpdate()
      - render()
      - getSnapshotBeforeUpdate() 
      - componentDidUpdate()
- 卸载阶段
  - componentWillUnmount

- 错误处理
  - static getDerivedStateFromError() 
  - componentDidCatch(error, info)  
  - **错误捕获不捕获事件中的错误**
  - **在父级中捕获子级的错误**


#### 将来

- useEffect() 副作用 (用来替代先行生命周期)

参考：http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### 生命周期函数详解

#### constructor(props)
类的构造函数，也是组件初始化函数，一般情况下，我们会在这个阶段做一些初始化的工作
- 初始化 state
- 处理事件绑定函数的 this

#### render()

render 方法是 Class 组件必须实现的方法

#### static getDerivedStateFromProps(props, state)

该方法会在 render 方法之前调用，无论是挂载阶段还是更新阶段，它的存在只有一个目的：让组件在 props 变化时更新 state

#### componentDidMount()
在组件挂载后（render 的内容插入 DOM 树中）调用。通常在这个阶段，我们可以：
- 操作 DOM 节点
- 发送请求

#### shouldComponentUpdate(nextProps, nextState)

发生在更新阶段，getDerivedStateFromProps 之后，render 之前，该函数会返回一个布尔值，决定了后续是否执行 render，首次渲染不会调用该函数

#### getSnapshotBeforeUpdate(prevProps, prevState)

该方法在 render() 之后，但是在输出到 DOM 之前执行，用来获取渲染之前的快照。当我们想在当前一次更新前获取上次的 DOM 状态，可以在这里进行处理，该函数的返回值将作为参数传递给下个生命周期函数 componentDidUpdate

> 该函数并不常用。

#### componentDidUpdate()

该函数会在 DOM 更新后立即调用，首次渲染不会调用该方法。我们可以在这个函数中对渲染后的 DOM 进行操作

#### componentWillUnmount()

该方法会在组件卸载及销毁前调用，我们可以在这里做一些清理工作，如：组件内的定时器、未完成的请求等

### 错误处理

当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法

- static getDerivedStateFromError()
- componentDidCatch()

#### static getDerivedStateFromError()

```jsx
static getDerivedStateFromError(error)
```

该方法用来获取子组件抛出的错误，返回值是一个对象，该对象被存储在 state 中，在后续的 render 方法中就可以根据这个对象的值来进行处理，如：显示不同的 UI

```jsx
class ErrorBoundary extends React.Component {
      constructor(props) {
      super(props);
      this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
      return { hasError: true };
  }

  render() {
      if (this.state.hasError) {
        	return <div>出错了</div>;
      }
      return this.props.children;
  }
}
```

#### componentDidCatch() // 将来版本会有变化

```jsx
componentDidCatch(error, info)
```

该方法与 getDerivedStateFromError() 类似，但是也有不同的地方：

- 该方法会有一个记录详细错误堆栈信息的 info 参数
- 该方法可以执行一些额外的操作：打印错误、上报错误信息……

### 扩展 PureComponent

PureComponent 提供了一个具有浅比较的 shouldComponentUpdate 方法,其他和 Component 完全一直

## 受控组件

非受控组件: 我们不需要同步 value 值(defaultValue，defaultChecked)

# 练习


# 总结

# 下节课内容
- React 其他属性 children、ref 等
- 函数式组件
- hooks 
- 完整 todoList








 

