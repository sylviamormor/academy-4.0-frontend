<script setup>
defineProps(["message"]);
</script>

<template>
  <div class="container">
    <div class="displayCard">
      <span class="cardDetails">
        {{ message }}
      </span>
      <!-- <span id="close">&times;</span> -->
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}
.displayCard {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
 

  color: white;
  background-color: red;
  /* background-color: #7557d3; */
  font-size: 20px;
  border-radius: 30px;
}

#close {
  font-size: 30px;
}
</style>
