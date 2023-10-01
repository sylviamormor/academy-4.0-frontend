<script setup>
import ButtonComponent from '../components/ButtonComponent.vue';
import { ref } from 'vue';
// import { faEye } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const showPassword = ref(false);
function togglePasswordVisibility() {
      showPassword.value = !showPassword.value;
    }
</script>


<template>
    <section class="sectionTwo">
            <div class="logo-Div">
                <img src="../assets/icons/Main-logo.svg" alt="" class="logo"/> 
                <h4>Applicant Sign Up</h4>
            </div>
        <div class="registration-form">
            <div class="Options">
                <div class="sectionInput">
                    <label for="input">First Name</label>
                    <input type="text" class="input-field">
                </div>
                <div class="sectionInput">
                    <label for="input">Last Name</label>
                    <input type="text" class="input-field" >
                </div>
            </div>
            <div class="Options">
                <div class="sectionInput">
                    <label for="input">Email Address</label>
                    <input type="text" class="input-field">
                </div>
                <div class="sectionInput">
                    <label for="input">Phone Number</label>
                    <input type="text" class="input-field">
                </div>
            </div>
            <div class="Options">
                <div class="sectionInput">
                    <label for="input">Password</label>
                    <input :type="showPassword ? 'text' : 'password'" class="input-field">
                    <span @click="togglePasswordVisibility"><font-awesome-icon :icon="faEye" /></span>
                </div>
                <div class="sectionInput">
                    <label for="input">Confirm Password</label>
                    <input :type="showPassword ? 'text' : 'password'" class="input-field">
                    <span @click="togglePasswordVisibility">
      <font-awesome-icon :icon="faEye" />
    </span>
                </div>
            </div>
        </div>
        <div class="Infor-class">

     <div class="Btn-class"><RouterLink to="/LogIn"><ButtonComponent id="custom-button_1" buttonText = 'Sign Up'/></RouterLink></div>
         <h4>Already have an account?<RouterLink to="/LogIn"><span>Sign In</span></RouterLink></h4>
        </div>
    </section>
</template>



<style scoped>
.sectionTwo{
    padding-top: 229.58px;   
  padding-right: 630px;  
  padding-bottom: 276px;
  padding-left: 631px; 
  font-family: Lato;
  
}
.logo-Div{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 24px;
}

.logo{
    max-width: 110.103px;
    max-height: 20.845px;
    width: 100%;
    height: 100%;
     flex-shrink: 0;
     margin: 0 auto;
}
.logo-Div h4{
    color: #2B3C4E;
font-family: Lato;
font-size: 24px;
font-style: italic;
font-weight: 500;
line-height: normal;
text-align: center;
}

.registration-form{
    padding-top: 90.58px;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:15px;
}

label{
    color: #4F4F4F;
font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.sectionInput{
    
    display: flex;
    flex-direction: column;
    gap: 5px;

}

.Options{
    display: flex;
    gap: 62px;
}


.input-field{
    border-radius: 4px;
border: 1.5px solid #BDBDBD;
width: 379px;
height: 48px;
flex-shrink: 0;
}

.Infor-class{
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    gap: 10px;
}

.Btn-class{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#custom-buton_1{
    color: #FFF;
font-family: Lato;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 0 auto;
}




.Infor-class h4{
    color: #4F4F4F;
font-family: Lato;
font-size: 14px;
font-style: italic;
font-weight: 400;
line-height: normal;
text-align: center;
}

span{
    color: #1A2C56;
font-family: Lato;
font-size: 14px;
font-style: italic;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
}

</style>