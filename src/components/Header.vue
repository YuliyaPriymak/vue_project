<template>
    <div>
        <ul class="nav nav-pills">
            <router-link
                    class="nav-link"
                    active-class="active"
                    style="cursor: pointer"
                    exact
                    to="/"
                    tag="li">Home
            </router-link>
            <router-link
                    class="nav-link"
                    active-class="active"
                    style="cursor: pointer"
                    to="/user"
                    tag="li">User
            </router-link>
<!--            <li class="nav-item">-->
<!--                <router-link class="nav-link" active-class="active" exact to="/">Home</router-link>-->
<!--            </li>-->
<!--            <li class="nav-item">-->
<!--                <router-link class="nav-link" active-class="active" to="/user">User</router-link>-->
<!--            </li>-->
        </ul>
    </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
    .my-active {
        background-color: palevioletred;
    }

</style>
