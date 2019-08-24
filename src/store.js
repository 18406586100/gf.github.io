import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'

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
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount,
    setTodos: (state, todos) => state.todos = todos

  },
  actions: {
    incrementCountAsync: ({ commit }) => {
      setTimeout(() => {
        // 解构 const {commit} =context
        // const object = {
        //   name: "zs",
        //   age: 21
        // }
        // const name = object.name;
        // const age = object.age;
        // const { name, age } = context

        // context 相当于this.$store context.
        commit("incrementCount")
      }, 2000)
    },
    decrementCountAsync: (context, payload) => {
      setTimeout(() => {
        // context 相当于this.$store
        context.commit("decrementCount", payload)
      }, 1000)
    },
    async fetchDataAsync(context) {
      // 请求数据   await  本行执行完才执行下一行
      const response = await axios.get("http://jsonplaceholder.typicode.com/todos")
      // console.log(response);
      context.commit("setTodos", response.data)
    }
  }
})
