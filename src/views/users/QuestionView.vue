<script setup>
import DashboardHeaderComponent from '../../components/DashboardHeaderComponent.vue';


const questions = {
    name: "how old are you",
    solve: {
        q1: "hey there",
        q2: "i am here",
        q3: "appuuu",
        q4: "apppppp"
    }
}

</script>

<template>
    <div class="container">
        <div class="head">
            <DashboardHeaderComponent 
            cardTitle="Take Assessment" 
            cardText="Click the finish button below to submit assessment, 
            you can go back at any time to edit your answers." 
            />

            <div class="timer">
                <h3 class="heading">Timer</h3>
                <h4 class="time">
                    <span class="hour">00</span><span class="minutes">mins</span>
                    <span class="seconds">000</span><span class="minutes">sec</span>
                </h4>
            </div>
        </div>
        <div class="cards">
            <div class="question-containter">
                <div>
                  <p>Question 1</p>
                  <h5>How old are you?</h5>
                  <div class="checkboxes">
                    <label>
                      <input
                        value="alphabet"
                        type="radio"
                        name="answers"
                      />
                      <span> I am 15yrs</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <button
                  class="preview-button"
                  disabled
                  @click="previous()"
                >
                  Previous
                </button>
                <button class="next-button" @click="next()">Next</button>
              </div>
              <button
                class="finish-button"
                @click="stop(); finish();"
              >
                Finish
              </button>
        </div>
    </div>
</template>
<style scoped>
.head {
    display: flex;
    justify-content: space-between;
}

.heading {
    color: #4F4F4F;
    font-family: 'Lato';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
}
h5 {
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

.cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px;
    gap: 21px;
}
.question-containter,
.checkboxes{
    text-align: center;
    padding: 0 30px;
}
.bottom{
    display: flex;
    justify-content: space-between;
    
}
.next-button {
  height: 41px;
  width: 125px;
  left: 1110px;
  top: 662px;
  border-radius: 4px;
  background: #7557d3;
  color: white;
  border: none;
  cursor: pointer;
}
.preview-button {
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 41px;
  width: 125px;
  color: black;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
}
.finish-button {
  height: 41px;
  width: 205px;
  background: #cecece;
  border-radius: 4px;
  border-radius: 4px;
  margin-top: 86px;
  border: none;
  color: white;
  cursor: pointer;
}
.checkboxes input[type="radio"] {
  cursor: pointer;
  appearance: none;
  height: 10px;
  width: 10px;
  background-color: #fff;
  border: 1px solid #2b3c4e;
  -webkit-appearance: none;
  margin-right: 42px;
}
input[type="radio"]:checked {
  background-color: black;
}
label {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  text-align: left;
}

.checkboxes label {
  cursor: pointer;
  margin-bottom: 37px;
}
.checkboxes {
  display: flex;
  flex-direction: column;
  justify-content: center;
} 
</style>