<template>
  <div class="navbar">
    <div @click="$router.push('/')">Главная страница</div>
    <div class="navbar__btns">
      <my-button class="button" @click="$router.push('/posts')"
        >Посты</my-button
      >
      <my-button class="button" @click="$router.push('/about')"
        >О сайте</my-button
      >
      <my-button class="button" @click="$router.push('/store')"
        >store</my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "bar-nav",
};
</script>

<style>
.navbar {
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
</style>
