import React,{PureComponent} from 'react'
class Create extends PureComponent{
  state={
    val:""
  }
  render(){
    let {addData}=this.props
    return(
      <div id="create-todo">
        <input id="new-todo"  
        placeholder="What needs to be done?" 
        autoComplete="off"
        type="Text" 
        value={this.state.val}
        onChange={(e)=>{
          this.setState({
            val:e.target.value
          })
        }}
        onKeyDown={(e)=>{
          let {val}=this.state
          if(e.keyCode===13){
            if(val.trim()===""){
              alert("清输入内容")
              return
            }
            addData(val)
            this.setState({
              val:""
            })
          }
        }}/>
      </div>
    )
  }
}

export default Create