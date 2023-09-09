<template>
    <div class="content">
        <Nav />
        <div class="maincontent">
            <h3><I> Prueba Nivel 1 - Extermal Users </I></h3>
            <b-container class="containermain mt-4">
                <FormPrueba />
            </b-container>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import FormPrueba from '@/components/Pruebas/FormPrueba1ExternalUser.vue'
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'PruebaLevel1',
    components: {
        FormPrueba,
        Nav,
        Footer
    }
}
</script>
