<template>
    <div>

        <div class="buttons" v-if="!Session.user">
            <a class="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a class="button is-light" @click="login">
                Log in
            </a>
        </div>
        <div v-else>
            Hello Jared Finn
            (<a @click="logout">
                logout
            </a>)
        </div>

    </div>
</template>

<script>
import Session from "../models/Session";

export default {
    data() {
        return {
            Session
        }
    },
    methods: {
        login() {
            this.Session.user = { name: "Jared" }
        },
        logout() {
             this.Session.user = null
        }
    }
}
</script>

<style>

</style>