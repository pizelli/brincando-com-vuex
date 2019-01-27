<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>Total das compras: R$ {{ valorTotal }}</span>
  </div>
</template>
<script>
export default {
  computed: {
    valorTotal: function () {
      return this.$store.getters.vltotal.toLocaleString('pt-BR')
    }
  }
}
</script>
