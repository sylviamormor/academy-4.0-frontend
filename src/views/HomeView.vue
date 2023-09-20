<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    Home
    <RouterLink to="/dashboard">User</RouterLink>
    <RouterLink to="/admin/dashboard">Admin</RouterLink>
  </div>
</template>
