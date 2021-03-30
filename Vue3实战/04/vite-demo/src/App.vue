<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <my-component likes="拉菲" years="82"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/my-component.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComponent
  }
}
</script>
