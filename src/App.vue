<template>
    <div id="app">
        <div class="container">
            <mixins/>
            <form>
                <div class="row">
                    <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
<!--                        <h1 :class="isClicked? 'red' : 'green'">Form</h1>-->
                        <h1 ref="title">Form</h1>
                        <h2 v-highlight="'blue'">Header</h2>
                        <h3>{{header | toLowercase}}</h3>
                        <hr>
                        <div class="form-group">
                            <label for="email">Mail</label>
                            <input
                                    type="text"
                                    id="email"
                                    class="form-control"
                                    v-model="submitData.email"
                            >
                        </div>
                        <div class="form-group">
                            <label for="password">password</label>
                            <input
                                    type="password"
                                    id="password"
                                    class="form-control"
                                    v-model="submitData.password"
                            >
                        </div>
                        <div class="form-group">
                            <label for="age">age</label>
                            <input
                                    type="number"
                                    id="age"
                                    class="form-control"
                                    v-model="submitData.age"
                            >
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <label for="message"></label>
                        <textarea
                                style="white-space: pre-line"
                                id="message"
                                rows="5"
                                class="form-control"
                                v-model="submitData.message"
                        >
                </textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="form-group">
                            <label for="sendmail">
                                <input
                                        type="checkbox"
                                        id="sendmail"
                                        value="SendMail"
                                        v-model="submitData.sendMail"
                                >Send Mail
                            </label>
                            <label for="sendInfomail">
                                <input
                                        type="checkbox"
                                        id="sendInfomail"
                                        value="SendInfoMail"
                                        v-model="submitData.sendMail"
                                >Send Infomail
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <label for="male">
                            <input
                                    type="radio"
                                    id="male"
                                    value="Male"
                                    v-model="submitData.gender"
                            >Male
                        </label>
                        <label for="female">
                            <input type="radio"
                                   id="female"
                                   value="Female"
                                   v-model="submitData.gender"
                            >Female
                        </label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-md-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <label for="priority">Priority</label>
                        <select
                                id="priority"
                                class="form-control"
                                v-model="submitData.selectedPriority"
                        >
                            <option
                                    v-for="el in properties"
                                    :key="el"
                            >
                                {{el}}
                            </option>
                        </select>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div>
                        <button
                                class="btn btn-primary"
                                @click.prevent="submitForm"
                        >Submit
                        </button>
                    </div>
                </div>
            </form>
            <hr>
            <div class="row">
                <div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your data</h4>
                        </div>
                        <div class="panel-body">
                            <p>mail: {{submitData.email}}</p>
                            <p>password: {{submitData.password}}</p>
                            <p>age: {{submitData.age}}</p>
                            <p style="white-space: pre-line">message: {{submitData.message}}</p>
                            <p><strong>Send email? {{submitData.sendMail}}</strong></p>
                            <ul>
                                <li></li>
                            </ul>
                            <p>gender: {{submitData.gender}}</p>
                            <p>priority: {{submitData.selectedPriority}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


  import Mixins from "@/components/mixins";
  export default {
    name: 'App',
    components: {Mixins},
    data() {
      return {
        header: 'HEADERRRRRR!!!!!',
        submitData: {
          email: '',
          password: '',
          age: 0,
          message: '',
          sendMail: [],
          gender: '',
          selectedPriority: 'small',
        },
        properties: ['small', 'medium', 'high'],
        isClicked: false,
      }
    },
    computed: {},
    methods: {
      submitForm() {
        // this.isClicked = !this.isClicked;
        this.$refs.title.style.backgroundColor='blue'
        console.log(this.submitData);

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
