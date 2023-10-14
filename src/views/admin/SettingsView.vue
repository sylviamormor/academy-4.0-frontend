<script setup>
import { ref } from 'vue';
import DashboardHeaderComponent from '../../components/DashboardHeaderComponent.vue';
import ApplicantProfileComponent from '../../components/ApplicantProfileComponent.vue'
import TimerComponent from '../../components/TimerComponent.vue';

const activeTab = ref('profile');
const changeTab = (tab) => {
    activeTab.value = tab;
};
</script>

<template>
    <div class="main">

        <div class="sectionOne">
            <DashboardHeaderComponent cardTitle="Profiles and Settings" cardText="Helps you set admin profile and give other users permissions"/>


            <div class="about-center section-center">
                <article class="about">

                    

                    <div class="button">
                        <button class="tabButton" :class="{ active: activeTab === 'profile' }"
                            @click="changeTab('profile')">Admin Profile</button>

                        <button class="tabButton" :class="{ active: activeTab === 'timer' }"
                            @click="changeTab('timer')">Timer Settings</button>
                    </div>

                    <div class="aboutSection">
                        <!-- single item -->
                        <div  v-show="activeTab === 'profile'">
                            <ApplicantProfileComponent />
                        </div>

                        <div class="content" v-show="activeTab === 'timer'">
                            <TimerComponent />
                        </div>
                       
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>



<style scoped>
.main{
    padding: 60px 47px;
    height: 100vh;
    /* overflow-y: scroll; */
}
.sectionOne{
    display: flex;
    flex-direction: column;
    gap: 47px;
    max-width: 763px;
    
}
    .tabButton{
        color: #333758;
        font-family: 'Lato';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding: 24px 50px;
        border: none;
        background-color: transparent;
    }
    .active{
        background: rgba(117, 87, 211, 0.10);
    }
</style>