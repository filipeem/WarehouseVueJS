<template>
  <div>
    <h1>Cadastrar Galpão</h1>
    <div>{{msg}}</div>
    <form v-bind:class="classe" v-on:submit.prevent="postWarehouse">
      <input v-model="form.name" placeholder="Nome">
      <input v-model="form.code" placeholder="Código">
      <input v-model="form.postal_code" placeholder="CEP">
      <input v-model="form.description" placeholder="Descrição">
      <input v-model="form.address" placeholder="Endereço">
      <input v-model="form.city" placeholder="Cidade">
      <input v-model="form.state" placeholder="Estado">
      <input v-model="form.total_area" placeholder="Área Total">
      <input v-model="form.useful_area" placeholder="Área Útil">
      <input type="submit" value="Enviar"/>
    </form>
  </div>
</template>
<script>
export default {
  name: 'WarehouseForm',
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
        state: null,
        total_area: null,
        useful_area: null
      }
      
    }
  },

  methods: {

    async postWarehouse(){
      try {
        await this.$http.post("http://localhost:3000/api/v1/warehouses", {
          name: this.form.name,
          code: this.form.code,
          postal_code: this.form.postal_code,
          description: this.form.description,
          address: this.form.address,
          city: this.form.city,
          state:this.form.state,
          total_area:this.form.total_area,
          useful_area:this.form.useful_area
        });
        this.msg = "Galpão cadastrado";
        this.form = {}
        this.classe = "success"

      }
      catch(error) {
        const error_msg = await error.json();
        this.msg = error_msg;
        this.classe = "error";
      }
      

    }
  }
}
</script>

<style scoped>
  form.success input {
    border: 1px solid green;
  }

  form.error input {

    border: 1px solid red;
  }
</style>
