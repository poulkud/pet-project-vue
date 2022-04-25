<template>
  <form @submit.prevent>
    <h4>Создать новый пост</h4>
    <my-input
      v-focus
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Имя"
    />
    <my-input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание"
    />
    <my-button class="button" @click="createPost">Создать Пост</my-button>
  </form>
</template>
<script>
import MyInput from "./UI/MyInput.vue";
export default {
  components: { MyInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
        id: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>
<style>
form {
  display: flex;
  flex-direction: column;
}
</style>
