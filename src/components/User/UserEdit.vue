<template>
  <div>
    <h1>User edit</h1>
    <p>id: {{$route.params.id}}</p>
    <p>item: {{$route.query.item}} - page: {{$route.query.page}}</p>
  </div>
</template>

<script>
export default {
  name: "UserEdit",

  methods: {
    beforeMount() {
      console.log(this.$route.query);
    }
  }
};
</script>

<style scoped>
</style>
