==========================
<script setup>
import { RouterLink } from 'vue-router';
// import DashboardDetailComponent from '../components/DashboardDetailComponent.vue';

</script>

<template>
    <div class="container">
        <div class="head">
            <!-- <DashboardDetailComponent /> -->
            <div class="assess">
            <h2>Take Assessment </h2>
            <p>Thamk you</p>
        </div>

            <div class="timer">
                <h3 class="heading">Timer</h3>
                <h4 class="time">
                    <span class="hour">23</span><span class="minutes">mins</span>
                    <span class="seconds">043</span><span class="minutes">sec</span>
                </h4>
            </div>
        </div>

        <div class="congrat">
            <img src="src/assets/icons/confetti (1).svg" alt="">
            <p>We have received your assessment test, we will get back to you soon.
             Best of luck</p>
         <RouterLink to="/">Home</RouterLink>
        </div>
       
        </div>
         
</template>
<style scoped>
.head {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
}

.assess{
    display: flex;
    flex-direction: column;
    text-align: center;
    /* justify-content: center; */
}

.heading {
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
}
/* h5 {
  font-family: "Lato";
  display: flex;
  flex-direction: column;
  font-style: italic;
  font-weight: 500;
  font-size: 25px;
  line-height: 17px;
  color: #2b3c4e;
  text-align: center;
  margin-bottom: 48px;
  margin-top: 14px;
} */

.congrat{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 23px;
}

.time {

    font-size: 48px;
    font-style: normal;
    font-weight: 300;
}

.minutes {
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
}

/* .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px;
    gap: 21px;
} */

</style>