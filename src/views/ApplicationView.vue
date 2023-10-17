<script setup>
import { ref, computed } from "vue";
import { submitApplication } from "../utils/data-utils";
import { reloadPage } from "../utils/pageReload";
import ButtonComponent from "../components/ButtonComponent.vue";
import AlertMessageComponent from "../components/AlertMessageComponent.vue";
import LoadingComponent from "../components/LoadingComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const applicantInfo = localStorage.getItem("applicantDetails");
const { firstname, lastname, email } = JSON.parse(applicantInfo);

const token = localStorage.getItem("applicantToken");

const startValidation = ref(false);
const errorState = ref(false);
const emptyFields = ref(false);
const unauthorizedApplication = ref(false);
const invalidSelectedFiles = ref(false);
const loading = ref(false);

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

const file = ref("");
const cvFile = ref("");
const imageFile = ref("");

const onFileChanged = (event) => {
  const imageExtensions = ["image/png", "image/jpeg", "image/jpg"];
  file.value = event.target.files[0];
  const fileExtension = file.value.type;


  if (fileExtension === "application/pdf") {
    cv.value = file.value.name;
    cvFile.value = file.value;
  } else if (imageExtensions.includes(fileExtension)) {
    image.value = file.value.name;
    imageFile.value = file.value;
  } else {
    invalidSelectedFiles.value = true;
  }
};

// address, course of study, university cannot be empty
// cgpa must be numbers

// TODO: fix date of birth validators
function isDateFormatValid(date) {
  const pattern = /\d{1,2}[/]\d{1,2}[/]\d{4}/;
  return pattern.test(date);
}

function isDateValid(date) {
  const getDate = new Date();
  let currentYear = getDate.getFullYear();

  const splitDate = date.split("/");
  const day = parseInt(splitDate[0], 10);
  const month = parseInt(splitDate[1], 10);
  const year = parseInt(splitDate[2], 10);

  if (day !== 0 && day < 32) {
    if (month !== 0 && month < 13) {
      if (year <= currentYear) {
        return true;
      }
    }
  }
  return false;
}

const checkValidDate = computed(() => {
  return startValidation.value ? isDateFormatValid(dob.value) && isDateValid(dob.value) : null;
});

const checkCgpa = computed(() => {
  return startValidation.value ? typeof parseFloat(cgpa) === "number" : null;
});

async function submitForm() {
  try {
    startValidation.value = true;

    if (checkValidDate.value && checkCgpa.value && dob && university && course && cgpa && token) {

      const applicantData = {
        "firstname": firstName.value,
        "lastname": lastName.value,
        "email": applicantEmail.value,
        "dob": dob.value,
        "address": address.value,
        "university": university.value,
        "course": course.value,
        "cgpa": cgpa.value,
      };

      const formData = new FormData();


      formData.append("image", imageFile.value, image.value);
      formData.append("cv", cvFile.value, cv.value);

      for (const [key, value] of Object.entries(applicantData)) {
        formData.append(key, value);
      }

      loading.value = true;
      const response = await submitApplication(formData, token);

      if (response.status === 201) {
        loading.value = false;
        router.push("dashboard");
      } else {
        loading.value = false;
        unauthorizedApplication.value = true;
        setTimeout(() => {
          unauthorizedApplication.value = false;
        }, 2000);
      }
    } else {
      emptyFields.value = true;
      setTimeout(() => {
        emptyFields.value = false;
      }, 1500);
    }
  } catch (error) {
    // console.log(error);
    errorState.value = true;
    setTimeout(() => {
      errorState.value = false;
    }, 4000);
    // reloadPage();
  }
}
</script>

<template>
  <div class="form-container">
    <div class="notification" v-if="errorState">
      <AlertMessageComponent message="An error occured. Try again!" />
    </div>
    <div class="notification" v-if="unauthorizedApplication">
      <AlertMessageComponent message="Unauthorized Application!" />
    </div>
    <div class="logo">
      <img src="../assets/icons/enyatalogo.png" alt="" />
      <h2>Application Form</h2>
    </div>

    <form
      method="post"
      action="/apply/upload"
      enctype="multipart/form-data"
      class="form"
      @submit.prevent="onSubmit"
    >
      <div class="loader">
        <span class="cvSelected" v-if="cv !== ''">
          <label class="uploader" for="cv">+Upload CV</label>

          <input
            type="file"
            id="cv"
            @change="onFileChanged"
            class="upload"
            name="cv"
            accept="application/pdf"
          />
        </span>

        <label v-else class="uploader" for="cv">+Upload CV</label>

        <input
          type="file"
          id="cv"
          @change="onFileChanged"
          class="upload"
          name="cv"
          accept="application/pdf"
        />

        <div v-if="startValidation && cv === ''" class="alert">Select File</div>

        <!-- <input type="file" id="file" name="cv" accept="application/pdf" /> -->
        <span v-if="image !== ''" class="imageSelected">
          <label class="uploader" for="image">+Upload Photo</label>

          <input
            type="file"
            id="image"
            @change="onFileChanged"
            class="upload"
            name="image"
            accept="image/png, image/jpeg, image/jpg"
          />
        </span>

        <label v-else class="uploader" for="image">+Upload Photo</label>

        <input
          type="file"
          id="image"
          @change="onFileChanged"
          class="upload"
          name="image"
          accept="image/png, image/jpeg, image/jpg"
        />

        <div v-if="startValidation && image === ''" class="alert">Select an Image</div>

        <!-- <input type="file" id="file" name="image" accept="image/png, iamge/jpeg, image/jpg" /> -->
      </div>
      <div v-if="startValidation && invalidSelectedFiles" class="alert">Invalid File Format!</div>

      <div class="formInput">
        <div>
          <label for="first Name">First Name</label>
          <input type="text" id="first" v-model="firstName" readonly />
          <label for="email">Email</label>
          <input type="text" id="email" v-model="applicantEmail" readonly />

          <label for="address">Address</label>
          <input type="text" id="address" v-model="address" required />
          <div v-if="startValidation && address === ''" class="alert">Enter an Address</div>

          <label for="course">Course Of Study</label>
          <input type="text" id="course" v-model="course" required />
          <div v-if="startValidation && course === ''" class="alert">Enter the course of study</div>
        </div>
        <LoadingComponent v-if="loading" />
        <div>
          <label for="last name">Lastname</label>
          <input type="text" id="last" v-model="lastName" readonly />

          <label for="date of birth">Date of Birth</label>
          <input type="text" id="date" v-model="dob" placeholder="dd/mm/yyyy" required />
          <div v-if="startValidation && !checkValidDate" class="alert">
            Enter a valid Date of Birth
          </div>

          <label for="university">University</label>
          <input type="text" id="uni" v-model="university" required />
          <div v-if="startValidation && university === ''" class="alert">
            Enter a valid university name
          </div>

          <label for="CGPA">CGPA</label>
          <input type="text" id="CGPA" v-model="cgpa" required />
          <div v-if="startValidation && !checkCgpa && cgpa === ''" class="alert">Enter a cgpa</div>
        </div>
      </div>

      <div>
        <div class="submitButton">
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
.notification {
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 20px 0px 0px 0px;
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

.submitButton {
  padding-top: 20px;
}

.subText {
  padding: 15px;
  text-align: center;
}

#signIn {
  color: black;
}
.alert {
  color: red;
  text-decoration-line: none;
  font-style: none;
}

.cvSelected,
.imageSelected {
  border: solid rgb(24, 216, 24);
  padding: 4px;
  border-radius: 5px;
}
</style>
