<template>
    <div class="content">
        <Nav />
        <div class="maincontent">
            <h3>Informe de Citas</h3>
           <b-container class="containermain mt-4 mb-5">
                <TableCitas /> 
            </b-container>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import TableCitas from '@/components/Citas/Table.vue';
import Nav from '@/components/navbar/navbar.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
    name: 'RerportFacturacion',
    components: {
        TableCitas,
        Nav,
        Footer,
    },
};
</script>
