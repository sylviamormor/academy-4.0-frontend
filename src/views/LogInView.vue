<script setup>
import { ref, computed } from "vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import AlertMessageComponent from "../components/AlertMessageComponent.vue";
import { applicantLogIn } from "../utils/data-utils";
// import axios from "axios";
import { useRouter } from "vue-router";

import { reloadPage } from "../utils/pageReload";

const router = useRouter();

const email = ref("");
const password = ref("");

const startValidation = ref(false);
const errorState = ref(false);
const emptyFields = ref(false);
const logInState = ref(false);


const passwordFieldType = ref("password");

const visiblePassword = ref(false);



const  changeVisibility = () =>
  (passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password");



async function logIn() {
  try {
    startValidation.value = true;

    if (isEmailValid.value && checkPassword.value) {
      const data = {
        email: email.value,
        password: password.value,
      };

      const response = await applicantLogIn(data);

      if (response.status === 200) {

        const { firstname, lastname, email, token } = response.data.data;

        const applicantDetails = { firstname, lastname, email };

        localStorage.setItem("applicantDetails", JSON.stringify(applicantDetails));
        localStorage.setItem("applicantToken", token);

        logInState.value = true;

        setTimeout(() => {
          logInState.value = false;
        }, 2000);

        router.push("application");
      }
    } else {
      emptyFields.value = true;
      setTimeout(() => {
        emptyFields.value = false;
      }, 1500);
    }
  } catch (error) {
    errorState.value = true;
    setTimeout(() => {
      errorState.value = false;
    }, 4000);
    reloadPage();
    // return response;
    // //if(response){}
  }
}

const isEmailValid = computed(() => {
  return startValidation.value
    ? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    : null;
});

const checkPassword = computed(() => {
  return startValidation.value ? password.value !== "" : null;
});
</script>

<template>
  <section class="sectionThree">
    <div class="notification" v-if="errorState">
      <AlertMessageComponent message="An error occured. Try again!" />
    </div>
    <div class="notification" v-if="emptyFields">
      <AlertMessageComponent message="Fill Empty input fields!" />
    </div>
    <div class="logo-Div">
      <img src="../assets/icons/Main-logo.svg" alt="" class="logo" />
      <h4>Applicant Log In</h4>
    </div>
    <div class="registration-form">
      <div class="Options">
        <div class="sectionInput">
          <label for="input">Email Address</label>
          <input type="text" class="input-field" v-model="email" />
          <span v-if="startValidation && !isEmailValid && email !== ''" class="alert">
            Enter a valid email
          </span>
        </div>
        <div class="sectionInput">
          <label for="input">Password</label>
          <div class="password-input-field">
            <input :type="passwordFieldType" class="password-field" v-model="password" />
            <v-icon v-if="visiblePassword" name="fa-regular-eye-slash" @click="changeVisibility" />
            <v-icon v-if="!visiblePassword" name="fa-regular-eye" @click="changeVisibility" />
          </div>

          <span v-if="startValidation && !checkPassword && password !== ''" class="alert">
            Password must have a number, uppercase and <br />
            lowecase letters and special characters</span
          >
        </div>
      </div>
    </div>

    <div class="Btn">
      <ButtonComponent @click="logIn" class="button-2" buttonText="Log In" />
    </div>
    <div class="contents">
      <h4>
        Don’t have an account yet?<RouterLink to="/SignUp"><span>Sign Up</span></RouterLink>
      </h4>
      <h4>Forgot Password?</h4>
    </div>
    <!-- <RouterLink to="application">up</RouterLink> -->
  </section>
</template>

<style scoped>
.notification {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sectionThree {
  padding: 50px;
}
.logo-Div {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 24px;
}

.logo {
  max-width: 110.103px;
  max-height: 20.845px;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  margin: 0 auto;
}
.logo-Div h4 {
  color: #2b3c4e;
  font-family: Lato;
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
  line-height: normal;
  text-align: center;
}

.registration-form {
  padding-top: 68.58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
}
label {
  color: #4f4f4f;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.sectionInput {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.Options {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.input-field {
  width: 379px;
  height: 48px;
  border-radius: 4px;
  border: 1.5px solid #bdbdbd;
}

.contents {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 71px;
  padding-top: 12px;
}
.contents h4 {
  color: #4f4f4f;
  font-family: Lato;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
}

span {
  color: #1a2c56;
  font-family: Lato;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
}

.button-2 {
  margin: 0 auto;
  width: 379px;
}

.Btn {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  padding: 20px;
}

.alert {
  color: red;
  text-decoration-line: none;
  font-style: none;
}

.password-input-field{
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: 1.5px solid #bdbdbd;
  width: 379px;
  height: 48px;
  flex-shrink: 0;

}
.password-field{
  border: none;
  outline: none;
  height: 20px;
  width: 320px;
}
</style>
