<template>
    <div class="content">
        <Nav />
        <div class="contenedorPadre">
            <div class="contenedorHijo">
                <b-card-group deck>
                    <b-card title="Practica en Vivo" style="max-width: 40rem;">
                        <iframe
                            src="https://giphy.com/embed/hvLwZ5wmarjnNKEJqq"
                            width="320"
                            height="480"
                            frameBorder="0"
                            class="giphy-embed"
                            allowFullScreen
                        ></iframe>

                        <b-card-text>
                            <b />
                            <br />
                            <h5>
                                “Sé que has oído mil veces antes. Pero es cierto, el trabajo duro
                                tiene su recompensa. Si quieres ser bueno, tienes que practicar,
                                practicar y practicar. Si no amas algo, entonces no lo hagas.”
                            </h5>
                        </b-card-text>
                        <!-- <b-button href="/videoabcdario" variant="primary">Estudiar</b-button> -->
                        <a href="http://127.0.0.1:5000/" target="_blank">Practicar</a>
                        <template #footer>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </template>
                    </b-card>
                </b-card-group>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from '@/components/navbar/navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'PracticaenVivo',
    components: {
        Nav,
        Footer
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenedorPadre {
    display: flex;
    justify-content: center;
}
.contenedorHijo {
    align-self: center;
}
a:link,
a:visited {
    background-color: #f44336;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
}

a:hover,
a:active {
    background-color: red;
}
</style>
