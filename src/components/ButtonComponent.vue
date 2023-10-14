<script setup>
defineProps(["buttonText"]);
</script>

<template>
  <button>{{ buttonText }}</button>
</template>

<style scoped>
.B-Div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
button {
  width: 520px;
  height: 50px;
  flex-shrink: 0;
  background-color: #7557d3;
  border: none;
  padding-top: 16px;
  padding-bottom: 10px;
  text-align: center;
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 auto;
  cursor: pointer;
}
</style>
