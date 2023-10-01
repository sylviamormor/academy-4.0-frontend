<script setup>
import { ref } from 'vue';
import axios from 'axios'

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
})

// upload files
const fileUpload = ref({
    cv: { accept:'file_extention',
      label: 'Upload CV'},
      photo: {
        accept:'jpg', 
        label: 'Upload Photo'
      }
})
// for catching errors
const onSubmit =() => {
    if(!userInfo.value === ""){
        alert('this field is required')
    }
}
</script>


<template>
     <div class="form-container"> 
    <div class="logo">
        <img src="../assets/icons/enyatalogo.png" alt="">
 <h2>Application Form</h2>
</div>
<div class="main">
        <div class="uploader">
         <div v-for ="(input,index) in fileUpload" :key="index">
            <input class="upload" type="file" :id="index"
            :name="index"
            :accept="input.accept">
            
        </div> 
    </div>
   
  
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
    <input type="text" id="date" v-model="userInfo.date" placeholde ="dd/mm/yy" required>
    <label for="university">University</label>
    <input type="text" id="uni" v-model="userInfo.uni" required>
    <label  for="CGPA">CGPA</label>
    <input type="text" id="CGPA" v-model="userInfo.CGPA" required>
</div>
</form>
</div>
</div>

</template>


<style scoped>

.main{
    background-color: #FFFFFF;

}

.upload{
     /* display: flex;
    flex-direction: column; */
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 30px;
    border-radius: 6px;
    border: 1px dashed black;
}

.uploader{
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center
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
;

    
}

input{
    display: block;
    padding: 10px;
    width: 300px;
    /* box-sizing: border-box; */
    /* width: 379px;  */
 /* height: 48px; */
/* border-radius: 4px;
border: 1.5px ; */
color: #2B3C4E;
}


</style>