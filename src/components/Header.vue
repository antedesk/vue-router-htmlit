<template>
  <div>
    <nav>
      <img src="../assets/logo.png" width="5%" height="5%"/>
      <router-link class="spacing" to="/">Home</router-link>
      <router-link class="spacing" to="/about">About</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
nav {
  background: #000;
  padding: 20px 20px 20px 20px;
}

nav a {
  padding: 10px;
  text-decoration: none;
  color: #FFF;
  font-weight: bold;
  margin-right: 15px;
}
</style>
