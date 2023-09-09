<template>
    <div class="m-3">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-row>
                <b-col
                    ><b-form-group
                        id="input-group-1"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="Nombre"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.nombre"
                            placeholder=""
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
                <b-col
                    ><b-form-group
                        id="input-email"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="Apellido"
                        label-for="input-email"
                    >
                        <b-form-input
                            id="input-2"
                            v-model="form.apellido"
                            placeholder=""
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
                <b-col
                    ><b-form-group
                        id="input-email"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="Edad"
                        label-for="input-email"
                    >
                        <b-form-input
                            id="input-2"
                            v-model="form.edad"
                            placeholder=""
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
            </b-row>
            <b-row>
                <b-col
                    ><b-form-group
                        id="input-group-1"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="Direccion"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.direccion"
                            placeholder=""
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
                <b-col
                    ><b-form-group
                        id="input-group-1"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="Telefono"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.telefono"
                            placeholder=""
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
                <b-col
                    ><b-form-group
                        id="input-email"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="Correo"
                        label-for="input-email"
                    >
                        <b-form-input
                            id="input-2"
                            v-model="form.email"
                            placeholder=""
                            type="email"
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
            </b-row>
            <b-row>
                <b-col
                    ><b-form-group
                        id="input-group-1"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="Usuario"
                        label-for="input-1"
                    >
                        <b-form-input
                            id="input-1"
                            v-model="form.username"
                            placeholder=""
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
                <b-col
                    ><b-form-group
                        id="input-group-3"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="Contraseña"
                        label-for="input-3"
                    >
                        <b-form-input
                            id="input-3"
                            v-model="form.password"
                            placeholder=""
                            type="password"
                            required
                        ></b-form-input> </b-form-group
                ></b-col>
                <b-col
                    ><b-form-group
                        id="input-group-4"
                        label-align="left"
                        label-align-sm="left"
                        label-align-lg="left"
                        label-align-md="left"
                        label-align-xl="left"
                        label="Privilegios"
                        label-for="input-4"
                    >
                        <b-form-select
                            id="input-4"
                            v-model="form.type"
                            :options="options"
                            required
                        ></b-form-select> </b-form-group
                ></b-col>
            </b-row>

            <div class="mt-3">
                <b-button
                    :disabled="buttonDisabled"
                    type="submit"
                    variant="primary bg-success"
                    class="mt-4"
                    style="min-width: 14rem"
                    >Insertar Usuario</b-button
                >
            </div>
        </b-form>
    </div>
</template>

<script>
import { requestHandler } from '@/helpers/requestHandler'
import { requestOptions } from '@/helpers/requestOptions'
import EventBus from '@/bus'

export default {
    name: 'Form',
    data() {
        return {
            form: {
                nombre: '',
                apellido: '',
                edad: '',
                direccion: '',
                telefono: '',
                username: '',
                email: '',
                password: '',
                type: null
            },
            options: [
                { value: null, disabled: true, text: 'Seleccione un tipo de usuario' },
                { value: 'admin', text: 'Administrador' },
                { value: 'user', text: 'Usuario' }
            ],
            show: true,
            buttonDisabled: false
        }
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault()
            this.buttonDisabled = true
            console.log(this.form)
            const reconsultation = await requestHandler
                .async_fetch(
                    `${process.env.VUE_APP_BACKEND}/api/v1/user`,
                    requestOptions.post(this.form)
                )
                .then(() => {
                    this.showToast()
                })
            console.log(reconsultation)
            EventBus.$emit('updateUserTable')
            this.buttonDisabled = false
            ;(this.form.nombre = ''),
                (this.form.apellido = ''),
                (this.form.edad = ''),
                (this.form.direccion = ''),
                (this.form.telefono = ''),
                (this.form.username = ''),
                (this.form.email = ''),
                (this.form.password = ''),
                (this.form.type = null),
                // Trick to reset/clear native browser form validation state
                (this.show = false)
            this.$nextTick(() => {
                this.show = true
            })
            //this.$router.push({name:"user"});
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            ;(this.form.nombre = ''),
                (this.form.apellido = ''),
                (this.form.edad = ''),
                (this.form.direccion = ''),
                (this.form.telefono = ''),
                (this.form.username = ''),
                (this.form.email = ''),
                (this.form.password = ''),
                (this.form.type = null),
                // Trick to reset/clear native browser form validation state
                (this.show = false)
            this.$nextTick(() => {
                this.show = true
            })
        },
        showToast() {
            // Use a shorter name for this.$createElement
            const h = this.$createElement
            // Increment the toast count
            // Create the message
            const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
                h('strong', 'Usuario Registrado con Éxito')
            ])
            // Pass the VNodes as an array for message and title
            this.$bvToast.toast([vNodesMsg], {
                solid: true,
                variant: 'info',
                toaster: 'b-toaster-top-right',
                noCloseButton: true
            })
        }
    }
}
/**
 * style="background-color:#6E6658; padding:3rem;"
 * https://codepen.io/wfigueiredo/pen/BVmzzy
 */
</script>
