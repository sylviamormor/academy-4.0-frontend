<script setup>
import { RouterLink, useRoute, RouterView } from "vue-router";
// const route = useRoute();
</script>

<template>
  <div class="layout">
    <div class="sidebar">
      <div class="sidenav">
        <div class="profile">
          <img class="profile-img" src="@/assets/icons/userprofile.png" alt="profile picture" />
          <div class="details">
            <h1 class="profile-name">Adwoa Amponsah</h1>
            <p class="profile-mail">adwoaAmp@gmail.com</p>
          </div>
        </div>
        

        <div class="sidenav-links">
          <RouterLink class="links" :to="{ name: 'admindashboard' }" active-class="active">
            <div class="icons"><img src="../assets/icons/clock.svg" alt="" /></div>
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
        
        </div>
      
      
      
  </div>
    </div>
    <div class="rightContent">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.sideNavigation {
  width: 292px;
  height: 100vh;
  font-family: "Lato";
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
}
/* .layoutPart {
    display: flex;
  } */

.profilePart {
  background: #7557d3;
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 13px;
  align-items: center;
  color: #fff;
}

.profile-img {
  width: 80px;
  border-radius: 80px;
  height: 80px;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 5px;
  align-items: center;
}

.profile-name {
  font-family: "Lato";

  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.4px;
}

.profile-gmail {
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.32px;
}

.sideNavigation-links {
  display: flex;
  flex-direction: column;
  padding: 45px;
  gap: 28px;
}
.layout {
  display: flex;
}
.sidenav {
  font-family: "Lato";
  width: 350px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-radius: 8px;
}

.profile {
  background: #7557d3;
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  color: #fff;
}

.profile-img {
  border-radius: 80px;
  width: 80px;
  height: 80px;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.profile-name {
  color: #fff;
  font-family: "Lato";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.4px;
}

.profile-mail {
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.32px;
}
.sidenav-links {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 45px;
}

.links {
  display: flex;
  gap: 21px;
  align-items: center;
  font-family: "Lato";
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: #2b3c4e;
  text-align: center;

  text-decoration: none;
  color: #2b3c4e;
  text-align: center;
  font-family: "Lato";
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
}

.icons {
  height: 15.789px;
  width: 12px;
  width: 12px;
  height: 15.789px;
}

.logout {
  margin-top: 32px;
}
.rightContent {
  padding: 50px;
}
.active {
  font-family: "Lato";
  font-size: 16px;
  color: #2b3c4e;
  text-align: center;
  font-weight: 700;
  font-style: normal;
}

.active {
  color: #2b3c4e;
  text-align: center;
  font-family: "Lato";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
}
/* .rightContent{
    padding: 102px 47px;
  } */
</style>
