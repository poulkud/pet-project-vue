<template>
  <div class="post__container">
    <div>
      <div><strong>Название:</strong>{{ post.title }}</div>
      <div><strong>Описание:</strong>{{ post.body }}</div>
    </div>
    <div class="post_wrapper_btn">
      <router-link :to="`/posts/${post.id}`" class="button">
        Просмотр
      </router-link>
      <my-button class="button" @click="$emit('remove', post)">
        Удаление
      </my-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      body: true,
      default: () => {},
    },
  },
};
</script>
<style scoped>
.post__container {
  border: 4px solid teal;
  padding: 15px;
  margin-top: 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post_wrapper_btn {
  display: flex;
}
</style>
