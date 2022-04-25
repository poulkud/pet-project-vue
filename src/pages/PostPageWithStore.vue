<template>
  <div>
    <div class="app_btns">
      <my-button class="button" @click="showDialog"
        >Создатель пользаветеля</my-button
      >
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
    </div>
    <div>
      <my-input
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
        placeholder="Поиск...."
        v-focus
      />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedAndSearchPosts" @remove="removePost" />
    <div v-intersection="loadPosts" class="observer" />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {
    PostList,
    PostForm,
    MyDialog,
    MyButton,
    MySelect,
    MyInput,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setPosts: "post/setPosts",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadPosts: "post/loadPosts",
      fetchPosts: "post/fetchPosts",
    }),
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.setPosts(this.posts.filter((p) => p.id !== post.id))
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNum) {
      this.page = pageNum;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limitPage: (state) => state.post.limitPage,
      totalPage: (state) => state.post.totalPage,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedSort: "post/sortedSort",
      sortedAndSearchPosts: "post/sortedAndSearchPosts",
    }),
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
