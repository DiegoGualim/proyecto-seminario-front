<template>
    <div class="content">
        <Nav />
        <div class="m-3">
            <b-card-group deck>
                <b-card title="LINEA CARDIOVASCULAR" style="max-width: 40rem;">
                    <img
                        src="../assets/medicamentos/med1.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                         PREGUNTA POR EXITENCIAS <br />
                        MEDICAMENTOS SOLO CON RECETA MEDICA
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                <b-card title="LINEA NEURO CIENCIAS" style="max-width: 40rem;">
                    <br/>
                    <br/>
                    <img
                        src="../assets/medicamentos/med2.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        PREGUNTA POR EXITENCIAS <br />
                        MEDICAMENTOS SOLO CON RECETA MEDICA
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                 <b-card title="ANTIBIOTICOS Y ANTIFLAMATORIOS" style="max-width: 40rem;">
                    <br/>
                     <br/>
                    <img
                        src="../assets/medicamentos/med3.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        PREGUNTA POR EXITENCIAS <br />
                        MEDICAMENTOS SOLO CON RECETA MEDICA
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
            </b-card-group>
                        <b-card-group deck>
                <b-card title="NUEROCIENCIAS" style="max-width: 40rem;">
                    <img
                        src="../assets/medicamentos/med4.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        PREGUNTA POR EXITENCIAS <br />
                        MEDICAMENTOS SOLO CON RECETA MEDICA
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                <b-card title="LINEA INFECTO-RESPIRATORIA" style="max-width: 40rem;">
                    <br/>
                    <img
                        src="../assets/medicamentos/med5.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        PREGUNTA POR EXITENCIAS <br />
                        MEDICAMENTOS SOLO CON RECETA MEDICA
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                 <b-card title="LINEA INFECTO-RESPIRATORIA" style="max-width: 40rem;">
                    <br/>
                     <br/>
                    <img
                        src="../assets/medicamentos/med6.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        PREGUNTA POR EXITENCIAS <br />
                        MEDICAMENTOS SOLO CON RECETA MEDICA
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
            </b-card-group>
            <br />
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'DisponibilidadDoc',
    components: {
        Nav,
        Footer
    }
}
</script>
