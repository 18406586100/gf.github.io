<template>
  <div id="app">
    <p>{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(1)}}</p>
    <!-- <Count /> -->
  </div>
</template>

<script>
import Count from "./commponents/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  components: { Count },

  computed: {
    count() {
      return this.$store.getters.count;
    },
    completedTodos() {
      return this.$store.getters.completedTodos;
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount;
    },
    getTodosById() {
      return this.$store.getters.getTodosById;
    }
  }
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
