<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="12" md="10">
        <nav>
          <v-toolbar flat color="grey lighten-4">
            <v-toolbar-title> Warehouse </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn text color="grey" exact :to="{ name: 'Home' }"> Home </v-btn>
            <v-btn text color="grey" :to="{ name: 'About' }">Sobre</v-btn>
            <v-btn text color="grey" :to="{ name: 'WarehouseList' }"
              >Galpões</v-btn
            >
          </v-toolbar>
        </nav>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Menu",
  props: ["username"],
};
</script>
