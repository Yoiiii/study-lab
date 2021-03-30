<template>
  <div>
    <h1>生命周期{{ state.count }}</h1>
    <div v-if="state.show">
      <Test />
    </div>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import {reactive,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onErrorCaptured} from 'vue'
export default {
  components:{
    Test
  },
  setup(){
    const state= reactive({
      count:0,
      show:true
    })
    setTimeout(()=>{
      state.count=2
      state.show=false
    },2000)

   onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    
    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })

    onUnmounted(() => {
      console.log('onUnmounted')
    })

    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })
    return{
      state
    }
  }

}
</script>

<style>

</style>