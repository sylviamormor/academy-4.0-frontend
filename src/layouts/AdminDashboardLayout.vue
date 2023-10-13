<script setup>
import { RouterLink, useRoute, RouterView } from 'vue-router';
const route = useRoute();
</script>

<template>
    <div class="layout">
        <div class="side-Navbar">
            <div class="sideNavigation">
                <div class="profileimg">
                    <img class="profile" src="@/assets/icons/adminprofile.svg" alt="profile picture" />
                    <div class="sideDetails">
                        <h1 class="profileName">Josh Doe</h1>
                        <p mailto:class="profile-gmail">j.doe@enyata.com</p>
                    </div>
                </div>

                <div class="sideNavbar-links">
                    <RouterLink class="links" :to="{ name: 'admindashboard' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/dashboard.svg" alt="" /></div>
                        <p class="link-text">Dashboard</p>
                    </RouterLink>

                      <RouterLink class="links" :to="{ name: 'createapp' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/create.svg" alt="" /></div>
                        <p class="link-text">Create Application</p>
                    </RouterLink> 

                     <RouterLink class="links" :to="{ name: 'applicationentries' }" active-class="active">
                            <div class="icons"><img src="@/assets/icons/application.svg" alt="" /></div>
                            <p class="link-text">Application Entries</p>
                        </RouterLink>
                    <RouterLink class="links" :to="{ name: 'composeassessment' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/compose.svg" alt="" /></div>
                        <p class="link-text">Compose Assessment</p>
                    </RouterLink>
                    <RouterLink class="links" :to="{ name: 'assessmentHistory' }" active-class="active">
                            <div class="icons"><img src="@/assets/icons/assssment.svg" alt="" /></div>
                            <p class="link-text">Assessment History</p>
                        </RouterLink>
                    <RouterLink class="links" :to="{ name: 'assessmentResult' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/results.svg" alt="" /></div>
                        <p class="link-text">Results</p>
                    </RouterLink>
                    <RouterLink class="links" :to="{ name: 'settings' }" active-class="active">
                        <div class="icons"><img src="@/assets/icons/settings.svg" alt="" /></div>
                        <p class="link-text">Settings</p>
                    </RouterLink>

                    <RouterLink class="links logout" :to="{ name: 'user' }">
                        <div class="icons"><img src="@/assets/icons/logout.svg" alt="" /></div>
                        <p class="link-text">Log Out</p>
                    </RouterLink>  
                </div>
            </div>
        </div>
        <div class="rightContent">
            <RouterView />
        </div> -->
    </div>
</template>


<style scoped>
.sideNavigation {

    width: 305px;
    font-family: 'Lato';
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);

}

.layout {
    display: grid;
    grid-template-columns: max-content max-content;
}

.profileimg{
    background-color: #7557D3;
    height: 255px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 13px;
    align-items: center;
    color: #fff;
}

.profile {
    width: 80px;
    border-radius: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sideDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    align-items: center;
}

.profileName {
    font-family: 'Lato';

    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: -0.4px;
}

.profile-gmail {
    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.32px;
}

.sideNavbar-links {
    display: flex;
    flex-direction: column;
    padding: 45px;
    gap: 28px;

}

.links {
    display: flex;
    gap: 21px;
    align-items: center;
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    color: #2B3C4E;
    text-align: center;

    line-height: normal;
}

.icons {
    height: 15.789px;
    width: 12px;
}

.logout {
    margin-top: 100px;
}

.rightContent {
    padding: 102px 47px;
}

.active {
    font-family: 'Lato';
    font-size: 16px;
    color: #2B3C4E;
    text-align: center;
    font-weight: 700;
    font-style: normal;
    border-left: 4px solid #7557D3;

}
</style>

