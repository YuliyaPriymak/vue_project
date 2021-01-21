<template>
    <div>
        <h1>FrameworkList</h1>
        <div v-for="(framework, i) in frameworks" :key="i">
            <div :class="framework.completed ? 'green' : 'red'">
                <FrameworkItem
                        :framework="framework"
                        :title="title"
                        @updateTitle='updateTitle'
                />
            </div>
        </div>
    </div>
</template>

<script>
  import FrameworkItem from "@/components/frameworks/FrameworkItem";

  export default {
    name: "FrameworkList",
    components: {
      FrameworkItem
    },
    data() {
      return {
        title: 'Frame',
        frameworks: [
          {
            name: 'Vue',
            difficult: 'easy',
            completed: false
          },
          {
            name: 'React',
            difficult: 'easy',
            completed: false
          },
          {
            name: 'Angular',
            difficult: 'hurd',
            completed: false
          }
        ]
      }
    },
    methods: {
      updateTitle(event) {
        this.title = event
      }
    }
  }
</script>

<style scoped>
    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }
</style>
