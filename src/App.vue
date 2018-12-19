<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
    import Header from "./components/Header";
    
    export default {
        name: 'app',
        components: {Header}
    }
</script>

<style>
body {
  background-color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  display: grid;
}

</style>
