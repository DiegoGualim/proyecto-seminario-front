<template>
    <div class="content">
        <Nav />
        <div align="center">
            <img alt="" src="../assets/logoedecri-sinfondo.png" width="200px" height="200px" />
        </div>

        <h4>
            Escuela De Educación Especial Y Centro De Rehabilitación Integral Edecri
            <br />
            Coban Alta Verapaz
            <a href="https://www.facebook.com/edecri" target="_blank" rel="noopener"
                >Mas información</a
            >.
        </h4>
        <h4>MISIÓN</h4>
        <ul>
            <li>
                <center>
                    <I>
                        <p>
                            Construir oportunidades y condiciones paque los niños y jovenes con
                            discapacidad de nuestra <br />
                            de nuestra comunidad reciban la atencion que requieren para aprender y
                            desarrollar sus habilidades <br />
                            para una integracion familiar, educativa, productiva y social a la
                            comunidad en un marco de derechos.
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
                            Construir oportunidades y condiciones paque los niños y jovenes con
                            discapacidad de nuestra <br />
                            de nuestra comunidad reciban la atencion que requieren para aprender y
                            desarrollar sus habilidades <br />
                            para una integracion familiar, educativa, productiva y social a la
                            comunidad en un marco de derechos.
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
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'PruebaDemo',
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
