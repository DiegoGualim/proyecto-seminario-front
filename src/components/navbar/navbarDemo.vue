<template>
    <div style="margin-bottom: 5rem">
        <b-navbar toggleable="lg" type="dark" variant="success" id="navbar">
            <b-navbar-brand href="/"
                ><img
                    src="../../assets/logo_umg.jpeg"
                    class="d-inline-block align-top resize"
                    alt=""
                />Proyecto Seminario</b-navbar-brand
            >

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-if="type === 'admin'">
                    <b-nav-item><router-link to="/infoimg">Imagenes</router-link></b-nav-item>
                    <b-nav-item><router-link to="/infovideo">Videos</router-link></b-nav-item>
                    <b-nav-item-dropdown text="Evaluaciones">
                        <b-dropdown-item
                            ><router-link class="dropdown-item" to="/pruebanivel1"
                                >Evaluacion 1</router-link
                            ></b-dropdown-item
                        >
                        <b-dropdown-item
                            ><router-link class="dropdown-item" to="/pruebanivel2"
                                >Evaluacion 2</router-link
                            ></b-dropdown-item
                        >
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown text="Informes">
                        <!-- Using 'button-content' slot -->
                        <b-dropdown-item
                            ><router-link class="dropdown-item" to="/resultadosalumnos"
                                >Informe Resultado Alumnos</router-link
                            ></b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Admin">
                        <b-dropdown-item
                            ><router-link class="dropdown-item" to="/user"
                                >User</router-link
                            ></b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <b-navbar-nav v-else-if="type === 'user'">
                    <b-nav-item><router-link to="/infoimg">Imagenes</router-link></b-nav-item>
                    <b-nav-item><router-link to="/infovideo">Videos</router-link></b-nav-item>
                    <b-nav-item><router-link to="/Traductor">Traductor</router-link></b-nav-item>
                    <b-nav-item
                        ><router-link to="/PracticaenVivoDemo"
                            >Practica en Vivo</router-link
                        ></b-nav-item
                    >
                    <b-nav-item-dropdown text="Evaluaciones">
                        <b-dropdown-item
                            ><router-link class="dropdown-item" to="/pruebanivel1"
                                >Evaluacion 1</router-link
                            ></b-dropdown-item
                        >
                        <b-dropdown-item
                            ><router-link class="dropdown-item" to="/pruebanivel2"
                                >Evaluacion 2</router-link
                            ></b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <!-- demooo -->
                <b-navbar-nav>
                    <b-nav-item
                        ><router-link to="/disponibilidadDoc"
                            >Informacion Doc</router-link
                        ></b-nav-item
                    >
                    <b-nav-item-dropdown text="Productos">
                        <b-dropdown-item
                            ><router-link class="dropdown-item" to="/Medicamentos"
                                >Medicamentos</router-link
                            ></b-dropdown-item
                        >
                        <b-dropdown-item
                            ><router-link class="dropdown-item" to="/pdfProductos"
                                >Lentes</router-link
                            ></b-dropdown-item
                        >
                    </b-nav-item-dropdown>
                    <b-nav-item
                        ><router-link to="/graficasExternas">Graficas</router-link></b-nav-item
                    >
                    <b-nav-item
                        ><router-link to="/serviciosMedicos"
                            >Servicios Medicos</router-link
                        ></b-nav-item
                    >
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <span class="material-icons"> person </span>
                        </template>
                        <b-dropdown-item @click="signOut()">Regresar Login</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'Nav',
    data() {
        return {
            type: localStorage.type
        }
    },
    methods: {
        signOut() {
            localStorage.type = undefined
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>
