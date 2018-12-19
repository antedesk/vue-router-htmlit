<template>
  <div>
    <h1>Data</h1>
    <p>Id: {{idVal}}</p>
  </div>
</template>

<script>
export default {
  name: 'Data',
  data() {
      return {
          idVal: this.$route.params.id
      }
  }
}
</script>

<style scoped>
</style>