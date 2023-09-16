<template>
    <div class="content">
        <Nav />
        <div class="m-3">
            <b-card-group deck>
                <b-card title="Doc. Rodrigo Chavelo" style="max-width: 40rem;">
                    <img
                        src="../assets/imgDoctores/DOC1.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>

                <b-card title="Doc. Otto Castañeda" style="max-width: 40rem;">
                    <img
                        src="../assets/imgDoctores/DOC2.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>

                <b-card title="Doc. Juan Luis Guerra" style="max-width: 40rem;">
                    <img
                        src="../assets/imgDoctores/DOC3.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                <b-card title="Dr. Carlos Morales" style="max-width: 40rem;">
                    <img
                        src="../assets/imgDoctores/doc4.webp"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
                    </b-card-text>
                    <template #footer>
                        <small class="text-muted">---------------------------------------</small>
                    </template>
                </b-card>
                <b-card title="Dr. Edison Ponce" style="max-width: 40rem;">
                    <img
                        src="../assets/imgDoctores/DOC87.jpeg"
                        class="card-img card-img-top img-fluid"
                    />
                    <b-card-text>
                        Horarios de atencion: Lunes a Viernes de 8:00am a 5:00pm <br />
                        Sabados de 8:00am a 12:30pm
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
