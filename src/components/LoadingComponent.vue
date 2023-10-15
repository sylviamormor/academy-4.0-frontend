<script setup></script>

<template>
  <div class="body">
    <div class="loader"></div>
  </div>
</template>

<style scoped>
div {
  background-color: rgba(255, 255, 255, 0);
}

.body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #35307e; /* Blue */
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 2s linear infinite;
  position: absolute;
  z-index: 2;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
