<template>
    <div id="app">
        <div>
            <label>User name</label>
            <input type="text" v-model="user.userName">
        </div>
        <div>
            <label>User email</label>
            <input type="text" v-model="user.email">
        </div>
        <button @click="submitData">post user</button>
        <button @click="getUsers">get users</button>
        <button @click="deleteUser">delete user</button>
        <button @click="updateUser">update user</button>
        <hr>
        <ul>
            <li v-for="(u, i) in users" :key="i">
                {{u}}
            </li>
        </ul>
    </div>
</template>

<script>


  export default {
    name: 'App',

    data() {
      return {
        user: {
          userName: '',
          email: ''
        },
        users: [],
        url: 'https://vueproject-5776f-default-rtdb.firebaseio.com'
      }
    },
    computed: {},
    methods: {
      submitData() {
        this.$http.post(`${this.url}/vueProj.json`, this.user)
        // this.$http.post('vueProj.json', this.user)
          .then(res => {
            console.log(res);
          }, error => {
            console.log(error);
          })
      },

      getUsers() {
        this.$http.get('https://vueproject-5776f-default-rtdb.firebaseio.com/vueProj.json')
          .then((res) => {
            return res.json()
          }).then((res) => {
          console.log(res);
          Object.values(res).forEach(u => this.users.push(u))
        })
      },

      deleteUser() {
        this.$http.delete('https://vueproject-5776f-default-rtdb.firebaseio.com/vueProj/-MT0u23lv1azaNuo9OwA.json')
          .then((res) => {
            console.log(res, 'delete');
          })
      },

      updateUser() {
        this.$http.put('https://vueproject-5776f-default-rtdb.firebaseio.com/vueProj/-MT0vHBzWsN6O1rMyZk-.json', {
          userName: 'name',
          email: 'email'
        }).then(res => {
          console.log(res);
        })
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

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }


</style>
