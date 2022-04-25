<template lang="">
  <div class="post">
    <div>
      <div><strong>Название:</strong>{{ post.title }}</div>
      <div><strong>Описание:</strong>{{ post.body }}</div>
    </div>
    <div class="wrapper_btn">
      <my-button class="button" @click="$router.push(`/posts/${post.id}`)"
        >Просмотр</my-button
      >
      <my-button class="button" @click="$emit('remove', post)"
        >Удаление</my-button
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      body: true,
    },
  },
};
</script>
<style scoped>
.post {
  border: 4px solid teal;
  padding: 15px;
  margin-top: 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper_btn {
  display: flex;
}
</style>
