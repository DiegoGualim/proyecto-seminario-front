<template>
    <div class="m-3">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <p>.........................Nombre....................</p>
            <b-form-group
                id="input-group-1"
                label-align="left"
                label-align-sm="left"
                label-align-lg="left"
                label-align-md="left"
                label-align-xl="left"
                label="Ingrese su Nombre"
                label-for="input-1"
            >
                <b-form-input id="input-1" v-model="respuestas.usuario" placeholder="" required></b-form-input>
            </b-form-group>
            <p>.........................pregunta 1.................................</p>
            <div>
                <video src="../../assets/videos_ex/A_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_1"
                :options="optionsQ1"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................pregunta 2.................................</p>
            <div>
                <video src="../../assets/videos_ex/AMARILLO_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_2"
                :options="optionsQ2"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................pregunta 3.................................</p>
            <div>
                <video src="../../assets/videos_ex/AZUL_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_3"
                :options="optionsQ3"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................pregunta 4..................................</p>
            <div>
                <video src="../../assets/videos_ex/C_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_4"
                :options="optionsQ4"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................pregunta 5..................................</p>
            <div>
                <video src="../../assets/videos_ex/EL_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_5"
                :options="optionsQ5"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................pregunta 6..................................</p>
            <div>
                <video src="../../assets/videos_ex/ELLA_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_6"
                :options="optionsQ6"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................pregunta 7..................................</p>
            <div>
                <video src="../../assets/videos_ex/F_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_7"
                :options="optionsQ7"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................pregunta 8..................................</p>
            <div>
                <video src="../../assets/videos_ex/G_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_8"
                :options="optionsQ8"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................pregunta 9..................................</p>
            <div>
                <video src="../../assets/videos_ex/ROJO_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_9"
                :options="optionsQ9"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................pregunta 10..................................</p>
            <div>
                <video src="../../assets/videos_ex/V_EX.mp4" controls width="300" height="300"></video>
            </div>
            <br />
            <b-form-radio-group
                v-model="respuestas.pregunta_10"
                :options="optionsQ10"
                class="mb-3"
                value-field="item"
                text-field="name"
                disabled-field="notEnabled"
            ></b-form-radio-group>
            <p>.........................................................................</p>
            <div class="mt-3">
                <b-button type="submit" variant="primary bg-success" class="mt-4" style="min-width: 14rem"
                    >Guardar Respuestas</b-button
                >
            </div>
        </b-form>
    </div>
</template>

<script>
import { requestHandler } from '@/helpers/requestHandler';
import { requestOptions } from '@/helpers/requestOptions';
import EventBus from '@/bus';

export default {
    name: 'PruebaLevel1',
    data() {
        return {
            respuestas: {
                usuario: '',
                pregunta_1: '',
                pregunta_2: '',
                pregunta_3: '',
                pregunta_4: '',
                pregunta_5: '',
                pregunta_6: '',
                pregunta_7: '',
                pregunta_8: '',
                pregunta_9: '',
                pregunta_10: '',
                nivel_prueba: 'Nivel_2',
            },
            selectedQ1: '',
            optionsQ1: [
                { item: 'A', name: ' A' },
                { item: 'B', name: ' B' },
                { item: 'D', name: ' D' },
            ],
            selectedQ2: '',
            optionsQ2: [
                { item: 'AMARILLO', name: ' AMARILLO' },
                { item: 'ROJO', name: ' ROJO' },
                { item: 'VERDE', name: ' VERDE' },
            ],
            selectedQ3: '',
            optionsQ3: [
                { item: 'NEGRO', name: ' H' },
                { item: 'BLANCO', name: ' J' },
                { item: 'AZUL', name: ' G' },
            ],
            selectedQ4: '',
            optionsQ4: [
                { item: 'H', name: ' H' },
                { item: 'C', name: ' C' },
                { item: 'G', name: ' G' },
            ],
            selectedQ5: '',
            optionsQ5: [
                { item: 'EL', name: ' EL' },
                { item: 'ELLA', name: ' ELLA' },
                { item: 'NOSOTROS', name: ' NOSTROS' },
            ],
            selectedQ6: '',
            optionsQ6: [
                { item: 'TÚ', name: ' TÚ' },
                { item: 'ELLA', name: ' ELLA' },
                { item: 'USTEDES', name: ' USTEDES' },
            ],
            selectedQ7: '',
            optionsQ7: [
                { item: 'R', name: ' R' },
                { item: 'F', name: ' F' },
                { item: 'G', name: ' G' },
            ],
            selectedQ8: '',
            optionsQ8: [
                { item: 'G', name: ' G' },
                { item: 'H', name: ' H' },
                { item: 'I', name: ' I' },
            ],
            selectedQ9: '',
            optionsQ9: [
                { item: 'AMARILLO', name: ' AMARILLO' },
                { item: 'ROJO', name: ' ROJO' },
                { item: 'AZUL', name: ' AZUL' },
            ],
            selectedQ10: '',
            optionsQ10: [
                { item: 'W', name: ' W' },
                { item: 'J', name: ' J' },
                { item: 'V', name: ' V' },
            ],
            show: true,
        };
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault();
            this.buttonDisabled = true;
            console.log(this.respuestas);
            const sendResult = await requestHandler
                .async_fetch(
                    `${process.env.VUE_APP_BACKEND}/api/v1/evaluacion/respuestas`,
                    requestOptions.post(this.respuestas)
                )
                .then(() => {
                    this.showToast();
                });
            console.log(sendResult);
            EventBus.$emit('updateUserTable');
            this.buttonDisabled = false;
            (this.respuestas.usuario = ''),
                (this.respuestas.pregunta_1 = null),
                (this.respuestas.pregunta_2 = ''),
                (this.respuestas.pregunta_3 = ''),
                (this.respuestas.pregunta_4 = ''),
                (this.respuestas.pregunta_5 = ''),
                (this.respuestas.pregunta_6 = ''),
                (this.respuestas.pregunta_7 = ''),
                (this.respuestas.pregunta_8 = ''),
                (this.respuestas.pregunta_9 = ''),
                (this.respuestas.pregunta_10 = ''),
                // Trick to reset/clear native browser form validation state
                (this.show = false);
            this.$nextTick(() => {
                this.show = true;
            });
            // Trick to reset/clear nati
        },
        onReset(event) {
            event.preventDefault();
            (this.respuestas.usuario = ''),
                (this.respuestas.pregunta_1 = null),
                (this.respuestas.pregunta_2 = ''),
                (this.respuestas.pregunta_3 = ''),
                (this.respuestas.pregunta_4 = ''),
                (this.respuestas.pregunta_5 = ''),
                (this.respuestas.pregunta_6 = ''),
                (this.respuestas.pregunta_7 = ''),
                (this.respuestas.pregunta_8 = ''),
                (this.respuestas.pregunta_9 = ''),
                (this.respuestas.pregunta_10 = ''),
                (this.show = false);
            this.$nextTick(() => {
                this.show = true;
            });
        },
        showToast() {
            const h = this.$createElement;
            const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [h('strong', 'Respuestas Exitosa')]);
            this.$bvToast.toast([vNodesMsg], {
                solid: true,
                variant: 'info',
                toaster: 'b-toaster-top-right',
                noCloseButton: true,
            });
        },
    },
};
</script>
