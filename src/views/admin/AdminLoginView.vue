<script setup>

</script>

<template>
  <div class="admin-login">
    <div class="notification" v-if="emptyFields">
      <AlertMessageComponent message="Fill Empty input fields!" />
    </div>
    <!-- <div class="notification" v-if="emptyFields">
      <AlertMessageComponent message="Incorrect email and password!" />
    </div> -->
    <div class="logo">
      <img class="img" src="src/assets/icons/logo2.png" alt="" />
      <h3>Admin Log In</h3>
    </div>

    <form class="login">
      <div class="email">
      <label for="">Email Address</label>
      <input type="text" v-model="emailValue">
        <!-- <span v-if="isEmailValid !== ''" class="alert"> Valid !🤗</span>
      <span v-else="isEmailValid">Please enter a valid email!</span> -->
    </div>
      <div class="page">
      <label for="">Password</label>
      <input type="password" v-model="passwordValue" class="password">
       <!-- <span v-if="checkPassword" class="alert">Good to Go!</span> -->
      <!-- <span v-else>Please Enter a valid password and must include a number, uppercase and a special charate</span> --> 
      <img src="src/assets/icons/eye.svg" alt="" class="eye">
    </div>
      <RouterLink class="button" to="/Admindashboard"
       @click="logAminIn">
      Sign In
      </RouterLink>


      <div class="Infor-class">
        <div>
          <!-- <div v-if="!buttonState">
            <ButtonComponent  id="custom-button_1" buttonText="Sign Up" />
          </div>
          
          <div v-else >
             <ButtonComponent @click="submit" id="custom-button_2" buttonText="Sign Up" />
          </div> -->

          <!-- <div>
            <ButtonComponent @click="submit" id="custom-button_2" buttonText="Sign Up" />
             <ButtonComponent @click="applicantSignup" id="custom-button_2" buttonText="Sign Up" /> -->
          <!-- </div>  -->
        </div>

        <div></div>

        <!-- <h4>
          Already have an account?<RouterLink to="/LogIn"><span>Sign In</span></RouterLink> -->
        <!-- </h4> -->
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
  right:10px;
  top:40px;
  color: #FFFFFF;
} 

.button{
  background:#FFFFFF;
  width: 379px;
height: 50px;
top: 8px;
text-align: center;
padding: 16px 150px;
color: #7557D3;
text-decoration: none;

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
