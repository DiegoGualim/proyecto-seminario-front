<template>
    <b-container fluid>
        <!-- User Interface controls -->
        <b-row>
            <b-col lg="6" class="my-1">
                <b-form-group
                    label="Ordenar"
                    label-for="sort-by-select"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                    v-slot="{ ariaDescribedby }"
                >
                    <b-input-group size="sm">
                        <b-form-select
                            id="sort-by-select"
                            v-model="sortBy"
                            :options="sortOptions"
                            :aria-describedby="ariaDescribedby"
                            class="w-75"
                        >
                            <template #first>
                                <option value="">-- ninguno --</option>
                            </template>
                        </b-form-select>

                        <b-form-select
                            v-model="sortDesc"
                            :disabled="!sortBy"
                            :aria-describedby="ariaDescribedby"
                            size="sm"
                            class="w-25"
                        >
                            <option :value="false">Asc</option>
                            <option :value="true">Desc</option>
                        </b-form-select>
                    </b-input-group>
                </b-form-group>
            </b-col>
            <b-col lg="6" class="my-1">
                <b-form-group
                    label="Filtrar"
                    label-for="filter-input"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                >
                    <b-input-group size="sm">
                        <b-form-input
                            id="filter-input"
                            v-model="filter"
                            type="search"
                            placeholder="Escribe para buscar"
                        ></b-form-input>

                        <b-input-group-append>
                            <b-button :disabled="!filter" @click="filter = ''">Limpiar</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col sm="5" md="6" class="my-1">
                <b-form-group
                    label="Por página"
                    label-for="per-page-select"
                    label-cols-sm="6"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                >
                    <b-form-select
                        id="per-page-select"
                        v-model="perPage"
                        :options="pageOptions"
                        size="sm"
                    ></b-form-select>
                </b-form-group>
            </b-col>

            <b-col sm="7" md="6" class="my-1">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="totalRows"
                    :per-page="perPage"
                    align="fill"
                    size="sm"
                    class="my-0"
                ></b-pagination>
            </b-col>
        </b-row>

        <!-- Main table element -->
        <b-table
            :items="items"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            :filter-included-fields="filterOn"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :sort-direction="sortDirection"
            stacked="md"
            striped
            responsive=""
            show-empty
            small
            head-variant="dark"
            @filtered="onFiltered"
            class="mt-3"
        >
            <template #cell(actions)="row">
                <b-button size="sm" @click="deleteRow(row.item)">
                    <span class="material-icons"> delete </span></b-button
                >
            </template>
        </b-table>
        <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ filteredItems }}</pre>
    </b-card> -->
    </b-container>
</template>

<script>
import { requestHandler } from '@/helpers/requestHandler'
import { requestOptions } from '@/helpers/requestOptions'
import EventBus from '@/bus'
//import XLSX from "xlsx";

export default {
    data() {
        return {
            items: [],
            fields: [
                {
                    key: 'nombre',
                    sortable: true,
                    label: 'Nombre'
                },
                {
                    key: 'apellido',
                    sortable: true,
                    label: 'Apellido'
                },
                {
                    key: 'edad',
                    sortable: true,
                    label: 'Edad'
                },
                {
                    key: 'direccion',
                    sortable: true,
                    label: 'Direccion'
                },
                {
                    key: 'telefono',
                    sortable: true,
                    label: 'Edad'
                },
                {
                    key: 'username',
                    sortable: true,
                    label: 'User'
                },
                {
                    key: 'email',
                    sortable: true,
                    label: 'Email'
                },
                {
                    key: 'type',
                    sortable: true,
                    label: 'Tipo de usuario'
                },
                { key: 'actions', label: 'Acciones' }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 10, 15, { value: 100, text: 'Mostrar muchos' }],
            sortBy: 'id_usuario',
            sortDesc: true,
            sortDirection: 'asc',
            filter: null,
            filterOn: [],
            filteredItems: []
        }
    },
    computed: {
        sortOptions() {
            // Create an options list from our fields
            return this.fields
                .filter((f) => f.sortable)
                .map((f) => {
                    return { text: f.label, value: f.key }
                })
        }
    },
    async mounted() {
        // Set the initial number of items
        await this.fetchData()
        this.totalRows = this.items.length
        this.filteredItems = this.items
    },
    async beforeCreate() {},
    methods: {
        async deleteRow(item) {
            console.log(item.id_usuario, 'mi pana')
            const deletations = await requestHandler
                .async_fetch(
                    `${process.env.VUE_APP_BACKEND}/api/v1/user/${item.id_usuario}`,
                    requestOptions.delete()
                )
                .then(() => {
                    this.showToastDelete()
                    this.fetchData()
                })
            console.log(deletations)
        },
        showToastDelete() {
            // Use a shorter name for this.$createElement
            const h = this.$createElement
            // Increment the toast count
            // Create the message
            const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
                h('strong', 'Usuario Eliminado con Éxito')
            ])
            // Pass the VNodes as an array for message and title
            this.$bvToast.toast([vNodesMsg], {
                solid: true,
                variant: 'info',
                toaster: 'b-toaster-top-right',
                noCloseButton: true
            })
        },
        resetInfoModal() {
            this.infoModal.title = ''
            this.infoModal.content = ''
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length
            this.filteredItems = filteredItems
            this.currentPage = 1
        },
        // new methods
        async fetchData() {
            this.items = await requestHandler.async_fetch(
                `${process.env.VUE_APP_BACKEND}/api/v1/user`,
                requestOptions.get()
            )
        },
        /* exportExcel() {
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";

      var wb = XLSX.utils.book_new();
      
      wb.Props = {
        Title: "Libro De Bancos",
        Subject: "Exportado de datos",
        Author: "Fundación APA",
        CreatedDate: new Date(),
      };
      wb.SheetNames.push("Libro");
      
      var ws = XLSX.utils.json_to_sheet(this.filteredItems,{origin: { r: 4, c: 0 }});
      //ws['A1'].s = {};
      wb.Sheets["Libro"] = ws;
      wb.Props
      
      var wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

      function s2ab(s) {
        var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
        var view = new Uint8Array(buf); //create uint8array as viewer
        for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
        return buf;
      }

      const blob = new Blob([s2ab(wbout)], {
        type: "application/octet-stream",
      });
      this.fileCSVBlob = window.URL.createObjectURL(blob);
      a.href = this.fileCSVBlob;
      a.download = `LibroDeBancos.xlsx`;
      a.click();
      window.URL.revokeObjectURL(this.fileCSVBlob);
    }, */
        async exportExcel() {
            const a = document.createElement('a')
            document.body.appendChild(a)
            a.style = 'display: none'

            const wbout = await this.postCheckExcel(this.filteredItems)
            console.log(wbout)

            function s2ab(s) {
                var buf = new ArrayBuffer(s.length) //convert s to arrayBuffer
                var view = new Uint8Array(buf) //create uint8array as viewer
                for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff //convert to octet
                return buf
            }

            const blob = new Blob([s2ab(wbout)], {
                type: 'application/octet-stream'
            })
            this.fileCSVBlob = window.URL.createObjectURL(blob)
            a.href = this.fileCSVBlob
            a.download = `LibroDeBancos.xlsx`
            a.click()
            window.URL.revokeObjectURL(this.fileCSVBlob)
        },
        async postCheckExcel(items) {
            console.log(items)
            const excelstring = await requestHandler.async_fetch_text_response(
                `${process.env.VUE_APP_BACKEND}/api/v1/checks/excel`,
                requestOptions.post(items)
            )
            return excelstring
        }
    },
    async created() {
        EventBus.$on('updateUserTable', (reconsultation) => {
            this.fetchData()
            console.log('evento', reconsultation)
        })
    },
    beforeDestroy() {
        EventBus.$off('updateUserTable')
    }
}
</script>
