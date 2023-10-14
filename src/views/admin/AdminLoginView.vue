<script setup>
import {ref, computed} from "vue"
import {RouterLink, useRouter} from "vue-router"
import axios from "axios"

// import useValidate from "@vuelidate/core"
// import {required} from "@vuelidate/validators"



const router = useRouter();
const emailValue = ref('')
const passwordValue = ref('')





// async function logAminIn() {
//     try {
//   // Get admin credentials from form fields
//   const credentials = {
//     email: emailValue.value,
//     password: passwordValue.value
//   };

//   // Make a POST request to the login endpoint
//   const response = await axios.post(
//     "http://localhost:7000/api/v1",
//     credentials,
//     {
//       headers: {
//         authorization: localStorage.getItem("token")
//       }
//     }
//   );

//   // Log the response data to the console
//   console.log("res", response.data);

//   // Extract relevant user data from the response
//   const { firstName, lastName, id, role, email } = response.data.data;

//   // Create a user object with the extracted data
//   const user = { firstName, lastName, id, role, email };

//   // Storing the authentication token and user details to the localStorage
//   localStorage.setItem("token", response.data.data.token);
//   localStorage.setItem("adminDetails", JSON.stringify(user));

//   // This takes you to the admin dashboard route
//   router.push({ name: "admindashboard" });
// } catch (error) {
//   // Log any errors to the console
//   console.log(error);
// }
//   }

//     startValidation.value = true;
    


//     if (
//       isEmailValid.value &&
//       checkPassword.value 
      
//     ) {
//       const data = {
//         email: email.value,
//         password: password.value,
//       };

//       const response = await adminLogin(data);
//       console.log(response);
//       if (response.status === 201) {
//         console.log(response);
//         router.push("adminDashbord");
//       } else {
//         // display error message
//         console.log(response);
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     // console.log(response);
//     // return response;
//     // //if(response){}
//   }
// }
// const isEmailValid = computed(() => {
//   return startValidation.value
//     ? /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailValue.value)
//     : null;
// });

// const checkPassword = computed(() => {
//   return startValidation.value
//     ? // ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password.value)
//       /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(passwordValue.value)
//     : null;
// });

</script>



<template>
  <div class="admin-login">
    <div class="logo">
      <img class="img" src="src/assets/icons/logo2.png" alt="">
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
  background-color: #7557D3;
  background-image: url("../src/assets/icons/desktopsvg.svg");
  background-repeat: no-repeat;
  background-position: right;
  height: 100vh;
  padding-top: 200px;
  
   margin: 0 auto; 
}

.img{
  color: #FFFFFF;
  margin-bottom: 29px;
}

.logo{
  display: flex;
  flex-direction: column;
  padding-bottom: 58px;
}

.logo h3{
  font-family: Lato;
font-size: 24px;
font-style: italic;
font-weight: 500;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
}

.login {
  display: flex;
  flex-direction: column;
   align-items: center;
  justify-content: center; 
  gap: 29px;
}

.logo{
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
}

.email{
  display: flex;
  flex-direction: column;
}

.page{
  position: relative;
}

label{
  display: block;
  font-family: Lato;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
padding-bottom: 5px;
}

input{
  display: inline-block;
  background-color: transparent;
  width: 379px;
height: 48px;
/* top: 22px */
border-radius: 4px;
border: 1.5px solid #FFFFFF;

}

.password{
  position: relative;
}

 .eye{
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
</style>