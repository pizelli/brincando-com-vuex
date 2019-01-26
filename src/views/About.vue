<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>Total das compras: R$ {{ valorTotal }}</span>
  </div>
</template>
<script>
import store from '../store'
export default {
  computed: {
    valorTotal: () => {
      return store.getters.vltotal.toLocaleString('pt-BR')
    }
  }
}
</script>
