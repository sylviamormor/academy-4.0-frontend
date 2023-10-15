<script setup>
const questions = {
  name: "Who is your hero",
  solve: {
    q1: "how are you",
    q2: "what is yur pet's name",
    q3: "who took a break",
    q4: "what is your favorite food",
  },
};
</script>

<template>
  <div class="main">
    <div class="header">

      <span class="right-content">

        <span class="right-header-title"> Take Assessment </span>

        <span class="right-header-text">
          Click the finish button below to submit assessment, you can go back at any time to edit
          your answers.
        </span>
      </span>
      <div class="timer">
        <h3 class="title">Timer</h3>
        <h4 class="time">
          <span class="hour">00</span><span class="mins">mins</span> <span class="secs">000</span
          ><span class="mins">sec</span>
        </h4>
      </div>
    </div>
    <div class="cards">


      <div class="questions">
    
          <p>Question 1</p>
          <h5>Whats the purpose of HDR technology?</h5>

         <!--  <div class="answers">
          
            <div class="answer-options">
              <input class="options" value="alphabet" type="radio" name="answers" />
              <span> A. To reduce the size of images and videos</span>
            </div>


          </div> -->
          <div class="checkbox">
            <label>
              <input value="alphabet" type="radio" name="answers" />
              <span>To reduce the size of images and videos</span>
            </label>
          </div>

          <div class="checkbox">
            <label>
              <input value="alphabet" type="radio" name="answers" />
              <span>To speed up 3D rendering performance</span>
            </label>
          </div>

          <div class="checkbox">
            <label>
              <input value="alphabet" type="radio" name="answers" />
              <span>To support higher video resolutions</span>
            </label>
          </div>

          <div class="checkbox">
            <label>
              <input value="alphabet" type="radio" name="answers" />
              <span>To display more colors in videos and images</span>
            </label>
          </div>

      </div>
    </div>
    <div class="nav-button-section">
      <div class="nav-buttons">
        <button class="preview" disabled @click="previous()">Previous</button>
        <button class="nextBtn" @click="next()">Next</button>
      </div>

      <div class="complete-assessment">
        <button
          class="finishButton"
          @click="
            stop();
            finish();
          "
        >
          Finish
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  gap: 150px;
  justify-content: space-between;
}

.right-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #2b3c4e;
}

.right-header-title {
  font-family: "Lato";
  color: #2b3c4e;
  font-size: 43.556px;
  /* font-weight: normal; */
  letter-spacing: -0.871px;
}

.right-header-text {
  font-family: "Lato";
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
}

.title {
  color: #4f4f4f;
  font-family: "Lato";
  font-size: 14px;
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

}

.time {
  font-family: "Lato";
  font-size: 48px;
  font-weight: 300;
}

.mins {
  color: #4f4f4f;
  font-family: "Lato";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
}

.cards {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
}
.questions{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.answer {
  display: flex;
  flex-direction: column;

}

/* .checkbox {
  text-align: center;
  padding: 0 30px;
} */


.answer-options{
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.nav-button-section {
  padding: 0px 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.nav-buttons {
  display: flex;
  flex-direction: row;
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

.complete-assessment {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.finishButton {
  height: 41px;
  width: 205px;
  background: #cecece;
  border-radius: 4px;
  border-radius: 4px;
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
}
.checkbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
