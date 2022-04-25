<template>
  <div>
    <h1>Страница с постами</h1>
    <div class="app_btns">
      <my-button class="button" @click="showDialog"
        >Создатель пользаветеля</my-button
      >
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <div>
      <my-input v-focus v-model="searchQuery" placeholder="Search" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedAndSearchPosts" @remove="removePost" />
    <div v-intersection="loadPosts" class="observer" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import axios from "axios";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyPagination from "@/components/UI/MyPagination.vue";

export default {
  components: {
    PostList,
    PostForm,
    MyDialog,
    MyButton,
    MySelect,
    MyInput,
    MyPagination,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limitPage: 10,
      totalPage: 0,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNum) {
      this.page = pageNum;
    },
    async fetchPosts() {
      try {
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limitPage,
            },
          }
        );
        this.totalPage = Math.ceil(
          responce.headers["x-total-count"] / this.limitPage
        );
        this.posts = responce.data;
      } catch (e) {
        console.log("error", e);
      }
    },
    async loadPosts() {
      try {
        this.page += 1;
        const responce = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limitPage,
            },
          }
        );
        this.totalPage = Math.ceil(
          responce.headers["x-total-count"] / this.limitPage
        );
        this.posts = [...this.posts, ...responce.data];
      } catch (e) {
        console.log("error", e);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    sortedAndSearchPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style>
.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.observer {
  height: 30px;
}
</style>
