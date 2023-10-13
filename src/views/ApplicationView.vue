<script setup>
import { ref, computed} from "vue";
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent.vue";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const dateOfBirth = ref("");
const address = ref("");
const university = ref("");
const course = ref("");
const cgpa = ref("");
const cv = ref("");
const photo = ref("");

// Assuming you have these error refs defined somewhere in your code
// const firstNameError = ref("");
// const lastNameError = ref("");
// const emailError = ref("");
// const dobError = ref("");
// const addressError = ref("");
// const universityError = ref("");
// const courseError = ref("");
// const gpaError = ref("");
// const cvError = ref(null);
// const photoError = ref(null);

// const clearError = (key) => {
//   // Use an object to map keys to error refs
//   const errorRefs = {
//     firstNameValue: firstNameError,
//     lastNameValue: lastNameError,
//     emailValue: emailError,
//     dateOfBirthValue: dobError,
//     addressValue: addressError,
//     universityValue: universityError,
//     courseValue: courseError,
//     cgpaValue: gpaError,
//     cvValue: cvError,
//     photoValue: photoError,
//   };

//   // Check if the key exists in the errorRefs object
//   if (errorRefs[key] !== undefined) {
//     // Clear the corresponding error value
//     errorRefs[key].value = null; // Assuming you want to set errors to null
//   } else {
//     // Handle the case where the key is not found
//     console.error(`Error: Unknown key '${key}'`);
//   }
// };


// const applicant = async () => {
//   try {
//     // Get the token from localStorage
//     const token = localStorage.getItem("token");

//     // Define the data to be sent in the POST request
//     const postData = {
//       first_Name: firstNameValue.value,
//       last_Name: lastNameValue.value,
//       cv_url: cvValue.value,
//       image_url: photoValue.value,
//       email: emailValue.value,
//       date_of_birth: dateOfBirthValue.value,
//       address: addressValue.value,
//       university: universityValue.value,
//       course: courseValue.value,
//       CGPA: cgpaValue.value,
//     };

//     // Create FormData for multipart/form-data content type
//     const formData = new FormData();
//     for (const key in postData) {
//       formData.append(key, postData[key]);
//     }

//     // Make the POST request using axios
//     const response = await axios.post(
//       "http://localhost:6001/api/v1/application/create",
//       formData,
//       {
//         headers: {
//           authorization: token,
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     // Log the response to the console
//     console.log("res", response);

//     // Extract relevant data from the response
//     const {
//       first_Name,
//       last_Name,
//       cv_url,
//       image_url,
//       email,
//       date_of_birth,
//       address,
//       university,
//       course,
//       cgpa,
//       status,
//       id,
//       user_id,
//     } = response.data.data;

//     // Create an object with the extracted data
//     const userDetails = {
//       first_Name,
//       last_Name,
//       cv_url,
//       image_url,
//       email,
//       date_of_birth,
//       address,
//       university,
//       course,
//       cgpa,
//       status,
//       id,
//       user_id,
//     };

//     // Save user details to localStorage
//     localStorage.setItem("userApplicationDetails", JSON.stringify(userDetails));
//     localStorage.setItem("userDetails", JSON.stringify(userDetails));

//     // Redirect to the dashboard route
//     router.push({ name: "dashboard" });
//   } catch (error) {
//     // Log any errors to the console
//     console.log(error);
//   }
// };


//  const applicantDetails = ref(false);

//  async function submit() {
//   try {
//      applicantDetails.value = true;
//      console.log("firstName", isFirstNameValid.value);
//      console.log("lastName", isLastNameValid.value)
//      console.log("email", isEmailValid.value);
//      console.log("dateOfBirth", isDateOfBirthValid.value);
//      console.log("address", isAddressValid.value);
//      console.log("university", iskUniversityValid.value);
//      console.log('course', isCourseValid.value);
//      console.log('cgpa', isCgpaValid.value);
//       console.log("cv", checkCv.value);
//       console.log("photo", checkPhoto.value);
//   };
  
      


// upload files
// const fileUpload = ref({
//     cv: { accept:'file_extention',
//       label: 'Upload CV'},
//       photo: {
//         accept:'jpg',
//         label: 'Upload Photo'
//       }
// })
// for catching errors
// const onSubmit = () => {
//   if (!userInfo.value === "") {
//     alert("this field is required");
//   }
// };
</script>

<template>
  <div class="form-container">
    <div class="logo">
      <img src="../assets/icons/enyatalogo.png" alt="" />
      <h2>Application Form</h2>
    </div>
    <div class="main">
      <div class="loader">
        <label class="uploader" for="file">+Upload CV</label>
        <input type="file" id="file" class="upload" />
        <label class="uploader" for="file">+Upload Photo</label>
        <input type="file" id="file" class="upload" />
      </div>
      <!-- <div class="uploader">
         <div v-for ="(input,index) in fileUpload" :key="index">
            <input class="upload" type="file" :id="index"
            :name="index"
            :accept="input.accept">
            
        </div> 
    </div> -->

      <form class="form" @submit.prevent="onSubmit">
        <div>
          <label for="first Name">First Name</label>
          <input type="text" id="first" v-model="firstName" required />
          <label for="email">Email</label>
          <input type="text" id="email" v-model="email" required />
          <label for="address">Address</label>
          <input type="text" id="address" v-model="address" required />
          <label for="course">Course Of Study</label>
          <input type="text" id="course" v-model="course" required />
        </div>
        <div>
          <label for="last name">Lastname</label>
          <input type="text" id="last" v-model="lastName" required />
          <label for="date of birth">Date of Birth</label>
          <input type="text" id="date" v-model="dateOfBirth" placeholder="dd/mm/yyyy" required />
          <label for="university">University</label>
          <input type="text" id="uni" v-model="university" required />
          <label for="CGPA">CGPA</label>
          <input type="text" id="CGPA" v-model="cgpa" required />
        </div>
      </form>
    </div>
    <div>
      <div class="btn-btn">
        <RouterLink  to="dashboard"
        ><ButtonComponent buttonText="Submit"
      /></RouterLink>
      </div>
     
      <!-- <div class="subText">Already have an account? <a id="sigIn" href="#">Sign In</a></div> -->
      <!-- <div class="subText">
        Already have an account? <RouterLink id="signIn" to="dashboard">Sign In</RouterLink>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.main {
  background-color: #ffffff;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.upload {
  display: none;
  /* flex-direction: column;  */
  /* justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 30px;
    border-radius: 6px;
    border: 1px dashed black; */
}

.uploader {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 211px;
  height: 49.97px;
  /* top: 328px
left: 494px */
  border-radius: 2.87px;
  border: 1.5px dashed #2b3c4e;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0 60px 0;
}

.form-container {
  display: flex;
  flex-direction: column;
  /* width: 100%;
    height: 100vh;  */
  /* display:flex; */
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  /* padding-top: 100px; */
  /* background-color: aquamarine; */
}
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 963px;
height: 643px;
top: 275px;
left: 239px; */
  border-radius: 8px;

  gap: 73px;
  /* padding-top: 100px; */
  margin: 0 auto;
  /* width: 700px;  */
  /* border-radius: 40px; */
  /* flex-direction: column; */
}

label {
  display: inline-block;
  letter-spacing: 1px;

  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #2b3c4e;
  /* font-family: Lato; */
}

input {
  display: block;
  padding: 10px;
  width: 379px;
  height: 48px;
  /* top: 432px
left: 300px */
  border-radius: 4px;
  border: 1.5px solid #2b3c4e;

  /* box-sizing: border-box; */
  /* width: 379px;  */
  /* height: 48px; */
  /* border-radius: 4px;
border: 1.5px ; */
  color: #2b3c4e;
}

input placeholder {
  color: #cecece;
  /* font-family: Lato; */
  font-size: 10px;
  font-style: italic;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
}

.btn-btn {
  padding-top: 50px;
  /* display: inline-block;
  justify-content: center;
  align-items: center;
  margin-top: 43px; */
  /* width: 50px;
  height: 50px;
  color: #ffffff; */
  /* top: 829px
left: 524px */
text-decoration: none;
}

btn-2{
  color: #ffffff;
}

.subText{
    padding: 30px;
    text-align: center;
}

#signIn{
    color: black;
}
</style>
