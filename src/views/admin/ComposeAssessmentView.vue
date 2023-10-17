<script setup>
import { ref } from "vue";
import axios from "axios";
import DashboardHeaderComponent from "../../components/DashboardHeaderComponent.vue";
</script>

<template>
  <div class="container">
    <DashboardHeaderComponent cardTitle="Compose Assessment" />
    <form @submit.prevent="">
      <label>1/30</label>

      <input class="fUpload" type="file" id="file" />
      <p>{{ fileError }}</p>
      <label class="fLabel" for="file"> + Choose file</label>

      <div class="forms">
        <label>Questions</label>
        <textarea name="" class="textSec" id=""></textarea>
      </div>

      <div class="formContainer">
        <div class="forms">
          <label class="fLabel-ans ans">Option A</label>
          <input class="formInput" />
        </div>
        <div class="forms">
          <label class="fLabel-ans ans">Option B</label>
          <input class="formInput" />
        </div>

        <div class="forms">
          <label class="fLabel-ans ans">Option C</label>
          <input class="formInput" />
        </div>
        <div class="forms">
          <label class="fLabel-ans ans">Option D</label>
          <input class="formInput" />
        </div>

        <p>{{ derror }}</p>
      </div>
      <div class="allButtons">
        <button class="next">Previous</button>
        <button class="next">Next</button>
      </div>
      <div class="bFinish">
        <button class="finish">Finish</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  padding: 60px 47px;
  height: 100vh;
  overflow-y: scroll;
}
p {
  color: red;
  font-size: 10px;
  text-align: start;
  padding-top: 5px;
}

input {
  padding: 10px;
}

.correctAns {
  background: #31d283;
}

.ans {
  cursor: pointer;
  padding: 4px;
}

.ans:hover {
  background: #31d283;
}

.container-text {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  padding-bottom: 92px;
  align-self: flex-start;
}

.forms {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.fLabel {
  width: 456px;
  height: 108px;
  border: 1.55172px dashed #2b3c4e;
  border-radius: 6.2069px;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2b3c4e;
}

.fLabel-ans{
  width: 456px;
  height: 50px;
  border: 1.55172px dashed #2b3c4e;
  border-radius: 6.2069px;
  text-align: center;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2b3c4e;

}


.fUpload {
  display: none;
}

.formContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px 64px;
  margin-top: 48px;
  width: 100%;
}

.formInput {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.formInput {
  border: 1.5px solid #2b3c4e;
  height: 41px;
  width: 456px;
  border-radius: 4px;
}

.fLabel {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}

.textSec {
  height: 144px;
  width: 976px;
  border: 1.5px solid #2b3c4e;
  border-radius: 4px;
  resize: none;
  padding: 10px;
}

.allButtons {
  display: flex;
  justify-content: space-between;
}

.next {
  border: none;
  color: white;
  background: #2b3c4e;
  height: 41px;
  width: 125px;
  border-radius: 4px;
  cursor: pointer;
}

.finish {
  background: #cecece;
  height: 41px;
  width: 205px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  border: none;
}

.bFinish {
  text-align: center;
  margin-top: 40px;
}
</style>