<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Scannable App"/>

    <div style="width: 960px; margin: 0 auto; max-width: 100%;">
      <h2>Coupled UPC Input</h2>
      <UpcInput/>

      <h2>Componentized UPC Form</h2>
      <UpcForm/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// ok
import UpcInput from './components/UpcInput.vue'

// better
import ScannablePatternInput from './components/better/ScannablePatternInput.vue'
import UpcForm from './components/better/UpcForm.vue'
// import LpForm from './components/better/LpForm.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    UpcInput,

    // better
    ScannablePatternInput,
    UpcForm
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
