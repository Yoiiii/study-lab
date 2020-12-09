
class Myvue extends EventTarget{
  //构造
  constructor(options){
    super()//获取父类所有方法
    this.$options=options
    this.compile()
    this.observe(this.$options.data)
  }
  observe(data){//根据data循环创建观察者
    let keys =Object.keys(data);
    keys.forEach(key =>{
      this.defineReact(data,key,data[key])
    })
  }
  defineReact(data,key,value){
    let _this =this
    //创建观察者
    Object.defineProperty(data,key,{
      configurable:true,//是否可以配置
      enumerable:true,//是否可以枚举
      get(){
        console.log("get...");
        return value
      },
      set(newValue){//当更新值时
        console.log("set...",newValue)
        //let event = new Event(key)
        let event =new CustomEvent(key,{
          detail:newValue
        })//将新值加入到事件中
        _this.dispatchEvent(event);//执行对应的事件
        value = newValue//更新值
      }
    })
  }
  compile(){
    let el =document.querySelector(this.$options.el)
    this.compileNode(el)
  }
  compileNode(el){
    let childNodes=el.childNodes
    //console.log(childNodes);
    childNodes.forEach(node=>{//遍历子节点
      if(node.nodeType===1){//若节点为标签，查找是否有v-标签
        let attrs =node.attributes//节点标签
        console.log(attrs);
        [...attrs].forEach(attr=>{
          console.log(attr);
          let attrName =attr.name;
          let attrValue =attr.value;
          if(attrName.indexOf("v-")===0){
            attrName=attrName.substr(2);
            if(attrName==="html"){
              node.innerHTML= this.$options.data[attrValue]
            }else if(attrName ==="model"){//双向绑定的值
              node.value=this.$options.data[attrValue]
              node.addEventListener("input",e=>{//每当发生input事件时更新data中的值
                this.$options.data[attrValue]= e.target.value
              })
            }
          }
        })
        if(node.childNodes.length>0){//如果还有子节点继续遍历
          this.compileNode(node)//递归子节点
        }
      }else if (node.nodeType===3){//当子节点为文本
        //文本
        let reg = /\{\{\s*(\S+)\s*\}\}/g;//正则表达式寻找双花括号
        let textContent = node.textContent
        if(reg.test(textContent)){
          //console.log("存在双花括号");
          //console.log(RegExp.$1)//获取第一（）分组
          let $1 =RegExp.$1//获取到花括号中间的值
          node.textContent =node.textContent.replace(reg,this.$options.data[$1])//花括号和里面的值，替换成data中对应的值
          this.addEventListener($1,e=>{//添加名为属性名的事件，并将默认值覆盖掉双花括号
            console.log("触发修改");
            //重新渲染视图
            console.log(e.detail);//新值
            let oldValue =this.$options.data[$1]
            let reg = new RegExp(oldValue);
            node.textContent=node.textContent.replace(reg,e.detail)
          })
        }
      }
    })
    }
}