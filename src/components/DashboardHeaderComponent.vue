<script setup>
    const props = defineProps(["cardTitle", "cardText"]);
</script>

<template>
    <div class="header">
        <h3 class="title"> {{ cardTitle }}</h3>
        <p class="text"> {{ cardText }}</p>
    </div>
</template>

<style scoped>
    .header{
        display: flex;
        flex-direction: column;
        font-family: 'Lato';
        gap: 15px;
    }
    .title{
        color: #2B3C4E;
        font-size: 43.556px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        letter-spacing: -0.871px;
    }
    .text{
        color: #2B3C4E;
        font-family: 'Lato';
        font-size: 16px;
        font-style: italic;
        font-weight: 500;
        line-height: normal;
    }
</style>
