<template>
<div>
    <ul>
        <li v-for="(fruit, i) in fruits" :key="i">{{fruit}}</li>
    </ul>
    <button @click="addFruit">Add fruit</button>
</div>
</template>

<script>
  import {fruitMixin} from "@/mixins/fruitMixins";

  export default {
    name: "mixins",
    mixins: [fruitMixin]
  }
</script>

<style scoped>

</style>
