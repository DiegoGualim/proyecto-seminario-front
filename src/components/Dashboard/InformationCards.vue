<template>
  <div>
    <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="4" cols-xl="4">
      <b-col>
        <b-card
          img-top
          tag="article"
          class="mb-3 visualizer"
          header="Número de Consultas Hoy:"
        >
          <b-card-text>
            {{ consultations.length || 0 }}
          </b-card-text>
          <template #footer> </template>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          img-top
          tag="article"
          class="mb-3 visualizer"
          header=" Número de Re Consultas Hoy:"
        >
          <b-card-text>
            {{ reconsultations.length || 0 }}
          </b-card-text>
          <template #footer> </template>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          img-top
          tag="article"
          class="mb-3 visualizer"
          header="Número de Consultas Donadas Hoy:"
        >
          <b-card-text>
            {{ donations.length || 0 }}
          </b-card-text>
          <template #footer> </template>
        </b-card>
      </b-col>
      <b-col>
        <b-card
          img-top
          tag="article"
          class="mb-3 visualizer"
          header="Número de Pacientes Nuevos Hoy:"
        >
          <b-card-text>
            {{ patients.length || 0 }}
          </b-card-text>
          <template #footer> </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { requestHandler } from "@/helpers/requestHandler";
import { requestOptions } from "@/helpers/requestOptions";

export default {
  name: "ReConsultaVisualizer",
  data() {
    return {
      consultations: {},
      reconsultations: {},
      donations: {},
      patients: {},
    };
  },
  methods: {
    pullData() {
      this.GetConsultationsToday();
      this.GetPatientsToday();
      this.GetReConsultationsToday();
      this.GetDonatedConsultationsToday();
    },
    async GetConsultationsToday() {
      this.consultations = await requestHandler.async_fetch(
        `${process.env.VUE_APP_BACKEND_DASHBOARD}/api/v1/consultations/consultation/today`,
        requestOptions.get()
      );
    },
    async GetReConsultationsToday() {
      this.reconsultations = await requestHandler.async_fetch(
        `${process.env.VUE_APP_BACKEND_DASHBOARD}/api/v1/consultations/reconsultation/today`,
        requestOptions.get()
      );
    },
    async GetDonatedConsultationsToday() {
      this.donations = await requestHandler.async_fetch(
        `${process.env.VUE_APP_BACKEND_DASHBOARD}/api/v1/consultations/donation/today`,
        requestOptions.get()
      );
    },
    async GetPatientsToday() {
      this.patients = await requestHandler.async_fetch(
        `${process.env.VUE_APP_BACKEND_DASHBOARD}/api/v1/patients/today`,
        requestOptions.get()
      );
    },
  },
  beforeDestroy() {},
  created() {
    this.pullData();
  },
  computed: {},
};
</script>
