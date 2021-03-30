<template>
  <Test :count="count" @add="add"></Test>
</template>

<script>
import {ref} from 'vue'
import Test from './components/Test.vue'
export default {
  components: { Test },
  setup() {
    const count = ref(0)
    const add = (num)=> count.value+=num
    setTimeout(()=>{
      count.value++
    },2000)
    return{
      count,
      add
    }
  }
}
</script>
