<template>
  <div id="app">
    <h1>{{count}}</h1>
    <p>{{todos}}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
</style>
