<template>
    <div class="content">
        <Nav />
        <div class="maincontent">
            <h3>Usuarios</h3>
            <b-container class="containermain mt-4">
                <FormUSer />
            </b-container>
            <b-container class="containermain mt-4">
                <TableUser />
            </b-container>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import FormUSer from '@/components/User/Form.vue'
import TableUser from '@/components/User/Table.vue'
import Nav from '@/components/navbar/navbar.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    name: 'User',
    components: {
        FormUSer,
        TableUser,
        Nav,
        Footer
    }
}
</script>
