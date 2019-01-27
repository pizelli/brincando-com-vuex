<template>
  <div>
    <h1>Carrinho</h1>
    <span>Total: R$ {{ vltotal | toReal }}</span>
    <div class="container">
      <div class="flex">
        <ul>
          <li v-for="p in prods" :key="p.id">{{ p.nome }} - <button @click="add(p)">Add to Cart</button></li>
        </ul>
      </div>
      <div class="flex">
        <table border="0">
          <thead>
            <tr>
              <th>#Id</th>
              <th>Nome</th>
              <th>Quant.</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, index) in produtos" :key="index">
              <td>{{ p.id }}</td>
              <td>{{ p.nome }}</td>
              <td>{{ p.qty }}</td>
              <td>
                <button @click="minus(p)">-</button>
                R$ {{ p.preco | toReal }}
                <button @click="plus(p)">+</button>
              </td>
              <td><button @click="del(p)">X</button></td>
            </tr>
            <tr v-if="produtos.length <= 0">
              <td colspan="5">Nenhum produto no carrinho.</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="5" class="text-right">
                <span>Total: R$ {{ vltotal | toReal }}</span>
              </td>
            </tr>
          </tfoot>
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
      return this.$store.getters.vltotal
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.container{
  display: flex;
  flex: 1;
  justify-content: center;
}
.flex{
  display: flex;
  flex: 1;
}
.text-right{
  text-align: right;
}
table{
  border: 1px solid cornflowerblue;
  background-color: cornflowerblue;
  margin: 0;
  padding: 0;
  width: 500px;
}
thead th {
  height: 30px;
}
tbody td{
  background-color: white;
  padding: 5px 10px;
  color: #666;
}
tbody tr:nth-of-type(even) td{
  background-color: #ccc;
}
button{
  padding: 5px 10px;
  background-color: #f2f2f2;
  color: #666;
  border: 1px solid #ccc;
}
tfoot, td{
  color: white;
  padding: 3px 10px;
}
</style>
