<template>
    <div class="content">
        <Nav />
        <div class="maincontent">
            <h3><I> Prueba Nivel 2 </I></h3>
            <b-container class="containermain mt-4">
                <FormPrueba />
            </b-container>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import FormPrueba from '@/components/Pruebas/FormPrueba2.vue';
import Nav from '@/components/navbar/navbar.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
    name: 'PruebaLevel2',
    components: {
        FormPrueba,
        Nav,
        Footer,
    },
};
</script>
