<template>
    <div>
        <h1>User page</h1>
        <button @click="navigateToHome">To home</button>
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: "User",

    data() {
      return {
        id: ''
      }
    },

    methods: {
      navigateToHome() {
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style scoped>

</style>
