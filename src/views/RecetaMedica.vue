<template>
    <div class="content">
        <Nav />
        <div class="mx-auto mt-3 maincontent" style="width: 70%">
            <h3>Receta Medica</h3>
            <b-container class="containermain mt-4">
                <FormCita />
            </b-container>
        </div>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import FormCita from '@/components/Receta/Form.vue'
import Nav from '@/components/navbar/navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'Citas',
    components: {
        FormCita,
        Nav,
        Footer
    }
}
</script>
