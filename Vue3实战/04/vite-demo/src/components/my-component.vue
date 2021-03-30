<template>
  <div>helllo {{name}}</div>
  <div>你喜欢{{years}}年的{{likes}}吗？</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:"MyComponent",
  data(){
    return{
      name:"Yoi"
    }
  },
  props:['likes','years']
})
</script>