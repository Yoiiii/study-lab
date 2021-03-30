<template>
  <div>{{count}}</div>
  <button @click="add">+++++++</button>
</template>

<script>
import {watchEffect} from 'vue'
export default {
  name:'Test',
  props:{
    count:Number,
    add:Function
  },
  emits:['add'],
  //注意 props 不要进行解构，如 setup(...props)，这样会让 props 失去响应式。
  setup(props,ctx){
    // watchEffect(()=>{
    //   console.log('props.count',props.count);
    // })
    const add = ()=>{
      ctx.emit('add',50)
    }
    return{
      add
    }
  }  
}
</script>