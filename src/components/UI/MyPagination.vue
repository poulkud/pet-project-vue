<template>
  <div class="page__container">
    <div
      v-for="pageNumber in total"
      :key="pageNumber"
      class="page"
      :class="{
        'current-page': currentPage === pageNumber,
      }"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>
<script>
export default {
  name: "MyPagination",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    changePage(pageNum) {
      this.$emit("nextPage", pageNum);
    },
  },
};
</script>
<style scoped>
.page__container {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid teal;
  padding: 5px;
  border-radius: 15px;
  min-width: 40px;
  text-align: center;
}
.current-page {
  border: 3px solid teal;
}
</style>
