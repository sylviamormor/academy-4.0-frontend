<script setup>

</script>

<template>
    <section>
        <div class="main">
            <p>Are you sure you want to approve this application?</p>
            <div class="mainButton">
                <button class="yes">Yes</button>
                <button class="no">No</button>
            </div>

        </div>
    </section>
</template>

<style scoped>
.main {
    display: flex;
    flex-direction: column;
    padding: 75px 96px;
    gap: 48px;
    background: #FFF;
    width: 458px;
    height: 300px;
}

.main p {
    color: #4F4F4F;
    text-align: center;
    font-family: 'Lato';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
}

.mainButton {
    display: flex;

}

.yes,
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

.no {
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
}
</style>