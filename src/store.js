import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 属性
    count: 0,
    todos: [
      { id: 1, tiitle: "add toods 1", completed: true },
      { id: 2, tiitle: "add toods 2", completed: false },
      { id: 3, tiitle: "add toods 3", completed: true }
    ]
  },
  getters: {
    count: state => ++state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    // completedTodos: function (state) {
    //   return state.todos.filter(function (todo) {
    //     return todo.completed;
    //   })
    // }
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosById: state => id => state.todos.find(todo => todo.id == id)

  },
  mutations: {

  },
  actions: {

  }
})
