<template>
  <div class="app">
    <bar-nav />
    <router-view />
  </div>
</template>
<script>
import BarNav from "@/components/BarNav.vue";

export default {
  components: {
    BarNav,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>
