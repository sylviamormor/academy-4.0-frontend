<script setup>
import { ref } from "vue";
import ButtonComponent from "../components/ButtonComponent.vue";
</script>

<template>
<section class="sectionThree">
<div class="logo-Div">
<img src="../assets/icons/Main-logo.svg" alt="" class="logo" />
<h4>Applicant Log In</h4>
</div>
<div class="registration-form">
<div class="Options">
<div class="sectionInput">
<label for="input">Email</label>
<input type="text" class="input-field" />
</div>
<div class="sectionInput">
<label for="input">Password</label>
<input type="text" class="input-field" />
</div>
</div>
</div>
<div class="Btn">
<RouterLink to="/application"
><ButtonComponent class="button-2" buttonText="Log In"
/></RouterLink>
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
.sectionThree {
padding: 100px;
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
</style>
