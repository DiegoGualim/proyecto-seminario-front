<template>
    <div class="content">
        <Nav />
        <div class="container">
            <div><iframe :src="ruta" class="responsive-iframe"></iframe></div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/navbar/navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'Traductor',
    components: {
        Nav,
        Footer
    },
    data: () => ({
        ruta: 'https://fundacion-php-e25fa6e4de23.herokuapp.com/login.php'
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}

.responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 70%;
}
</style>
