<template>
    <div class="content">
        <Nav />
        <div class="mx-auto mt-3 maincontent" style="width: 70%">
            <h3>Servicios Medicos</h3>
            <b-container class="containermain mt-4" style="background-color:rgb(230, 224, 186);">
                <!--   <FormCita /> -->
                <carousel-3d style="background-color:rgb(230, 224, 186);" height="400px">
                    <slide :index="0">
                        <p style="text-align:center"><b>Cirugía Refractiva</b></p>
                        <img
                            src="../assets/imgServicios/SERV1.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                    </slide>
                    <slide :index="1">
                        <p style="text-align:center"><b>Cataratas</b></p>
                        <br />
                        <br />
                        <br />
                        <img
                            src="../assets/imgServicios/SERV2.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                    </slide>
                    <slide :index="2">
                        <p style="text-align:center"><b>Glaucoma</b></p>
                        <img
                            src="../assets/imgServicios/SERV3.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                    </slide>
                    <slide :index="3">
                        <p style="text-align:center"><b>Evisceración Ocular</b></p>
                        <br />
                        <br />
                        <img
                            src="../assets/imgServicios/SERV4.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                    </slide>
                    <slide :index="4">
                        <p style="text-align:center"><b>Pterigión</b></p>
                        <br />
                        <br />
                        <img
                            src="../assets/imgServicios/SERV5.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                    </slide>
                </carousel-3d>
            </b-container>
        </div>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
//import FormCita from '@/components/Citas/Form.vue'
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
    name: 'serviciosMedicos',
    components: {
        // FormCita,
        Nav,
        Footer,
        Carousel3d,
        Slide
    }
}
</script>

<style scoped>
.carousel-3d-slide {
    background-color: rgb(230, 224, 186);
    border-color: rgb(230, 224, 186);
}
</style>
