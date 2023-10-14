<script setup>
import DeclineModalComponent from './DeclineModalComponent.vue';
import ApproveModalComponent from './ApproveModalComponent.vue';
import { ref, computed } from "vue";
const showDeclineModal = ref(false);
const showApproveModal = ref(false);
</script>

<template>
    <div class="main-container">
        <div class="approveComponent" v-if="showApproveModal" @closeModal="showApproveModal = false">
            <ApproveModalComponent />
        </div>
        <div class="declineComponent" v-if="showDeclineModal" @closeModal="showDeclineModal = false">
            <DeclineModalComponent />
        </div>
        <div v-if="!showApproveModal && !showDeclineModal" class="application-entries">
            <div class="profile-picture">
                <img src="" alt="app profile picture" />
            </div>
            <p class="modal-text">Personal Details</p>
            <hr />
            <div class="main-form">
                <div class="aprrove-container">
                    <div class="form-group">
                        <label for="">Name</label>
                        <input placeholder="Ify Chinke" value="fullName" type="text" readonly />
                    </div>
                    <div class="form group">
                        <label for="">Address</label>
                        <input placeholder="3 Sabo Ave, Yaba, Lagos" value="applicant.address" type="text" readonly />
                    </div>
                    <div class="form-group">
                        <label for="">Course of study</label>
                        <input placeholder="Computer Science" value="applicant.course" type="text" readonly />
                    </div>
                    <div class="form-group">
                        <label for="">CGPA</label>
                        <input placeholder="5.0" value="applicant.cgpa" type="text" readonly />
                    </div>
                    <div class="form-group">
                        <label for="">Email</label>
                        <input mailto:placeholder="ify@enyata.com" value="applicant.emailAddress" type="text" readonly />
                    </div>
    
                    <div class="form-group">
                        <label for="">University</label>
                        <input placeholder="University of Nigeria Nsukka" value="applicant.university" type="text" readonly />
                    </div>
    
                    <div class="form-group">
                        <label for="">Date of birth</label>
                        <input placeholder="12/09/19 - 22" value="applicantDate" type="text" readonly />
                    </div>
                    <div class="form-group">
                        <label for="">CV</label>
                        <input value="applicant.cv" type="text" />
                    </div>

                </div>
                
                
                <div class="btn-container">
                    
                    <button class="btn-approve" @click="showApproveModal = true">
                        Approve
                    </button>

                    <button class="btn-decline" @click="showDeclineModal = true">
                        Decline
                    </button>
                </div>
            </div>

        </div>

    </div>
</template>



<style scoped>
.main-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 155vh;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(3, 17, 49, 0.2);
    backdrop-filter: blur(4px);
}



.application-entries {
    width: 600px;
    background: #ffffff;
    padding: 95px 58px 145px 48px;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
}

.profile-picture {
    width: 179px;
    height: 179px;
    margin-bottom: 42px;
    background-color: #7557d3;
    display: flex;
    flex-direction: column;
}

.modal-text {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #7d7d7d;
    margin-bottom: 14px;
}

hr {
    width: 498px;
    height: 1px;
    background: #f2f2f2;
    margin-bottom: 32px;
    border: none;
}
.aprrove-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
}
.main-form {
    display: flex;
    flex-direction: column;
}
.form-group{
    margin: 0;
}

.main-form label {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #b1b1b1;
}

.main-form input {
    width: 231px;
    height: 48px;
    border-radius: 4px;
    margin-bottom: 36px;
    border: 1px solid #cdcfd6;
    border-radius: 4px;
}

.main-form button {
    width: 125px;
    height: 48px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    border-radius: 4px;
    cursor: pointer;
}

.btn-container{
    display: flex;
    gap: 25px;
}

.btn-approve {
    background: #7557d3;
    color: #ffffff;
    border: 1px solid #cdcfd6;
    margin-left: 115px;
}

.btn-decline {
    color: #4f4f4f;
    border: 1px solid #cecece;
    background: #ffffff;
}

input {
    padding: 14px 18px;
}

img {
    width: 100%;
    height: 100%;
}

.status-approved {
    color: #31d283;
}

.status-declined {
    color: red;
}

.status {
    text-align: center;
}

.approveComponent,
.declineComponent {
    display: flex;
    align-items: center;
    margin: 0 auto;
}
</style>