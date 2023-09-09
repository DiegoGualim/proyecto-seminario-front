<template>
    <div class="content">
        <Nav />
        <div class="maincontent">
            <h3>Tabla de Resultados Questionario 1</h3>
            <b-container class="containermain mt-4">
                <TableUser />
            </b-container>
            <div>
                <br />
                <HR WIDTH="1000" SIZE="6" COLOR="red"></HR>
                <HR WIDTH="1000" SIZE="6" COLOR="red"></HR>
            </div>
            <h3>Tabla de Resultados Questionario 2</h3>
            <b-container class="containermain mt-4">
                <TableUserQ2 />
            </b-container>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import TableUser from '@/components/ResultadosGraficas/TableExternal.vue'
import TableUserQ2 from '@/components/ResultadosGraficas/TableQ2External.vue'
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'ResultadosAlumnos',
    components: {
        TableUser,
        TableUserQ2,
        Nav,
        Footer
    }
}
</script>
