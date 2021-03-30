<script>
import {ref,reactive,h} from 'vue'

export default {
  setup() {
    const count = ref(0)
    const object = reactive({foo:'bar'})

    setTimeout(()=>{
      //通过ref 包裹的变量，需要通过.value的形式修改变量，在模板中使用无需使用.value,因为setup内return 的时候，已经帮你解开
      count.value=1
      object.foo='foo'
    },2000)

    //通过h函数将变量渲染到 h1标签内
    return()=>h('h1',[count.value,object.foo])
  }
}
</script>
