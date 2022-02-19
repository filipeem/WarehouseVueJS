<template>
  <div>
    <Form @sendWarehouse="refresh" />

    <v-row justify="center">
      <v-col sm="12" md="10">
        <v-text-field label="Buscar galpões" v-model="term"></v-text-field>
      </v-col>
    </v-row>

    <WarehouseTable :warehouses="filterWarehouse" />
  </div>
</template>

<script>
import WarehouseTable from "@/components/WarehouseTable.vue";
import Form from "@/components/Form.vue";

export default {
  name: "WarehouseList",
  components: {
    WarehouseTable,
    Form,
  },
  data() {
    return {
      warehouses: [],
      term: "",
    };
  },
  async mounted() {
    this.warehouses = await this.getWarehouses();
  },

  methods: {
    async getWarehouses() {
      const response = await this.$http.get(
        "http://localhost:3000/api/v1/warehouses"
      );
      return response.json();
    },

    refresh(value) {
      this.warehouses.unshift(value);
    },
  },
  computed: {
    filterWarehouse() {
      return this.warehouses.filter((warehouse) =>
        warehouse.name.toLowerCase().includes(this.term.toLowerCase())
      );
    },
  },
};
</script>
