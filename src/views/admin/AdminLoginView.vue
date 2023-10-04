<script setup>

</script>



<template>
  <div class="admin-login">
    <div class="logo">
      <img src="../assets/icons/enyatalogo.png" alt="">
      <h3>Admin Log In</h3>
    </div>

    <form class="login">
      <div class="email">
      <label for="">Email Address</label>
      <input type="text">
    </div>
      <div class="page">
      <label for="">Password</label>
      <input type="text" class="password">
      <img src="../assets/icons/eye.svg" alt="" class="eye">
    </div>
      <RouterLink to="/">Sign Up</RouterLink>

    </form>
  </div>
</template>


<style scoped>
.admin-login {
  background-color: #7557D3;
  background-image: url("../assets/icons/desktopsvg.svg");
  background-repeat: no-repeat;
  background-position: right;
  height: 100vh;
  padding-top: 300px;
  
   margin: 0 auto; 
}

.logo{
  display: flex;
  flex-direction: column;
  padding-bottom: 58px;
}

.login {
  display: flex;
  flex-direction: column;
   align-items: center;
  justify-content: center; 
  gap: 29px;
}

.logo{
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
}

.email{
  display: flex;
  flex-direction: column;
}

.page{
  position: relative;
}

label{
  display: block;
  font-family: Lato;
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
;
}

input{
  display: inline-block;
  background-color: transparent;
  border: 1px solid white;
  widows: 379px;
}

.password{
  position: relative;
}

 .eye{
  display: inline-block;
  position: absolute;
  right:10px;
  top:27px;
  
} 
</style>