<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div>
    Home
    <RouterLink to="/dashboard">User</RouterLink>
    <RouterLink to="/admin/dashboard">Admin</RouterLink>
  </div>
  <div><RouterLink to="/SignUp">Register Now</RouterLink></div>
</template>
