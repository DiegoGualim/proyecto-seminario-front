<template>
  <div id="app"><!--
    <div id="nav">
      <router-link to="/">Re Consulta</router-link> |
      <router-link to="/consulta">Nueva Consulta</router-link> |
      <router-link to="/manager">Entrega de Expedientes</router-link> |
      <router-link to="/datos-consultas">Informe Consultas</router-link> |
      <router-link to="/datos-pacientes">Informe Pacientes</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/cheque">Cheque</router-link> |
      <router-link to="/librodebancos">Libro de Bancos</router-link>|
      <router-link to="/login">Login</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/styles/custom";


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $body-color;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: $body-color;
}

#nav a.router-link-exact-active {
  color: $green;
}
</style>
