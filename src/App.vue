<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Scannable App"/>

    <div style="width: 960px; margin: 0 auto; max-width: 100%;">
      <UpcInput />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import UpcInput from './components/UpcInput.vue'

// import UpcForm from './components/UpcForm.vue'
// import LpForm from './components/UpcForm.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    UpcInput
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
