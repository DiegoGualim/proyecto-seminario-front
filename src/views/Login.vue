<template>
  <div class="login">
    <b-container class="containermain container-main" style="width: 30%">
      <Login />
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/User/Login.vue";

export default {
  name: "Home",
  components: {
    Login,
  },
};
</script>

<style lang="scss" >
.login {
  height: 100vh;
  margin: 0px 0px !important;
  display: flex;
  .container-main {
    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 575.98px) {
      min-width: 90% !important;
    }

    // Small devices (landscape phones, less than 768px)
    @media (max-width: 767.98px) {
      min-width: 80% !important;
    }
    @media (max-width: 991.98px) {
      min-width: 50%;
    }

    align-content: center;
    align-self: center;
    background-color: #fff !important;
  }
}
</style>