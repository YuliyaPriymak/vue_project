<template>
    <div id="app">
        <h1>{{message}}</h1>
        <button v-on:click="inc">Click</button>
        <span>{{counter}}</span>
        <div v-on:mousemove="updateCoordinates">Coordinates: {{x}} - {{y}}</div>
    </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        message: 'Hello World',
        counter: 0,
        x: 0,
        y: 0,
      }
    },
    methods: {
      inc() {
        this.counter++
      },
      updateCoordinates(event) {
        this.x = event.clientX;
        this.y = event.clientY;
      }
    }

  }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
