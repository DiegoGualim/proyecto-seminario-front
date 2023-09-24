<template>
    <div class="content">
        <Nav />
        <div class="mx-auto mt-3 maincontent" style="width: 70%">
            <h3>Servicios Medicos</h3>
            <b-container class="containermain mt-4" style="background-color:rgb(230, 224, 186);">
                <!--   <FormCita /> -->
                <carousel-3d style="background-color:rgb(230, 224, 186);" height="550px">
                    <slide :index="0">
                        <p style="text-align:center"><b>Cirugía Refractiva</b></p>
                        <img
                            src="../assets/imgServicios/SERV1.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                        <p style="text-align:center">
                            La cirugía refractiva es un método para corregir o mejorar su visión. El
                            tipo de cirugía refractiva más comúnmente realizado es el procedimiento
                            LASIK (del inglés Laser-Assisted in Situ Keratomileusis), la cuál
                            utiliza un rayo láser para moldear la córnea.
                        </p>
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
                        <p style="text-align:center">
                            La cirugía de cataratas es un procedimiento para extraer el cristalino
                            del ojo y, en la mayoría de los casos, reemplazarlo con una lente
                            artificial.
                        </p>
                    </slide>
                    <slide :index="2">
                        <p style="text-align:center"><b>Glaucoma</b></p>
                        <img
                            src="../assets/imgServicios/SERV3.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                        <p style="text-align:center">
                            El glaucoma es un grupo de enfermedades de los ojos que pueden causar
                            pérdida de visión y ceguera al dañar el nervio ubicado en la parte de
                            atrás del ojo, conocido como nervio óptico.
                        </p>
                    </slide>
                    <slide :index="3">
                        <p style="text-align:center"><b>Evisceración Ocular</b></p>
                        <br />
                        <br />
                        <img
                            src="../assets/imgServicios/SERV4.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                        <p style="text-align:center">
                            tratamiento? La evisceración ocular es una técnica quirúrgica que
                            consiste en vaciar el contenido del globo ocular, se extrae parte del
                            globo (córnea, iris y retina) pero se mantiene la esclerótica (que es la
                            capa blanca más externa del ojo) y los músculos que realizan los
                            movimientos oculares, sería parecido a si conserváramos la cáscara del
                            huevo y solo quitáramos la clara y la yema del mismo.
                        </p>
                    </slide>
                    <slide :index="4">
                        <p style="text-align:center"><b>Pterigión</b></p>
                        <br />
                        <br />
                        <img
                            src="../assets/imgServicios/SERV5.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                        <p style="text-align:center">
                            El pterigion es un crecimiento anormal del color rojo y blanquinoso de
                            la conjuntiva, que invade la córnea, de manera más habitual en el lado
                            más cercano a la nariz, aunque también puede afectar al lado externo del
                            ojo o a ambos ojos.
                        </p>
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
