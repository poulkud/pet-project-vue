<template>
  <div class="navbar__container">
    <router-link :to="`/`">Главная страница</router-link>
    <div class="navbar__btns">
      <router-link :to="`/posts`" class="button"> Посты </router-link>
      <router-link :to="`/about`" class="button"> О сайте </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarNav",
};
</script>

<style>
.navbar__container {
  height: 50px;
  background-color: teal;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
a {
  text-decoration: none;
  color: black;
}
</style>
