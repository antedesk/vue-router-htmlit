<template>
  <div class="hello">
    <h1>Home</h1>
    <p>This is the Home!</p>

    <router-link :to="{name:'data', params: { id: 1234 }}">
      <button class="button" type="button">Display id 1234</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
