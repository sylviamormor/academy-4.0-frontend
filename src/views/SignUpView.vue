<script setup>
import ButtonComponent from "../components/ButtonComponent.vue";
import AlertMessageComponent from "../components/AlertMessageComponent.vue";
import { ref, computed } from "vue";
import { applicantSignup } from "../utils/data-utils";
// import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const phoneNumber = ref("");
const confirmPassword = ref("");


const existingAccount = ref(false);
const signUpState = ref(false);
const errorSignUpState = ref(false);
const errorState = ref(false);
const startValidation = ref(false);

const passwordFieldType = ref("password");

const visiblePassword = ref(false);



const  changeVisibility = () =>
  (passwordFieldType.value = passwordFieldType.value === "password" ? "text" : "password");


function reloadPage() {
  window.location.reload();
};


async function submit() {
  try {
    startValidation.value = true;

    if (
      isEmailValid.value &&
      !checkFirstName.value &&
      !checkLastName.value &&
      checkPassword.value &&
      isPasswordConfirmed.value &&
      isPhoneNumber.value
    ) {
      const data = {
        email: email.value,
        firstname: firstName.value,
        lastname: lastName.value,
        password: password.value,
        phonenumber: phoneNumber.value,
      };

      const response = await applicantSignup(data);

      if (response.status === 201) {

        signUpState.value = true;

        setTimeout(() => {
          signUpState.value = false;
        }, 2000);

        router.push("LogIn");

      } else if (response.status === 409) {
        // display error message

        existingAccount.value = true;

        setTimeout(() => {
          existingAccount.value = false;
        }, 4000);

        reloadPage();
      }
    } else {
      errorSignUpState.value = true;
      setTimeout(() => {
        errorSignUpState.value = false;
      }, 2500);
    }
  } catch (error) {

    errorState.value = true;
    setTimeout(() => {
      errorState.value = false;
    }, 4000);
    reloadPage();
    // console.log(error);

  }
}
const isEmailValid = computed(() => {
  return startValidation.value
    ? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    : null;
});

const checkPassword = computed(() => {
  return startValidation.value
    ? // ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value)
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value) &&
        password.value.length > 7
    : null;
});

const isPasswordConfirmed = computed(() => {
  return startValidation.value ? password.value === confirmPassword.value : null;
});

// check if the phone number
// is more than equal to 10 or more
// if it consists of numbers
const isPhoneNumber = computed(() => {
  return startValidation.value
    ? phoneNumber.value.length >= 10 && /^[0-9]*$/.test(phoneNumber.value)
    : null;
});

// check if the name has a number in it
const checkFirstName = computed(() => {
  //  return startValidation.value ? typeof firstName.value == "string" : null;

  return startValidation.value ? /\d/.test(firstName.value) : null;
});

// check if the name has a number in it
const checkLastName = computed(() => {
  return startValidation.value ? /\d/.test(lastName.value) : null;
});

</script>

<template>
  <div class="sectionTwo">
    <div v-if="errorSignUpState">
      <AlertMessageComponent message="Input fields cannot be empty!" />
    </div>
    <div v-if="existingAccount">
      <AlertMessageComponent message="The account already exists!" />
    </div>
    <div v-if="errorState">
      <AlertMessageComponent message="An error occured. Try again!" />
    </div>
    <div class="logo-Div">
      <img src="../assets/icons/Main-logo.svg" alt="" class="logo" />
      <h4>Applicant Sign Up</h4>
    </div>
    <div class="registration-form">
      <div class="Options">
        <div class="sectionInput">
          <label for="input">First Name</label>
          <input type="text" class="input-field" v-model="firstName" />
          <span v-if="checkFirstName && firstName !== ''" class="alert">
            Enter valid first name!</span
          >
        </div>
        <div class="sectionInput">
          <label for="input">Last Name</label>
          <input type="text" class="input-field" v-model="lastName" />
          <span v-if="checkLastName && lastName !== ''" class="alert"> Enter valid last name!</span>
        </div>
      </div>
      <div class="Options">
        <div class="sectionInput">
          <label for="input">Email Address</label>
          <input type="text" class="input-field" v-model="email" />
          <span v-if="startValidation && !isEmailValid && email !== ''" class="alert">
            Enter a valid email</span
          >
        </div>

        <div class="sectionInput">
          <label for="input">Phone Number</label>
          <input type="text" class="input-field" v-model="phoneNumber" />
          <span v-if="startValidation && !isPhoneNumber && phoneNumber != ''" class="alert">
            Enter a valid phone number!</span
          >
        </div>
      </div>

      <div class="Options">
        <div class="sectionInput">
          <label for="input">Password</label>
          <div class="password-input-field">
            <input :type="passwordFieldType" class="password-field"  v-model="password" />
            <v-icon v-if="visiblePassword" name="fa-regular-eye-slash" @click="changeVisibility" />
            <v-icon v-if="!visiblePassword" name="fa-regular-eye" @click="changeVisibility" />
          </div>

          <span v-if="startValidation && !checkPassword && password !== ''" class="alert">
            Password must have a number, uppercase and <br />
            lowecase letters and special characters<br />
            it must not be less than seven characters</span
          >
          <!-- <span @click="togglePasswordVisibility"><font-awesome-icon :icon="faEye" /></span> -->
        </div>

        <div class="sectionInput">
          <label for="input">Confirm Password</label>
          <div class="password-input-field">
            <input :type="passwordFieldType" class="password-field"  v-model="confirmPassword" />
            <v-icon v-if="visiblePassword" name="fa-regular-eye-slash" @click="changeVisibility" />
            <v-icon v-if="!visiblePassword" name="fa-regular-eye" @click="changeVisibility" />
          </div>
          <!-- <input type="password" class="input-field" v-model="confirmPassword" /> -->
          <span
            v-if="startValidation && !isPasswordConfirmed && confirmPassword !== ''"
            class="alert"
          >
            Passwords do not match!</span
          >
        </div>
      </div>
      <div class="Infor-class">
        <div>
          <!-- <div v-if="!buttonState">
            <ButtonComponent  id="custom-button_1" buttonText="Sign Up" />
          </div>
          
          <div v-else >
             <ButtonComponent @click="submit" id="custom-button_2" buttonText="Sign Up" />
          </div> -->

          <div>
            <ButtonComponent @click="submit" id="custom-button_2" buttonText="Sign Up" />
            <!-- <ButtonComponent @click="applicantSignup" id="custom-button_2" buttonText="Sign Up" /> -->
          </div>
        </div>

        <div></div>

        <h4>
          Already have an account?<RouterLink to="/LogIn"><span>Sign In</span></RouterLink>
        </h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sectionTwo {
  /* padding: 50px;
  font-family: Lato; */

  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo-Div {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
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

#custom-button_2 {
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
