<template>
  <div id="app">
    <!-- <p>{{count}}</p> -->
    <!-- <p>{{completedTodos}}</p> -->
    <!-- <p>{{completedTodosCount}}</p> -->
    <!-- <p>{{getTodosById(1)}}</p> -->
    <!-- <Count /> -->

    <button @click="decrementCountAsync({amount:2})">-</button>
    <span>{{count}}</span>
    <button @click="incrementCountAsync">+</button>
    <hr />
    <p>{{completedTodos}}</p>
    <button @click="fetchDataAsync">FetchData</button>
  </div>
</template>

<script>
import Count from "./commponents/Count";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "app",
  components: { Count },
  computed: mapState([
    "count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ]),
  // methods: mapMutations(["incrementCount", "decrementCount"])
  methods: mapActions([
    "incrementCountAsync",
    "decrementCountAsync",
    "fetchDataAsync"
  ])

  // methods: {
  //   incrementCount() {
  //     // 触发action
  //     // dispatch  分发
  //     this.$store.dispatch("incrementCountAsync");
  //   },
  //   decrementCount(n) {
  //     this.$store.dispatch("decrementCountAsync", n);
  //   },
  //   fetchData() {
  //     // 触发action
  //     this.$store.dispatch("fetchDataAsync");
  //   }
  // }
  // computed: {
  //   count() {
  //     return this.$store.getters.count;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // },

  // 写法三
  // computed: mapState(["count", "todos"])
  // 写法二
  // computed: mapState({
  //   count: state => state.count,
  //   todos: state => state.todos
  // })

  // 写法一
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
};
</script>

<style>
</style>
