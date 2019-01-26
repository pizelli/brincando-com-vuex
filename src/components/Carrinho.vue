<template>
  <div>
    <h1>Carrinho</h1>
    <span>Total: R$ {{ vltotal }}</span>
    <table border="1">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Quant.</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in produtos" :key="p.id">
          <td><button @click="delProduct(p)">{{ p.id }}</button></td>
          <td>{{ p.nome }}</td>
          <td>{{ p.qty }}</td>
          <td>
            <button @click="minusProduct(p)">-</button>
            R$ {{ p.preco.toLocaleString('pt-BR') }}
            <button @click="plusProduct(p)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
    <ul>
      <li v-for="p in prods" :key="p.id">{{ p.nome }} - <button @click="addProduct(p)">Add to Cart</button></li>
    </ul>
  </div>
</template>

<script>
import store from '../store'
export default {
  name: 'Carrinho',
  data: () => {
    return {
      prods: [
        { id: 1, nome: 'Pasta de dente', qty: 1, preco: 8.99 },
        { id: 2, nome: 'Escova de dente', qty: 1, preco: 3.50 },
        { id: 3, nome: 'Fio dental', qty: 1, preco: 2.35 },
        { id: 4, nome: 'Shampoo', qty: 1, preco: 10.50 },
        { id: 5, nome: 'Condicionador', qty: 1, preco: 7.89 }
      ]
    }
  },
  methods: {
    addProduct: function (p) {
      store.commit('addToCart', p)
    },
    delProduct: function (p) {
      store.commit('removeOfCart', p)
    },
    plusProduct: function (p) {
      store.commit('plusProduct', p)
    },
    minusProduct: function (p) {
      store.commit('minusProduct', p)
    }
  },
  computed: {
    produtos: () => {
      return store.state.carrinho.produtos
    },
    vltotal: () => {
      return store.getters.vltotal.toLocaleString('pt-BR')
    }
  }
}
</script>

<style>

</style>
