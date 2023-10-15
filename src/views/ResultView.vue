<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <div class="head">
      <div class="title">
        <h2>Take Assessment</h2>
        <p>Thank you</p>
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
      <img src="../assets/icons/confetti (1).svg" alt="" />
      <p>We have received your assessment test, we will get back to you soon. Best of luck</p>
      <RouterLink class="last-btn" to="/">Home</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.head {
  display: flex;
  flex-direction: row;
  /* flex-direction: column; */
  justify-content: space-between;
  gap: 500px;
  /* padding-top: 10px; */
}

.title {
  display: flex;
  flex-direction: column;
  text-align: center;
  /* justify-content: center; */
}

.title h2 {
  color: #2b3c4e;
  font-size: 44px;
  font-weight: 300;
  line-height: 52px;
  letter-spacing: -0.02em;
  text-align: left;
  /* padding-top: 107px; */
}

.title p {
  color: #2b3c4e;
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.heading {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  /* text-align: center; */
  color: #4f4f4f;
  padding-bottom: 9px;
}
.hour {
  color: #2b3c4e;
}

.congrat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 23px;
}

.congrat p {
  width: 524px;
  height: 46px;
  top: 491px;
  left: 568px;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  color: #4f4f4f;
}

.time {
  font-style: normal;
  color: #2b3c4e;
  font-size: 48px;
  font-weight: 300;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: center;
}

.minutes {
  color: #4f4f4f;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
}

.last-btn {
  width: 205px;
  height: 41px;
  color: #ffff;
  background: #7557d3;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  padding: 10px 80px 11px 81px;
  margin-top: 34px;
}

/* .cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px;
    gap: 21px;
} */
</style>
