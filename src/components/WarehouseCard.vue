<template>
  <div class="card">
    <p>{{ name }}</p>
    <p>Código: {{ code }}</p>
    <p>CEP: {{postal_code}}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    code: String,
    postal_code: String
  }
}
</script>

<style scoped>
  div.card {
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
  float: left;
  width: 25%;
}
</style>
