<script setup>

</script>

<template>
    <section>
        <div class="container">
            <p>Are you sure you want to decline this application?</p>
            <div class="btn-container">
                <button class="btn-yes">Yes</button>
                <button class="btn-no">No</button>
            </div>

        </div>
    </section>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    padding: 75px 96px;
    gap: 48px;
    background: #FFF;
    width: 458px;
    height: 300px;
}

.container p {
    color: #4F4F4F;
    text-align: center;
    font-family: 'Lato';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}

.btn-container {
    display: flex;

}

.btn-yes,
btn-no {
    color: #FFF;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 14px 50px;
    border-radius: 4px;
    border: none;
    background: #7557D3;
}
.btn-no {
    color: #000;
    background: #FFF;
    font-family: 'Lato';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 14px 50px;
    border-radius: 4px;
    border: none;
}</style>

