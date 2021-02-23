<template>
  <div>
    <h1>Some user info</h1>
    <p>User ID:{{ $route.params.id }}</p>
    <router-link
        tag="button"
        :to="{name: 'UserEdit', params: {id: $route.params.id}, query: {item: 10, page: 1}}"
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
<!--:to="'/user/'+$route.params.id+'/edit/'"-->