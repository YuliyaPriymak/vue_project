<template>
  <div>
    <h1>Some user info</h1>
    <p>User ID:{{ $route.params.id }}</p>
    <router-link
        tag="button"
        :to="'/user/'+$route.params.id+'/edit/'"
    >Edit user
    </router-link>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>

</style>
