<template>
    <div class="content">
        <Nav />
        <div class="m-3">
            <div>
                <b-card-group deck>
                    <b-card title="Abecedario" style="max-width: 40rem;">
                        <img
                            src="../assets/abecedario.jpeg"
                            class="card-img card-img-top img-fluid"
                        />
                        <b-card-text> </b-card-text>
                        <b-button href="/InfoAbecedarioDemo" variant="primary">Estudiar</b-button>
                        <template #footer>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </template>
                    </b-card>

                    <b-card title="Colores" style="max-width: 40rem;">
                        <img src="../assets/colores3.jpg" class="card-img card-img-top img-fluid" />
                        <b-card-text>
                            <br />
                        </b-card-text>
                        <b-button href="/InfoColoresDemo" variant="primary">Estudiar</b-button>
                        <template #footer>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </template>
                    </b-card>

                    <b-card title="Numeros" style="max-width: 40rem;">
                        <img src="../assets/numero2.jpg" class="card-img card-img-top img-fluid" />
                        <b-card-text>
                            <br />
                        </b-card-text>
                        <b-button href="/InfoNumerosDemo" variant="primary">Estudiar</b-button>
                        <template #footer>
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </template>
                    </b-card>
                    <b-card title="Pronombres personales" style="max-width: 40rem;">
                        <img
                            src="../assets/pronombres.jpg"
                            class="card-img card-img-top img-fluid"
                        />
                        <b-card-text>
                            <br />
                        </b-card-text>
                        <b-button href="/InfoPronombresDemo" variant="primary">Estudiar</b-button>
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
    name: 'InfoImagenes',
    components: {
        Nav,
        Footer
    }
}
</script>
