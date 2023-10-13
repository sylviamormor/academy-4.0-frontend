<script setup>
import { ref, computed } from "vue";
import moment from "moment";
import { submitApplication } from "../utils/data-utils";
import { reloadPage } from "../utils/pageReload";
import ButtonComponent from "../components/ButtonComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();


const applicantInfo = localStorage.getItem("applicantDetails");
const { firstname, lastname, email } = JSON.parse(applicantInfo);

const startValidation = ref(false);
const errorState = ref(false);
const emptyFields = ref(false);
const applicationState = ref(false);

const firstName = ref(firstname);
const lastName = ref(lastname);
const applicantEmail = ref(email);

// dob date of birth
const dob = ref("");
const address = ref("");
const university = ref("");
const course = ref("");
const cgpa = ref("");
const cv = ref("");
const image = ref("");

function isDateFormatValid(date) {
  const pattern = /\d{1,2}[/]\d{1,2}[/]\d{4}/;
  return pattern.test(date);
}

function isDateValid(date) {
  const currentYear = moment().year();

  const splitDate = date.split("/");
  const day = parseInt(splitDate[0], 10);
  const month = parseInt(splitDate[1], 10);
  const year = parseInt(splitDate[2], 10);

  if (day > 0 && day < 32) {
    if (month > 1 && month < 13) {
      if (year <= currentYear) {
        return true;
      }
    }
  }
  return false;
}

// address, course of study, university cannot be empty
// cgpa must be numbers

const checkValidDate = computed(() => {
  return startValidation.value ? isDateFormatValid(dob.value) && isDateValid(dob.value) : null;
});

const checkCgpa = computed(() => {
  return startValidation.value ? typeof parseFloat(cgpa) === "number" : null;
});

async function submitForm() {
  try {
    startValidation.value = true;
    console.log("check date", checkValidDate.value);
    console.log("email", checkCgpa.value);

    if (checkValidDate.value && checkValidDate.value) {
      const data = {
        dob: dob,
        address: address,
        university: university,
        course: course,
        cgpa: cgpa,
      };

      const response = await submitApplication(data);

      console.log(response);
      if (response.status === 200) {
        console.log(response.data.data);

        const { firstname, lastname, email, token } = response.data.data;

        const applicantDetails = { firstname, lastname, email };

        localStorage.setItem("applicantDetails", JSON.stringify(applicantDetails));
        localStorage.setItem("applicantToken", token);

        applicationState.value = true;

        setTimeout(() => {
          applicationState.value = false;
        }, 2000);

        router.push("dashboard");
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
    console.log(error);
    // console.log(response);
    // return response;
    // //if(response){}
  }
}
</script>

<template>
  <div class="form-container">
    <div class="logo">
      <img src="../assets/icons/enyatalogo.png" alt="" />
      <h2>Application Form</h2>
    </div>

    <form method="post" enctype="multipart/form-data" class="form" @submit.prevent="onSubmit">
      <div class="loader">
        <label class="uploader" for="cv">+Upload CV</label>

        <input type="file" id="cv" class="upload" name="cv" accept="application/pdf" />

        <!-- <input type="file" id="file" name="cv" accept="application/pdf" /> -->

        <label class="uploader" for="image">+Upload Photo</label>

        <input
          type="file"
          id="image"
          class="upload"
          name="image"
          accept="image/png, image/jpeg, image/jpg"
        />

        <!-- <input type="file" id="file" name="image" accept="image/png, iamge/jpeg, image/jpg" /> -->
      </div>

      <div class="formInput">
        <div>
          <label for="first Name">First Name</label>
          <input type="text" id="first" v-model="firstName" required />
          <label for="email">Email</label>
          <input type="text" id="email" v-model="applicantEmail" required />

          <label for="address">Address</label>
          <input type="text" id="address" v-model="address" required />
          <span v-if="startValidation && address === ''" class="alert"> Enter an Address </span>

          <label for="course">Course Of Study</label>
          <input type="text" id="course" v-model="course" required />
          <span v-if="startValidation && course === ''" class="alert">
            Enter the course of study
          </span>
        </div>

        <div>
          <label for="last name">Lastname</label>
          <input type="text" id="last" v-model="lastName" required />

          <label for="date of birth">Date of Birth</label>
          <input type="text" id="date" v-model="dob" placeholder="dd/mm/yyyy" required />
          <span v-if="startValidation && !checkValidDate" class="alert">
            Enter a valid Date of Birth
          </span>

          <label for="university">University</label>
          <input type="text" id="uni" v-model="university" required />
          <span v-if="startValidation && university === ''" class="alert"> Enter an Address </span>

          <label for="CGPA">CGPA</label>
          <input type="text" id="CGPA" v-model="cgpa" required />
          <span v-if="startValidation && !checkCgpa && cgpa === ''" class="alert">
            Enter a cgpa
          </span>
        </div>
      </div>

      <div>
        <div class="btn-btn">
          <!-- <RouterLink to=><ButtonComponent @click="dashboard" buttonText="Submit" /></RouterLink> -->
          <ButtonComponent @click="submitForm" buttonText="Submit" />
        </div>

        <!-- <div class="subText">Already have an account? <a id="sigIn" href="#">Sign In</a></div> -->
        <div class="subText">
          Already have an account? <RouterLink id="signIn" to="SignUp">Sign In</RouterLink>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.main {
  background-color: #ffffff;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loader {
  display: flex;
  gap: 32px;
}

.upload {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 30px;
  border-radius: 6px;
  border: 1px dashed black;
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
  padding: 20px 0 40px 0;
}

.form {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  border-radius: 8px;

  gap: 30px;
  margin: 0 auto;
}

.formInput {
  display: flex;
  flex-direction: row;
  gap: 30px;
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
  color: #2b3c4e;
}

input placeholder {
  color: #cecece;
  font-size: 10px;
  font-style: italic;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
}

.btn-btn {
  padding-top: 20px;
}

.subText {
  padding: 15px;
  text-align: center;
}

#signIn {
  color: black;
}
</style>
