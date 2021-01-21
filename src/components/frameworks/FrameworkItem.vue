<template>
<div>
    <h2>{{title}} - {{frameTitle}}</h2>
    <p>{{framework.name}} - {{framework.difficult}}</p>
    <button @click="editTitle">edit title</button>
    <button @click="onComplete">Complete</button>
    <button @click="editFooter">Edit footer</button>
</div>
</template>

<script>
  import {eventBus} from "@/main";

  export default {
    name: "FrameworkItem",
    props: {
      framework: {
        type: Object,
        required: true,
        default: null
      },
      title: {
        type: String,
        default: 'No frame'
      }
    },
    data(){
      return {
        frameTitle: this.title,
      }
    },

    methods: {
      editTitle(){
        const value = 'New title';
        this.$emit('updateTitle', value)
      },
      onComplete(){
        this.framework.completed = true;
      },
      editFooter(){
        eventBus.$emit('updateFooter', 'Footer was updated')
      }
    }
  }
</script>

<style scoped>

</style>
