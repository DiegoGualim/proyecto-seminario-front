<template>
  <div class="mt-3">
    <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="3" cols-xl="3">
      <b-col>
        <div class="small">
          <line-chart
            v-if="datacollection"
            :chart-data="datacollection"
          ></line-chart>
        </div>
      </b-col>
      <b-col>
        <bar-chart
          v-if="reconsultationsdatacollection"
          :chart-data="reconsultationsdatacollection"
        ></bar-chart>
      </b-col>
      <b-col>
        <bar-chart
          v-if="donationsdatacollection"
          :chart-data="donationsdatacollection"
        ></bar-chart>
      </b-col>
    </b-row>
    <b-row
      class="mt-5"
      cols="1"
      cols-sm="2"
      cols-md="2"
      cols-lg="3"
      cols-xl="3"
    >
      <b-col>
        <line-chart
          v-if="patientsdatacollection"
          :chart-data="patientsdatacollection"
        ></line-chart
      ></b-col>
      <b-col>
        <line-chart
          v-if="dataFullcollection"
          :chart-data="dataFullcollection"
        ></line-chart
      ></b-col>
    </b-row>
    <!-- <b-button class="mt-4" active variant="primary bg-success" @click="update()"
      >Actualizar</b-button
    > -->
  </div>
</template>

<script>
import LineChart from "./LineChart.js";
import BarChart from "./BarChart.js";
import { requestHandler } from "@/helpers/requestHandler";
import { requestOptions } from "@/helpers/requestOptions";

export default {
  components: {
    LineChart,
    BarChart,
  },
  data() {
    return {
      datacollection: null,
      consultations: null,
      consultationsMap: null,
      consultationsMapKey: [],
      consultationsMapValue: [],
      reconsultationsdatacollection: null,
      reconsultations: null,
      reconsultationsMap: null,
      reconsultationsMapKey: [],
      reconsultationsMapValue: [],
      donationsdatacollection: null,
      donations: null,
      donationsMap: null,
      donationsMapKey: [],
      donationsMapValue: [],
      donationsOptions: null,
      patientsdatacollection: null,
      patients: null,
      patientsMap: null,
      patientsMapKey: [],
      patientsMapValue: [],
      dataFullcollection: null,
      patientsFullMapKey: [],
      patientsFullMapValue: [],
      donationsFullMapKey: [],
      donationsFullMapValue: [],
      patientsPrevYMapKey: [],
      patientsPrevYMapValue: [],
      patientsPrev2YMapKey: [],
      patientsPrev2YMapValue: [],
      dataPatientsFullcollection: null,
    };
  },
  async created() {
    await this.update();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [...this.consultationsMapKey],
        datasets: [
          {
            label: "Consultas",
            backgroundColor: "#254E58",
            data: [...this.consultationsMapValue],
            lineTension: 0.1,
          },
        ],
        options: {
          aspectRatio: 5,
        },
      };

      this.reconsultationsdatacollection = {
        labels: [...this.reconsultationsMapKey],
        datasets: [
          {
            label: "Re Consultas",
            backgroundColor: "#257E5F",
            data: [...this.reconsultationsMapValue],
            lineTension: 0.1,
          },
        ],
      };

      this.donationsdatacollection = {
        labels: [...this.donationsMapKey],
        datasets: [
          {
            label: "Donaciones",
            backgroundColor: "#259E9A",
            data: [...this.donationsMapValue],
            lineTension: 0,
          },
        ],
        options: {
          scales: {
            y: {
              min: 0,
              max: 10,
            },
            x: {
              min: 0,
              max: 10,
            },
          },
        },
      };

      this.patientsdatacollection = {
        labels: [...this.patientsMapKey],
        datasets: [
          {
            label: "Pacientes",
            backgroundColor: "#254E58",
            data: [...this.patientsMapValue],
            lineTension: 0.1,
          },
        ],
      };

      this.dataFullcollection = {
        labels: [...this.consultationsMapKey],
        datasets: [
          {
            label: "Don",
            backgroundColor: "#259E9A",
            data: [...this.donationsFullMapValue],
            lineTension: 0,
          },
          {
            label: "Con",
            backgroundColor: "#254E58",
            data: [...this.consultationsMapValue],
            lineTension: 0,
          },
          {
            label: "Recon",
            backgroundColor: "#257E5F",
            data: [...this.patientsFullMapValue],
            lineTension: 0,
          },
        ],
        options: {
          aspectRatio: 5,
        },
      };

      this.dataPatientsFullcollection = {
        labels: [...this.patientsMapKey],
        datasets: [
          {
            label: "Don",
            backgroundColor: "#259E9A",
            data: [...this.patientsMapValue],
            lineTension: 0,
          },
          {
            label: "Con",
            backgroundColor: "#254E58",
            data: [...this.patientsPrevYMapValue],
            lineTension: 0,
          },
          {
            label: "Recon",
            backgroundColor: "#257E5F",
            data: [...this.patientsPrev2YMapValue],
            lineTension: 0,
          },
        ],
        options: {
          aspectRatio: 5,
        },
      };
      /* 
      let rangeDatesMapped = rangeDates.map((e) => {
        let json = new Object();
        json[`${e.toLocaleDateString("en-GB")}`] = 0;
        return json;
      });
      let count = 0;
      arrayData.forEach((e) => {
        rangeDatesMapped.forEach((el) => {
          if (Object.getOwnPropertyNames(el)[0] === e) {
            el[e] = arrayValues[count];
          }
        });
        count++;
      }); */
    },
    async getConsultations() {
      this.consultations = await requestHandler.async_fetch(
        `${process.env.VUE_APP_BACKEND_DASHBOARD}/api/v1/consultations/consultation`,
        requestOptions.get()
      );
      this.reconsultations = await requestHandler.async_fetch(
        `${process.env.VUE_APP_BACKEND_DASHBOARD}/api/v1/consultations/reconsultation`,
        requestOptions.get()
      );
      this.donations = await requestHandler.async_fetch(
        `${process.env.VUE_APP_BACKEND_DASHBOARD}/api/v1/consultations/donation`,
        requestOptions.get()
      );
      this.patients = await requestHandler.async_fetch(
        `${process.env.VUE_APP_BACKEND_DASHBOARD}/api/v1/patients`,
        requestOptions.get()
      );
    },
    mapConsultations() {
      console.log(this.consultations, "CONSULTATIONS");
      console.log(this.reconsultations, "RECONSULTATIONS");
      console.log(this.donations, "DONATIONS");
      this.consultationsMap = this.consultations.reduce(
        (acc, e) => acc.set(e["date"], (acc.get(e["date"]) || 0) + 1),
        new Map()
      );
      this.reconsultationsMap = this.reconsultations.reduce(
        (acc, e) => acc.set(e["date"], (acc.get(e["date"]) || 0) + 1),
        new Map()
      );
      this.donationsMap = this.donations.reduce(
        (acc, e) => acc.set(e["date"], (acc.get(e["date"]) || 0) + 1),
        new Map()
      );
      this.patientsMap = this.patients.reduce(
        (acc, e) =>
          acc.set(
            e["date_created_at"],
            (acc.get(e["date_created_at"]) || 0) + 1
          ),
        new Map()
      );

      console.info([...this.donationsMap.keys()], "aiuda");
      console.info([...this.consultationsMap.values()]);
      console.info([...this.consultationsMap.entries()]);

      Date.prototype.addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };

      function getDates(startDate, stopDate) {
        console.log(startDate, stopDate, "tamo aquii");
        var dateArray = new Array();
        var currentDate = startDate;
        while (currentDate <= stopDate) {
          dateArray.push(new Date(currentDate));
          currentDate = currentDate.addDays(1);
        }
        return dateArray;
      }
      const todays = new Date(Date.now());

      let arrayData = [...this.consultationsMap.keys()];
      let arrayValues = [...this.consultationsMap.values()];
      console.log(
        arrayData,
        arrayValues,
        "test",
        ...this.consultationsMap.values()
      );
      let initDateSplit = arrayData[0].split("/");
      //let endDateSplit = arrayData[arrayData.length - 1].split("/");
      let rangeDates = getDates(
        new Date(initDateSplit[2], initDateSplit[1] - 1, initDateSplit[0] - 5),
        new Date(todays.getFullYear(), todays.getMonth(), todays.getDate())
      );

      let rangeDatesMapped = rangeDates.map((e) => {
        let arraydata = new Array();
        arraydata[0] = e.toLocaleDateString("en-GB");
        arraydata[1] = 0;
        return arraydata;
      });
      let count = 0;
      arrayData.forEach((e) => {
        rangeDatesMapped.forEach((el) => {
          if (el[0] === e) {
            el[1] = arrayValues[count];
          }
        });
        count++;
      });

      this.consultationsMapKey = rangeDatesMapped.map((e) => e[0]);
      this.consultationsMapValue = rangeDatesMapped.map((e) => e[1]);

      if ([...this.donationsMap.keys()].length !== 0) {
        let arrayData2 = [...this.donationsMap.keys()];
        let arrayValues2 = [...this.donationsMap.values()];
        let initDateSplit2 = arrayData2[0].split("/");
        //let endDateSplit2 = arrayData2[arrayData2.length - 1].split("/");
        let rangeDates2 = getDates(
          new Date(
            initDateSplit2[2],
            initDateSplit2[1] - 1,
            initDateSplit2[0] - 5
          ),
          new Date(todays.getFullYear(), todays.getMonth(), todays.getDate())
        );

        let rangeDatesMapped2 = rangeDates2.map((e) => {
          let arraydata2 = new Array();
          arraydata2[0] = e.toLocaleDateString("en-GB");
          arraydata2[1] = 0;
          return arraydata2;
        });
        let count2 = 0;
        arrayData2.forEach((e) => {
          rangeDatesMapped2.forEach((el) => {
            if (el[0] === e) {
              el[1] = arrayValues2[count2];
            }
          });
          count2++;
        });

        this.donationsMapKey = rangeDatesMapped2.map((e) => e[0]);
        this.donationsMapValue = rangeDatesMapped2.map((e) => e[1]);
      }

      //reconsultations

      let arrayData3 = [...this.reconsultationsMap.keys()];
      let arrayValues3 = [...this.reconsultationsMap.values()];
      let initDateSplit3 = arrayData3[0].split("/");
      //let endDateSplit2 = arrayData2[arrayData2.length - 1].split("/");
      let rangeDates3 = getDates(
        new Date(
          initDateSplit3[2],
          initDateSplit3[1] - 1,
          initDateSplit3[0] - 5
        ),
        new Date(todays.getFullYear(), todays.getMonth(), todays.getDate())
      );

      let rangeDatesMapped3 = rangeDates3.map((e) => {
        let arraydata3 = new Array();
        arraydata3[0] = e.toLocaleDateString("en-GB");
        arraydata3[1] = 0;
        return arraydata3;
      });
      let count3 = 0;
      arrayData3.forEach((e) => {
        rangeDatesMapped3.forEach((el) => {
          if (el[0] === e) {
            el[1] = arrayValues3[count3];
          }
        });
        count3++;
      });

      this.reconsultationsMapKey = rangeDatesMapped3.map((e) => e[0]);
      this.reconsultationsMapValue = rangeDatesMapped3.map((e) => e[1]);

      //patients

      let arrayData4 = [...this.patientsMap.keys()];
      let arrayValues4 = [...this.patientsMap.values()];
      let initDateSplit4 = arrayData4[0].split("/");
      //let endDateSplit2 = arrayData2[arrayData2.length - 1].split("/");
      let rangeDates4 = getDates(
        new Date(
          initDateSplit4[2],
          initDateSplit4[1] - 1,
          initDateSplit4[0] - 5
        ),
        new Date(todays.getFullYear(), todays.getMonth(), todays.getDate())
      );

      let rangeDatesMapped4 = rangeDates4.map((e) => {
        let arraydata4 = new Array();
        arraydata4[0] = e.toLocaleDateString("en-GB");
        arraydata4[1] = 0;
        return arraydata4;
      });
      let count4 = 0;
      arrayData4.forEach((e) => {
        rangeDatesMapped4.forEach((el) => {
          if (el[0] === e) {
            el[1] = arrayValues4[count4];
          }
        });
        count4++;
      });

      this.patientsMapKey = rangeDatesMapped4.map((e) => e[0]);
      this.patientsMapValue = rangeDatesMapped4.map((e) => e[1]);

      //all reconsultations

      let arrayData5 = [...this.reconsultationsMap.keys()];
      let arrayValues5 = [...this.reconsultationsMap.values()];
      //let initDateSplit5 = arrayData5[0].split("/");
      //let endDateSplit2 = arrayData2[arrayData2.length - 1].split("/");
      let rangeDates5 = getDates(
        new Date(initDateSplit[2], initDateSplit[1] - 1, initDateSplit[0] - 5),
        new Date(todays.getFullYear(), todays.getMonth(), todays.getDate())
      );

      let rangeDatesMapped5 = rangeDates5.map((e) => {
        let arraydata5 = new Array();
        arraydata5[0] = e.toLocaleDateString("en-GB");
        arraydata5[1] = 0;
        return arraydata5;
      });
      let count5 = 0;
      arrayData5.forEach((e) => {
        rangeDatesMapped5.forEach((el) => {
          if (el[0] === e) {
            el[1] = arrayValues5[count5];
          }
        });
        count5++;
      });
      this.patientsFullMapKey = rangeDatesMapped5.map((e) => e[0]);
      this.patientsFullMapValue = rangeDatesMapped5.map((e) => e[1]);

      //all donations

      let arrayData6 = [...this.donationsMap.keys()];
      let arrayValues6 = [...this.donationsMap.values()];
      //let initDateSplit5 = arrayData5[0].split("/");
      //let endDateSplit2 = arrayData2[arrayData2.length - 1].split("/");
      let rangeDates6 = getDates(
        new Date(initDateSplit[2], initDateSplit[1] - 1, initDateSplit[0] - 5),
        new Date(todays.getFullYear(), todays.getMonth(), todays.getDate())
      );

      let rangeDatesMapped6 = rangeDates6.map((e) => {
        let arraydata6 = new Array();
        arraydata6[0] = e.toLocaleDateString("en-GB");
        arraydata6[1] = 0;
        return arraydata6;
      });
      let count6 = 0;
      arrayData6.forEach((e) => {
        rangeDatesMapped6.forEach((el) => {
          if (el[0] === e) {
            el[1] = arrayValues6[count6];
          }
        });
        count6++;
      });
      this.donationsFullMapKey = rangeDatesMapped6.map((e) => e[0]);
      this.donationsFullMapValue = rangeDatesMapped6.map((e) => e[1]);

      //patients previous year

      let arrayData7 = [...this.patientsMap.keys()];
      let arrayValues7 = [...this.patientsMap.values()];
      let initDateSplit7 = arrayData7[0].split("/");
      //let endDateSplit2 = arrayData2[arrayData2.length - 1].split("/");
      let rangeDates7 = getDates(
        new Date(
          initDateSplit7[2],
          initDateSplit7[1] - 1,
          initDateSplit7[0] - 5
        ),
        new Date(todays.getFullYear() - 1, todays.getMonth(), todays.getDate())
      );

      let rangeDatesMapped7 = rangeDates7.map((e) => {
        let arraydata7 = new Array();
        arraydata7[0] = e.toLocaleDateString("en-GB");
        arraydata7[1] = 0;
        return arraydata7;
      });
      let count7 = 0;
      arrayData7.forEach((e) => {
        rangeDatesMapped7.forEach((el) => {
          if (el[0] === e) {
            el[1] = arrayValues7[count7];
          }
        });
        count7++;
      });

      this.patientsPrevYMapKey = rangeDatesMapped7.map((e) => e[0]);
      this.patientsPrevYMapValue = rangeDatesMapped7.map((e) => e[1]);

      //patients previous 2 year

      let arrayData8 = [...this.patientsMap.keys()];
      let arrayValues8 = [...this.patientsMap.values()];
      let initDateSplit8 = arrayData8[0].split("/");
      //let endDateSplit2 = arrayData2[arrayData2.length - 1].split("/");
      let rangeDates8 = getDates(
        new Date(
          initDateSplit8[2],
          initDateSplit8[1] - 1,
          initDateSplit8[0] - 5
        ),
        new Date(todays.getFullYear() - 2, todays.getMonth(), todays.getDate())
      );

      let rangeDatesMapped8 = rangeDates8.map((e) => {
        let arraydata8 = new Array();
        arraydata8[0] = e.toLocaleDateString("en-GB");
        arraydata8[1] = 0;
        return arraydata8;
      });
      let count8 = 0;
      arrayData8.forEach((e) => {
        rangeDatesMapped8.forEach((el) => {
          if (el[0] === e) {
            el[1] = arrayValues8[count8];
          }
        });
        count8++;
      });

      this.patientsPrev2YMapKey = rangeDatesMapped8.map((e) => e[0]);
      this.patientsPrev2YMapValue = rangeDatesMapped8.map((e) => e[1]);
      console.log(this.consultationsMapValue, "valor");
    },
    async update() {
      await this.getConsultations();
      this.mapConsultations();
      this.fillData();
    },
  },
};
</script>

<style lang="scss">
.small {
  max-width: 600px;
}
</style>
