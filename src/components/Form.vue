<template>
  <v-row justify="center">
    <v-col sm="12" md="10">
      <v-card dark class="my-7">
        <v-card-text>
          <h1>Novo Galpão</h1>
          <div>{{ msg }}</div>
          <v-form v-on:submit.prevent="postWarehouse">
            <v-text-field label="Nome" v-model="form.name"></v-text-field>
            <v-text-field label="Código" v-model="form.code"></v-text-field>
            <v-text-field label="Cep" v-model="form.postal_code"></v-text-field>
            <v-text-field label="Descrição" v-model="form.description"></v-text-field>
            <v-text-field label="Endereço" v-model="form.address"></v-text-field>
            <v-text-field label="Cidade" v-model="form.city"></v-text-field>
            <v-text-field label="Área Total" v-model="form.total_area"></v-text-field>
            <v-text-field label="Área Útil" v-model="form.useful_area"></v-text-field>
            <v-btn color="primary" right absolute fab type="submit">
              <v-icon>mdi-content-save</v-icon>
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "WarehouseForm",
  data() {
    return {
      classe: "",
      msg: null,
      form: {
        name: null,
        code: null,
        postal_code: null,
        description: null,
        address: null,
        city: null,
        total_area: null,
        useful_area: null,
      },
    };
  },

  methods: {
    async postWarehouse() {
      try {
        const response = await this.$http.post(
          "http://localhost:3000/api/v1/warehouses",
          {
            name: this.form.name,
            code: this.form.code,
            postal_code: this.form.postal_code,
            description: this.form.description,
            address: this.form.address,
            city: this.form.city,
            total_area: this.form.total_area,
            useful_area: this.form.useful_area,
          }
        );
        const warehouse = await response.json();
        this.msg = "Galpão cadastrado";
        this.form = {};
        this.classe = "success";
        this.$emit("sendWarehouse", warehouse);
      } catch (error) {
        const error_msg = await error.json();
        this.msg = error_msg;
        this.classe = "error";
      }
    },
  },
};
</script>
