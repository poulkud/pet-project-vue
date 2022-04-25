<template>
  <div v-if="show" class="dialog__container" @click.stop="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "MyDialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scoped>
.dialog__container {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.dialog__content {
  margin: auto;
  background-color: white;
  border-radius: 12px;
  padding: 15px;
  min-height: 200px;
  min-width: 400px;
}
</style>
