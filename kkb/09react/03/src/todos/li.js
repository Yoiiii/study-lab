import React,{PureComponent,createRef} from 'react'
class Li extends PureComponent{
  state={
    edit:false,
    ref:createRef(),
    val:""
  }
  static getDerivedStateFromProps(props,state){
    /*
    1.挂载时:同步state中的value和props中的txt
     */
    if(!state.edit){
      state.val=props.data.txt
    }
    return true
  }
  componentDidUpdate(prevPorps,prevState){
    //组件更新完成之后，判断是否需要给input 获得焦点
    if(this.state.edit&&!prevState.edit){
      //让输入框获得焦点
      // console.log(this.refs);
      // this.refs.txt.select()
      //console.log(this.state.ref);
      this.state.ref.current.select()
      
    }
  }
  render(){
    let {data,changeDone,editTxt,remove}=this.props
    let {done,txt,id}=data
    let {edit,val}=this.state
    return(
      <li className={edit?"editing":""}>
        <div className={"todo " + (done?"done":"")}>
          <div className="display">
            <input className="check" type="checkbox" checked={done} onChange={(e)=>{
              console.log(e.target.checked);
              changeDone(id,e.target.checked)
            }}></input>
            <div className="todo-content" onDoubleClick={()=>{
              this.setState({
                edit:true
              })
            }}>{txt}</div>
            <span className="todo-destory" onClick={()=>{
              remove(id)
            }}></span>
          </div>
          <div className="edit">
            <input 
            ref={this.state.ref}
            className="todo-input" 
            type="text" 
            value={val} 
            onChange={(e)=>{
              this.setState({
                val:e.target.value
              })
            }}
            onBlur={()=>{
              this.state.edit=false
              if(val.trim()){
              editTxt(id,val)
              }else{
                editTxt(id,txt)
              }
            }}
            ></input>
          </div>
        </div>
      </li>
    )
  }
}

export default Li 