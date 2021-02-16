<template>
    <div id="app">
        <h1>Router</h1>
        <Header/>
        <router-view/>
    </div>
</template>

<script>


  import Header from "@/components/Header";
  export default {
    name: 'App',
    components: {Header},
    data() {
      return {}
    },
    computed: {},
    methods: {}

  }
</script>

<style>

</style>
