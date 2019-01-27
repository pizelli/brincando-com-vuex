<template>
  <div>
    <h1>Carrinho</h1>
    <span>Total: R$ {{ vltotal }}</span>
    <div class="container">
      <div class="flex">
        <ul>
          <li v-for="p in prods" :key="p.id">{{ p.nome }} - <button @click="add(p)">Add to Cart</button></li>
        </ul>
      </div>
      <div class="flex">
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
            <tr v-for="(p, index) in produtos" :key="index">
              <td><button @click="del(p)">{{ p.id }}</button></td>
              <td>{{ p.nome }}</td>
              <td>{{ p.qty }}</td>
              <td>
                <button @click="minus(p)">-</button>
                R$ {{ p.preco.toLocaleString('pt-BR') }}
                <button @click="plus(p)">+</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
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
    ...mapActions([
      'plusProduct',
      'minusProduct',
      'addToCart',
      'removeOfCart'
    ]),

    add: function (p) {
      this.addToCart(p)
    },
    del: function (p) {
      this.removeOfCart(p)
    },
    plus: function (p) {
      this.plusProduct(p)
    },
    minus: function (p) {
      this.minusProduct(p)
    }
  },
  computed: {
    produtos: function () {
      return this.$store.getters.produtos
    },
    vltotal: function () {
      return this.$store.getters.vltotal.toLocaleString('pt-BR')
    }
  }
}
</script>

<style>
.container{
  display: flex;
  flex: 1;
  justify-content: center;
}
.flex{
  display: flex;
  flex: 1;
}
</style>
