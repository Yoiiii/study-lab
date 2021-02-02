import React ,{PureComponent} from 'react'
import Title from './title';
import Create from './create';
import Todos from './todos'
import State from './state'
import './index.css'
/*
  1.确定数据格式
  2.根据数据完成列表渲染
  3.完成添加功能
  4.完成单项操作
 */
class App extends PureComponent{
  state={
    data:[
      {
        id:0,
        txt:"数据内容",
        done:false
      },
       {
        id:1,
        txt:"数据内容1",
        done:true
      }
    ]
  }
  //添加数据
  addData=(txt)=>{
    let {data}=this.state
    data.unshift({
      id:Date.now(),
      txt:txt,
      done:false
    })
    this.setState({
      data:data.map(item=>({...item}))
    })
  }
  //修改完成状态
  changeDone=(id,done)=>{
    let {data}=this.state
    data.forEach(item=>{
      if(item.id===id){
        item.done=done
      }
    })
    this.setState({
      data:data.map(item=>({...item}))
    })
  }
  //修改事项信息
  editTxt=(id,Txt)=>{
    let {data}=this.state
    data.forEach(item=>{
      if(item.id===id){
        item.txt=Txt
      }
    })
    this.setState({
      data:data.map(item=>({...item}))
    })
  }
  //删除单项
  remove=(id)=>{
    let {data}=this.state
    data=data.filter(item=>item.id!==id)
    this.setState({
      data
    })
  }
  //删除已完成
  removeDone=()=>{
    let {data}=this.state
    data=data.filter(item=>!item.done)
    this.setState({
      data
    })
  }
  render(){
    let {data}=this.state
    return (
      <div id="todoapp">
        <Title></Title>
        <div className="content">
            <Create addData={this.addData}/>
            {data.length<1?"":[
            <Todos 
            key={1}
            changeDone={this.changeDone} 
            editTxt={this.editTxt}
            remove={this.remove}
            data ={data}/>,
            <State key={2} data={data} removeDone={this.removeDone}/>]}
        </div>
      </div>
    )
  }
}

export default App