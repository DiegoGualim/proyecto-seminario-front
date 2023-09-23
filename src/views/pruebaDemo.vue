<template>
    <div class="content">
        <Nav />
        <div align="center">
            <img alt="" src="../assets/FUNDACIONAPA-SIN.png" width="200px" height="200px" />
        </div>

        <h4>
            FUNDACIÓN DOCTOR ALFONSO PONCE ARCHILA
            <br />
            San Cristóbal, Alta Verapaz
            <a
                href="https://www.facebook.com/profile.php?id=100068380068173"
                target="_blank"
                rel="noopener"
                >Mas información</a
            >.
        </h4>
        <h4>MISIÓN</h4>
        <ul>
            <li>
                <center>
                    <I>
                        <p>
                            Mejorar la calidad de vida de las personas no importando el estatus
                            social,
                            <br />
                            mediante atención medica profesional y confiable<br />
                        </p>
                    </I>
                </center>
            </li>
        </ul>
        <h4>VISIÓN</h4>
        <ul>
            <li>
                <center>
                    <I>
                        <p>
                            Ser una Fundación moderna, segura, accesible para todos los
                            Guatemaltecos <br />
                            Brindando a nuestros pacientes la mejor cobertura en salud<br />
                            con clidad y compromiso humando garantizado.
                        </p>
                    </I>
                </center>
            </li>
        </ul>
        <h4>
            <I>
                “Las cosas más bellas y mejores en el mundo, no pueden verse ni tocarse pero se
                sienten en el corazón”
            </I>
        </h4>
        <ul>
            <li>
                <a href="https://es.wikipedia.org/wiki/Helen_Keller" target="_blank" rel="noopener"
                    >(Hellen Keller)</a
                >
            </li>
        </ul>
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2764415836546!2d-90.49363152391192!3d15.361507757993326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x858a377141f51d11%3A0xdabb0005a90566e4!2sHospital%20Oftalmol%C3%B3gico%2C%20Fundaci%C3%B3n%20Dr.%20Alfonso%20Ponce%20Archila!5e0!3m2!1ses-419!2sgt!4v1695437929218!5m2!1ses-419!2sgt"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <br />
        <br />
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'EditFactura',
    components: {
        Nav,
        Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
