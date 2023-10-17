<script setup>
import { ref, computed } from "vue";
// import ButtonComponent from "../../components/ButtonComponent.vue";
import AlertMessageComponent from "../../components/AlertMessageComponent.vue";
import { adminSignIn } from "../../utils/data-utils";
// import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const startValidation = ref(false);
const errorState = ref(false);
const emptyFields = ref(false);

function reloadPage() {
  window.location.reload();
}

async function signIn() {
  try {
    startValidation.value = true;

    if (isEmailValid.value && checkPassword.value) {
      const data = {
        email: email.value,
        password: password.value,
      };

      const response = await adminSignIn(data);

      if (response.status === 200) {
        const { firstname, lastname, email, token } = response.data.data;

        const adminDetails = { firstname, lastname, email };

        localStorage.setItem("adminDetails", JSON.stringify(adminDetails));
        localStorage.setItem("adminToken", token);

        router.push("Admindashboard");
      } else if (response.status === 404) {
        errorState.value = true;
        setTimeout(() => {
          errorState.value = false;
        }, 4000);
      }
    }
  } catch (error) {
    // console.log(error);
    reloadPage();
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
      // /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value)
      password.value !== ""
    : null;
});
</script>

<template>
  <div class="admin-login">
    <div class="notification" v-if="emptyFields">
      <AlertMessageComponent message="Fill Empty input fields!" />
    </div>
    <div class="notification" v-if="errorState">
      <AlertMessageComponent message="Incorrect email and password!" />
    </div>
    <div class="logo">
      <img class="img" src="src/assets/icons/logo2.png" alt="" />
      <h3>Admin Log In</h3>
    </div>

    <form class="login">
      <div class="email">

        <label for="">Email Address</label>
        <input type="text" v-model="email" />
        <span v-if="startValidation && !isEmailValid && email !== ''" class="alert">
        Invalid Email
        </span>
      </div>
      <div class="page">
        <label for="">Password</label>
        <input type="password" class="password" v-model="password" />
        <img src="src/assets/icons/eye.svg" alt="" class="eye" />
      </div>
      <div class="button" @click="signIn">
        <!-- <RouterLink class="button" to="/Admindashboard">Sign In</RouterLink> -->
        Sign In
      </div>
    </form>
  </div>
</template>

<style scoped>
.admin-login {
  background-color: #7557d3;
  background-image: url("../src/assets/icons/desktopsvg.svg");
  background-repeat: no-repeat;
  background-position: right;
  height: 100vh;
  padding-top: 60px;

  margin: 0 auto;
}

input {
  color: white;
  padding: 20px;
}

.img {
  color: #ffffff;
  margin-bottom: 29px;
}

.logo {
  display: flex;
  flex-direction: column;
  padding-bottom: 58px;
}

.logo h3 {
  font-family: Lato;
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 29px;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.email {
  display: flex;
  flex-direction: column;
}

.page {
  position: relative;
}

label {
  display: block;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
  padding-bottom: 5px;
}

input {
  display: inline-block;
  background-color: transparent;
  width: 379px;
  height: 48px;
  /* top: 22px */
  border-radius: 4px;
  border: 1.5px solid #ffffff;
}

.password {
  position: relative;
}

.eye {
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 35px;
  color: #ffffff;
}

.button {
  background: #ffffff;
  width: 379px;
  height: 50px;
  top: 8px;
  text-align: center;
  padding: 16px 150px;
  color: #7557d3;
  text-decoration: none;
  cursor: pointer;
}

.alert {
  color: red;
  text-decoration-line: none;
  font-style: none;
}

.notification {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
