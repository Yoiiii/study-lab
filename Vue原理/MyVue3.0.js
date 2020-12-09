
class Myvue extends EventTarget {
  constructor(options) {
    super()
    this.$options = options
    this.compile()
    this.observe(this.$options.data)
  }
  observe(data) {
    let _this = this
    this.$options.data = new Proxy(data, {//将data中的变量全部加入proxy
      get(target, key) {
        return target[key]
      },
      set(target, key, newValue) {
        let event = new CustomEvent(key, {
          detail: newValue
        })
        _this.dispatchEvent(event);
        target[key] = newValue
        return true
      }
    })
  }
  compile() {
    let el = document.querySelector(this.$options.el)
    this.compileNode(el)
  }
  compileNode(el) {
    let childNodes = el.childNodes
    //console.log(childNodes);
    childNodes.forEach(node => {
      if (node.nodeType === 1) {
        //标签
        let attrs = node.attributes
        console.log(attrs);
        [...attrs].forEach(attr => {
          console.log(attr);
          let attrName = attr.name;
          let attrValue = attr.value;
          if (attrName.indexOf("v-") === 0) {
            attrName = attrName.substr(2);
            if (attrName === "html") {
              node.innerHTML = this.$options.data[attrValue]
            } else if (attrName === "model") {
              node.value = this.$options.data[attrValue]
              node.addEventListener("input", e => {
                this.$options.data[attrValue] = e.target.value
              })
            }
          }
        })
        if (node.childNodes.length > 0) {
          this.compileNode(node)//递归子节点
        }
      } else if (node.nodeType === 3) {
        //文本
        let reg = /\{\{\s*(\S+)\s*\}\}/g;//正则表达式寻找双花括号
        let textContent = node.textContent
        if (reg.test(textContent)) {
          //console.log("存在双花括号");
          //console.log(RegExp.$1)//获取第一（）分组
          let $1 = RegExp.$1//获取到花括号中间的值
          node.textContent = node.textContent.replace(reg, this.$options.data[$1])//花括号和里面的值，替换成data中对应的值
          this.addEventListener($1, e => {
            console.log("触发修改");
            //重新渲染视图
            console.log(e.detail);
            let oldValue = this.$options.data[$1]
            let reg = new RegExp(oldValue);
            node.textContent = node.textContent.replace(reg, e.detail)
          })
        }
      }
    })
  }
}