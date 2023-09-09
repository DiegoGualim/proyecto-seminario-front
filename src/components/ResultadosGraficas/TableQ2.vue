<template>
    <b-container fluid>
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
                <!--   <template #cell(actions)="row">
                    <b-button size="sm" @click="deleteRow(row.item)">
                        <span class="material-icons"> delete </span></b-button
                    >
                </template> -->
            </b-table>
            <!-- Main table element -->
        </b-row>
    </b-container>
</template>

<script>
import { requestHandler } from '@/helpers/requestHandler'
import { requestOptions } from '@/helpers/requestOptions'
//import EventBus from '@/bus'
export default {
    data() {
        return {
            items: [],
            fields: [
                {
                    key: 'pregunta_1',
                    sortable: true,
                    label: 'Pregunta 1'
                },
                {
                    key: 'pregunta_2',
                    sortable: true,
                    label: 'Pregunta 2'
                },
                {
                    key: 'pregunta_3',
                    sortable: true,
                    label: 'Pregunta 3'
                },
                {
                    key: 'pregunta_4',
                    sortable: true,
                    label: 'Pregunta 4'
                },
                {
                    key: 'pregunta_5',
                    sortable: true,
                    label: 'Pregunta 5'
                },
                {
                    key: 'pregunta_6',
                    sortable: true,
                    label: 'Pregunta 6'
                },
                {
                    key: 'pregunta_7',
                    sortable: true,
                    label: 'Pregunta 7'
                },
                {
                    key: 'pregunta_8',
                    sortable: true,
                    label: 'Pregunta 8'
                },
                {
                    key: 'pregunta_9',
                    sortable: true,
                    label: 'Pregunta 9'
                },
                {
                    key: 'pregunta_10',
                    sortable: true,
                    label: 'Pregunta 10'
                },
                {
                    key: 'fecha_creo',
                    sortable: true,
                    label: 'Fecha Creo'
                },
                {
                    key: 'usuario',
                    sortable: true,
                    label: 'Nombre'
                }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 10, 15, { value: 100, text: 'Mostrar muchos' }],
            sortBy: 'id',
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
    methods: {
        async fetchData() {
            this.items = await requestHandler.async_fetch(
                `${process.env.VUE_APP_BACKEND}/api/v1/evaluacion/tablaresultadosQ2`,
                requestOptions.get()
            )
        }
    }
}
</script>
