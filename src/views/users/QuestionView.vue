<script setup>
import DashboardHeaderComponent from '../../components/DashboardHeaderComponent.vue';


const samplequestions = {
    name: "Who is your hero?",
    solve: {
        q1: "how are you",
        q2: "what is yur pet's name",
        q3: "who took a break",
        q4: "what is your favorite food"
    }
}

</script>

<template>
    <div class="main">
        <div class="header">
            <DashboardHeaderComponent 
            cardTitle="Take Assessment" 
            cardText="Click the finish button below to submit assessment, 
            you can go back at any time to edit your answers." 
            />

            <div class="timeCheck">
                <h3 class="title">Timer</h3>
                <h4 class="time">
                    <span class="hour">00</span><span class="mins">mins</span>
                    <span class="secs">000</span><span class="mins">sec</span>
                </h4>
            </div>
        </div>
        <div class="cards">
            <div class="questions">
                <div>
                  <p>Question 1</p>
                  <h5>Which program are you interested in?</h5>
                  <div class="checkbox">
                    <label>
                      <input
                        value="alphabet"
                        type="radio"
                        name="answers"
                      />
                      <span>UI/UX Design</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <button
                  class="preview"
                  disabled
                  @click="previous()"
                >
                  Previous
                </button>
                <button class="nextBtn" @click="next()">Next</button>
              </div>
              <button
                class="finishButton"
                @click="stop(); finish();"
              >
                Finish
              </button>
        </div>
    </div>
</template>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
}

.title {
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

.mins {
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
.questions,
.checkboxes{
    text-align: center;
    padding: 0 30px;
}
.bottom{
    display: flex;
    justify-content: space-between;
    
}
.nextBtn {
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
.preview {
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  height: 41px;
  width: 125px;
  color: black;
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
}
.finishButton {
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
.checkbox input[type="radio"] {
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

.checkbox label {
  cursor: pointer;
  margin-bottom: 37px;
}
.checkbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
} 
</style>