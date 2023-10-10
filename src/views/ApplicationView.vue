<script setup>
import { ref } from 'vue';
import axios from 'axios'
import ButtonComponent from '../components/ButtonComponent.vue';
import {RouterLink} from "vue-router";
const userInfo = ref({
firstName: '',
lastName: '',
emailAddress: '',
dateOfBirth: '',
address: "",
university: '',
course: '',
cgpa: '',
cv: null,
photo: null,
});

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
const onSubmit =() => {
    if(!userInfo.value === ""){
        alert('this field is required')
    }
};

const errors = ref({
    firstName: '',
    lastName: '',
    emailAddress: '',
    dateOfBirth: '',
    address: '',
    university: '',
    course: '',
    cgpa: '',
    cv: '',
    img: '',
});

const loading = ref(false);
const error = ref('');

const createUser = async () => {
    loading.value = true;
    const formData = new FormData();

    for (const key in user.value) {
        formData.append(key, user.value[key]);
    }

    try {
        const token = localStorage.getItem('token');
        const response = await axios.post('url', formData, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        });

        localStorage.removeItem('token');
        const { data } = response.data;
        localStorage.setItem('token', data.token);
        loading.value = false;

        if (data.details.applicant) {
            // Assuming you have a router instance set up
            // Use this.$router.push('/dashboard') to navigate
        } else {
            // Assuming you have a router instance set up
            // Use this.$router.push('/pre-dashboard') to navigate
        }
    } catch (err) {
        loading.value = false;
        error.value = err.response.data.message;
    }
};
</script>


<template>
     <div class="form-container"> 
    <div class="logo">
        <img src="../assets/icons/enyatalogo.png" alt="">
 <h2>Application Form</h2>
</div>
<div class="main">

    <div class="loader">
        <label class="uploader" for="file">+Upload CV</label>
        <input type="file" id="file" class="upload">
        <label class="uploader" for="file">+Upload Photo</label>
        <input type="file" id="file" class="upload">
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
    <input type="text" id="first" v-model="userInfo.first" required>
    <label for="email">Email</label>
    <input type="text" id="email" v-model="userInfo.email" required>
    <label for="address">Address</label>
    <input type="text" id="address" v-model="userInfo.address" required>
    <label for="course">Course Of Study</label>
    <input type="text" id="course" v-model="userInfo.course"  required>
</div>
    <div>
    <label for="last name">Lastname</label>
    <input type="text" id="last" v-model="userInfo.last" required>
    <label for="date of birth">Date of Birth</label>
    <input type="text" id="date" v-model="userInfo.date" placeholder="dd/mm/yyyy" required>
    <label for="university">University</label>
    <input type="text" id="uni" v-model="userInfo.uni" required>
    <label  for="CGPA">CGPA</label>
    <input type="text" id="CGPA" v-model="userInfo.CGPA" required>
</div>
</form>
</div>
  <div><RouterLink class="btn-btn" to="dashboard"><ButtonComponent button text='Submint'/></RouterLink></div>
</div>

</template>


<style scoped>

.main{
    background-color: #FFFFFF;

}

.loader{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
}

.upload{
      display: none;
    /* flex-direction: column;  */
    /* justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 30px;
    border-radius: 6px;
    border: 1px dashed black; */
}

.uploader{
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 211px;
height: 49.97px;
/* top: 328px
left: 494px */
border-radius: 2.87px;
border: 1.5px dashed #2B3C4E

}

.logo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0 94px 0;
}

.form-container{
    display: flex;
    flex-direction: column;
     /* width: 100%;
    height: 100vh;  */
    display:flex;
    align-items: center;
    justify-content: center; 
    margin: 0 auto;
    padding-top: 100px;
    /* background-color: aquamarine; */
}
.form{
    display:flex;
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

label{
    display: inline-block;
    letter-spacing: 1px;

font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color: #2B3C4E;
/* font-family: Lato; */   
}

input{
    display: block;
    padding: 10px;
    width: 379px;
height: 48px;
/* top: 432px
left: 300px */
border-radius: 4px;
border: 1.5px solid #2B3C4E;

    /* box-sizing: border-box; */
    /* width: 379px;  */
 /* height: 48px; */
/* border-radius: 4px;
border: 1.5px ; */
color: #2B3C4E;
}

input placeholder{
    color: #CECECE;
    /* font-family: Lato; */
font-size: 10px;
font-style: italic;
font-weight: 400;
line-height: 12px;
letter-spacing: 0em;
text-align: left;
}

.btn-btn{
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin-top: 43px;
    width: 379px;
height: 50px;
color: #FFFFFF;
/* top: 829px
left: 524px */

}


</style>