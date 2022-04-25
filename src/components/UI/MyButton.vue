<template>
  <button>
    <slot />
  </button>
</template>
<script>
export default {
  name: "MyButton",
};
</script>
<style>
.button {
  min-width: 80px;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  align-self: flex-end;
  padding: 10px;
  margin: 0 5px;
  text-decoration: none;
  color: black;
  font-size: 13px;
}
</style>
