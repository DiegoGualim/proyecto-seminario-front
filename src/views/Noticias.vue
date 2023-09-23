<template>
    <div class="content">
        <Nav />
        <div class="m-3">
            <br />
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'DisponibilidadDoc',
    components: {
        Nav,
        Footer
    }
}
</script>
