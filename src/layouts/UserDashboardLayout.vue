<script setup>
import { RouterLink, useRoute, RouterView } from 'vue-router';
const route = useRoute();

</script>

<template>
  <div class="layout">
    <div class="sidebar">
      <div class="sideNavigation">
        <div class="profilePart">
          <img class="profile-img" src="@/assets/icons/userprofile.png" alt="profile picture" />
          <div class="details">
            <h1 class="profile-name">Andy Cole</h1>
            <p mailto:class="profile-gmail">cole@gmail.com</p>
          </div>
        </div>

        <div class="sideNavigation-links">
          <RouterLink class="links" :to="{ name: 'dashboard' }" active-class="active">
            <div class="icons"><img src="@/assets/icons/dashboard.svg" alt="" /></div>
            <p class="link-text">Dashboard</p>
          </RouterLink>

          <RouterLink class="links" :to="{ name: 'assessment' }" active-class="active">
            <div class="icons"><img src="@/assets/icons/assssment.svg" alt="" /></div>
            <p class="link-text">Assessment</p>
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
    </div>
  </div>
</template>

<style scoped>
.sideNavigation {
  
  width: 292px;
  height: 100vh;
  font-family: 'Lato';
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  
}
.layoutPart {
  display: flex;
}




.profilePart {
  background: #7557D3;
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

.sideNavigation-links {
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
  margin-top: 32px;
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
 
}


</style>
