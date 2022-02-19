<template>
  <v-row justify="center">
    <v-col sm="12" md="10">
      <v-card dark class="my-7">
        <v-card-title> Lista de Galpões </v-card-title>
        <v-card-text>
          <v-simple-table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Código</th>
                <th>Cep</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="w in warehouses" :key="w.code">
                <td>
                  {{ w.name }}
                </td>
                <td>
                  {{ w.code }}
                </td>
                <td>
                  {{ w.postal_code }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["warehouses"],
};
</script>
