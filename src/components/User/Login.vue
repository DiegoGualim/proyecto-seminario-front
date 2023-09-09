<template>
    <div>
        <b-form
            @submit="onSubmit"
            @reset="onReset"
            class="mr-sm-0 ml-sm-0 mr-lg-5 ml-lg-5 mr-md-3 ml-md-2 mr-xl-5 ml-xl-5 "
            v-if="show"
        >
            <b-img width="300" height="300" :src="require('@/assets/logo_umg.jpeg')"></b-img>
            <b-form-group
                id="input-group"
                label="Ingrese su usuario o correo electrónico"
                label-for="user"
                class="text-left"
            >
                <b-form-input id="user" v-model="form.username" placeholder="" required></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Ingrese su contraseña"
                label-for="password"
                class="text-left"
            >
                <b-form-input
                    id="password"
                    v-model="form.password"
                    placeholder=""
                    type="password"
                    required
                ></b-form-input>
            </b-form-group>
            <b-button class="mt-3" type="submit" variant="primary bg-success"
                >Iniciar Sesión</b-button
            >
        </b-form>
      <!-- <HR WIDTH="300" SIZE="6" COLOR="red"></HR>
        <b-button href="/demo" variant="primary">Demo Estudiar</b-button>-->
        <!--<b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>-->
    </div>
</template>

<script>
import { requestHandler } from '@/helpers/requestHandler'
import { requestOptions } from '@/helpers/requestOptions'

export default {
    name: 'Form',
    data() {
        return {
            form: {
                p_usuario: '',
                p_password: ''
            },
            show: true
        }
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault()
            console.log(this.form)
            const login = await requestHandler.async_fetch(
                `${process.env.VUE_APP_BACKEND}/api/v1/user/login`,
                requestOptions.post(this.form)
            )
            console.log(login.data[0].type)
            console.log(localStorage)
            if (login.data != undefined) {
                localStorage.type = login.data[0].type
                this.$router.push({ name: 'Home' })
            }
            console.log(localStorage)
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.user = ''
            this.form.password = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>
<style scoped>
img {
    max-width: 100%;
}
</style>
