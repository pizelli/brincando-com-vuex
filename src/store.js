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
    plusProduct: function (state, p) {
      p.qty++
    },
    minusProduct: function (state, p) {
      p.qty--
    },
    toLocal: function (state) {
      localStorage.setItem('products', JSON.stringify(state.carrinho.produtos))
    }
  },
  actions: {
    plusProduct: ({ commit }, p) => {
      commit('plusProduct', p)
      commit('toLocal')
    },
    minusProduct: ({ commit }, p) => {
      if (p.qty === 1) {
        commit('removeOfCart', p)
        commit('toLocal')
        return
      }
      commit('minusProduct', p)
      commit('toLocal')
    },
    addToCart: ({ commit }, p) => {
      commit('addToCart', p)
      commit('toLocal')
    },
    removeOfCart: ({ commit }, p) => {
      commit('removeOfCart', p)
      commit('toLocal')
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
    },
    produtos: state => {
      return state.carrinho.produtos
    }
  }
})
