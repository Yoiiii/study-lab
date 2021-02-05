import React, { useState } from 'react'
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
function App() {
  let [data, setData] = useState([
    {
      id: 0,
      txt: "数据内容",
      done: false
    },
    {
      id: 1,
      txt: "数据内容1",
      done: true
    }
  ])
  setData(data.map(item => ({ ...item })))
  function addData(txt) {
    let _data = data
    _data.unshift({
      id: Date.now(),
      txt: txt,
      done: false
    })
    setData(_data)
  }
  //修改事项信息
  function editTxt(id, Txt) {
    data.forEach(item => {
      if (item.id === id) {
        item.txt = Txt
      }
    })
    setData(data)
  }
  //删除单项
  function remove(id) {
    data = data.filter(item => item.id !== id)
    setData(data)
  }
  //删除已完成
  function removeDone() {
    data = data.filter(item => !item.done)
    setData(data)
  }
  //修改完成状态
  function changeDone(id, done) {
    data.forEach(item => {
      if (item.id === id) {
        item.done = done
      }
    })
    setData(data)
  }
  return (
    <div id="todoapp">
      <Title></Title>
      <div className="content">
        <Create addData={addData} />
        {data.length < 1 ? "" : [
          <Todos
            key={1}
            changeDone={changeDone}
            editTxt={editTxt}
            remove={remove}
            data={data} />,
          <State key={2} data={data} removeDone={removeDone} />]}
      </div>
    </div>
  )
}

export default App  