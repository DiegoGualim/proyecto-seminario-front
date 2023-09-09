<template>
    <div class="content">
        <Nav />
        <div class="m-3">
            <div>
                <b-card-group deck>
                    <b-card title="Abecedario" style="max-width: 40rem;">
                        <iframe
                            src="https://giphy.com/embed/bCkaQ8tykPWQklcmC0"
                            width="320"
                            height="480"
                            frameBorder="0"
                            class="giphy-embed"
                            allowFullScreen
                        ></iframe>

                        <b-card-text>
                            <b />
                            <br />
                        </b-card-text>
                        <b-button href="/InfoVideoAbcdarioDemo" variant="primary"
                            >Estudiar</b-button
                        >
                        <template #footer>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </template>
                    </b-card>

                    <b-card title="Colores" style="max-width: 40rem;">
                        <iframe
                            src="https://giphy.com/embed/3oEdv5SY4LBHUBe2o8"
                            width="320"
                            height="480"
                            frameBorder="0"
                            class="giphy-embed"
                            allowFullScreen
                        ></iframe>
                        <b-card-text>
                            <br />
                        </b-card-text>
                        <b-button href="/VideoColoresDemo" variant="primary">Estudiar</b-button>
                        <template #footer>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </template>
                    </b-card>
                    <!--
                    <b-card title="Numeros" style="max-width: 40rem;">
                        <iframe
                            src="https://giphy.com/embed/JdFEeta1hLNnO"
                            width="320"
                            height="480"
                            frameBorder="0"
                            class="giphy-embed"
                            allowFullScreen
                        ></iframe>

                        <b-card-text>
                            <br />
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </b-card-text>
                        <b-button href="/infonumeros" variant="primary">Estudiar</b-button>
                        <template #footer>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </template>
                    </b-card> */ -->
                    <b-card title="Pronombres personales" style="max-width: 40rem;">
                        <iframe
                            src="https://giphy.com/embed/y4PQTcLTYJwOI"
                            width="320"
                            height="480"
                            frameBorder="0"
                            class="giphy-embed"
                            allowFullScreen
                        ></iframe>
                        <b-card-text>
                            <br />
                        </b-card-text>
                        <b-button href="/VideoPronombresDemo" variant="primary">Estudiar</b-button>
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
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'InfoVideo',
    components: {
        Nav,
        Footer
    }
}
</script>
