import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrinho: {
      produtos: JSON.parse(localStorage.getItem('products')) || []
    }
  },
  mutations: {
    addToCart (state, p) {
      let prod = state.carrinho.produtos.find(o => o.id === p.id)
      if (prod) {
        prod.qty++
        localStorage.setItem('products', JSON.stringify(state.carrinho.produtos))
        return
      }
      state.carrinho.produtos.push(p)
      console.log(state.carrinho.produtos)
      localStorage.setItem('products', JSON.stringify(state.carrinho.produtos))
    },
    removeOfCart (state, p) {
      if (state.carrinho.produtos.length > 0) {
        let index = state.carrinho.produtos.findIndex(o => o.id === p.id)
        if (index > -1) {
          state.carrinho.produtos.splice(index, 1)
        }
      }
      localStorage.setItem('products', JSON.stringify(state.carrinho.produtos))
    },
    PLUS_PRODUCT: function (state, p) {
      p.qty++
    },
    minusProduct: function (state, p) {
      if (p.qty === 1) {
        this.delProduct(state, p)
        return
      }
      p.qty--
    },
    toLocal: function (state) {
      localStorage.setItem('products', JSON.stringify(state.carrinho.produtos))
    }
  },
  actions: {
    plusProduct: (context, p) => {
      console.log('action plus')
      context.commit('PLUS_PRODUCT', p)
      context.commit('toLocal')
      // cntx.commit('plusProduct')
    }
  },
  getters: {
    vltotal: state => {
      if (state.carrinho.produtos.length > 0) {
        return state.carrinho.produtos.map(p => {
          return (p.qty * p.preco)
        }).reduce((a, v) => a + v)
      }
      return 0.00
    }
  }
})
