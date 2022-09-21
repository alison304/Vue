<template>
  <div id="app">
    <img height="250px" alt="Vue logo" src="./assets/logo.png">
    <FormularioWebVue />
  </div>
</template>

<script>
  import FormularioWebVue from './components/FormularioWeb.vue'
  export default {
    name: 'App',
    components: {
      FormularioWebVue
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #041322;
    margin-top: 60px;
    font-size: large;
  }
  .logo {
    width: 1rem;
  }
</style>
