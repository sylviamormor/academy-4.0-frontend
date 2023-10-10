<script setup>
import ButtonComponent from "../components/ButtonComponent.vue";
import { ref } from "vue";
// import { faEye } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const showPassword = ref(false);
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const phoneNumber = ref("");
const confirmPassword = ref("");

//TODO form validators component
// sign up
// log in
// application

const buttonState = ref(false);

if (
  firstName.value === true &&
  lastName.value === true &&
  email.value === true &&
  password.value === true &&
  phoneNumber.value === true &&
  confirmPassword.value === true
) {
  buttonState.value = true;
}
</script>

<template>
  <section class="sectionTwo">
    <div class="logo-Div">
      <img src="../assets/icons/Main-logo.svg" alt="" class="logo" />
      <h4>Applicant Sign Up</h4>
    </div>
    <div class="registration-form">
      <div class="Options">
        <div class="sectionInput">
          <label for="input">First Name</label>
          <input type="text" class="input-field" v-model="firstName" />
          <span v-if="!firstName" class="alert"> Enter first name!</span>
        </div>
        <div class="sectionInput">
          <label for="input">Last Name</label>
          <input type="text" class="input-field" v-model="lastName" />
        </div>
      </div>
      <div class="Options">
        <div class="sectionInput">
          <label for="input">Email Address</label>
          <input type="text" class="input-field" v-model="email" />
        </div>
        <div class="sectionInput">
          <label for="input">Phone Number</label>
          <input type="text" class="input-field" v-model="phoneNumber" />
        </div>
      </div>
      <div class="Options">
        <div class="sectionInput">
          <label for="input">Password</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            class="input-field"
            v-model="password"
          />
          <span @click="togglePasswordVisibility"><font-awesome-icon :icon="faEye" /></span>
        </div>
        <div class="sectionInput">
          <label for="input">Confirm Password</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            class="input-field"
            v-model="confirmPassword"
          />
          <span @click="togglePasswordVisibility">
            <font-awesome-icon :icon="faEye" />
          </span>
        </div>
      </div>
      <div class="Infor-class">
        <div v-if="buttonState === false">
          <ButtonComponent id="custom-button_1" buttonText="Sign Up" />
        </div>

        <div>
          <RouterLink to="/LogIn">
            <ButtonComponent id="custom-button_2" buttonText="Sign Up"
          /></RouterLink>
        </div>

        <h4>
          Already have an account?<RouterLink to="/LogIn"><span>Sign In</span></RouterLink>
        </h4>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sectionTwo {
  padding: 120px;
  font-family: Lato;
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
  /* padding: 20px;  */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
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
  gap: 62px;
}

.input-field {
  border-radius: 4px;
  border: 1.5px solid #bdbdbd;
  width: 379px;
  height: 48px;
  flex-shrink: 0;
}

.Infor-class {
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  gap: 10px;
}

#custom-button_1 {
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 auto;
}

#custom-button_2{
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 auto;
  cursor: pointer;
}

.Infor-class h4 {
  color: #4f4f4f;
  font-family: Lato;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  text-align: center;
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

input {
  padding: 20px;
}

.alert {
  color: red;
}
</style>
