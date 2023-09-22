<template>
  <div class="content">
    <Nav />
    <div class="mx-auto mt-3 maincontent">
      <b-container>
        <InformationCards class="mt-5" style="vertical-align: top" />
      </b-container>
      <b-container class="mt-5">
        <ConsultasChart class="mr-5" style="display: inline-block" />
      </b-container>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ConsultasChart from "@/components/Dashboard/ConsultasChart.vue";
import InformationCards from "@/components/Dashboard/InformationCards.vue";
import Nav from '@/components/navbar/navbarDemo.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: "Dashboard",
  components: {
    ConsultasChart,
    InformationCards,
    Nav,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
