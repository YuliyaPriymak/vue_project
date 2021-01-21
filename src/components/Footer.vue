<template>
    <div>
        <h1 ref="footer">Footer</h1>
    </div>
</template>

<script>
  import {eventBus} from "@/main";

  export default {
    name: "Footer",
    created() {
      eventBus.$on('updateFooter', (msg)=>{
        this.$refs.footer.textContent = msg
      })
    }
  }
</script>

<style scoped>

</style>
