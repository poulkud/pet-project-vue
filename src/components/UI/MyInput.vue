<template>
  <input :value="modelValue" class="input" type="text" @input="updateInput" />
</template>
<script>
export default {
  name: "MyInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px;
  margin: 10px 0;
  border-radius: 15px;
}
</style>
