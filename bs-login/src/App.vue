<template>
  <div id="app">
    <login></login>
    <foot></foot>
  </div>
</template>

<script>
import Login from './components/Login'
import Foot from './components/Foot'
export default {
  components: {
    Login,
    Foot
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  background: #0080ff;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "proxima-nova", helvetica;
}
</style>
