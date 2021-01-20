<template>
    <div id="app">
        <h1>{{message}}</h1>
        <button v-on:click="inc">Click</button>
        <span>{{counter}}</span>
        <p>{{counter > 10 ? 'Greater then 10' : 'Smaller then 10'}}</p>
        <div v-on:mousemove="updateCoordinates">Coordinates: {{x}} - {{y}}
            <span v-on:mousemove="dead">Dead spot</span>
        </div>
        <input type="text" v-on:keyup.enter="alert">
        <div>
            <input type="text" v-model="fullName.name"><br>
            {{fullName.name}}<br>
            <input type="text" v-model="fullName.surname"><br>
            {{fullName.surname}}
        </div>
        <hr>
        <div>
            <button v-on:click="counter++">inc</button>
            <button v-on:click="counter--">dec</button>
            <button v-on:click="secondCounter++">dec</button>
            {{counter}}|{{secondCounter}}
            <p>{{result()}}|{{output}}</p>
        </div>
        <div>
            <div class="demo" @click="attachedRed = !attachedRed"></div>
            <div class="demo" :class="divClass"></div>
            <div class="demo" :class="color"></div>
            <input type="text" v-model="color">
        </div>
        <hr>
        <div>
            <p v-if="show">You can see this message</p>
            <p v-else>Now you can see this message</p>
            <button @click="show = !show">click</button>
        </div>
        <div>
            <ul>
                <li v-for="(el, i) in ingredients" :key="`${el}-${i}`">{{el}}</li>
            </ul>
        </div>
        <hr>
        <div>
            <ul>
                <li v-for="el in persons" :key="el.id">
                    {{el.id}}. {{el.name}} age: {{el.age}}
                </li>
            </ul>
        </div>
        <hr>
        <div>
            <ul>
                <li v-for="(el, i) in persons" :key="i">
                    <div v-for="(value, key, index) in el" :key="index">
                        {{key}}: {{value}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'App',
    data() {
      return {
        message: 'Hello World',
        counter: 0,
        secondCounter: 0,
        x: 0,
        y: 0,
        fullName: {
          name: 'Yuliya',
          surname: 'Priymak'
        },
        attachedRed: false,
        color: 'green',
        show: true,
        ingredients: ['meat', 'fruits', 'apple'],
        persons: [
          {name: 'yulya', age: 33, id: 1},
          {name: 'vera', age: 2, id: 2},

        ]
      }
    },
    computed: {
      output() {
        console.log('output');
        return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5'
      },
      divClass() {
        return {
          red: this.attachedRed,
          blue: !this.attachedRed
        }
      }
    },
    methods: {
      inc() {
        this.counter++
      },
      updateCoordinates(event) {
        this.x = event.clientX;
        this.y = event.clientY;
      },
      dead(event) {
        event.stopPropagation();
      },
      alert() {
        alert('alert!!!')
      },
      result() {
        console.log('result');
        return this.counter > 5 ? 'Greater then 5' : 'Smaller then 5'
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

    .demo {
        display: inline-block;
        width: 100px;
        height: 100px;
        background-color: #000;
        margin: 10px;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }

    .blue {
        background-color: blue;
    }
</style>
