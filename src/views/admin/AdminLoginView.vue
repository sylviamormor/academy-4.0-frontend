<script setup>

</script>



<template>
  <div class="admin-login">
    <div class="logo">
      <img class="img" src="src/assets/icons/logo2.png" alt="">
      <h3>Admin Log In</h3>
    </div>

    <form class="login">
      <div class="email">
      <label for="">Email Address</label>
      <input type="text">
    </div>
      <div class="page">
      <label for="">Password</label>
      <input type="pa" class="password">
      <img src="src/assets/icons/eye.svg" alt="" class="eye">
    </div>
      <RouterLink class="button" to="/Admindashboard">Sign In</RouterLink>

    </form>
  </div>
</template>


<style scoped>
.admin-login {
  background-color: #7557D3;
  background-image: url("../src/assets/icons/desktopsvg.svg");
  background-repeat: no-repeat;
  background-position: right;
  height: 100vh;
  padding-top: 200px;
  
   margin: 0 auto; 
}

.img{
  color: #FFFFFF;
  margin-bottom: 29px;
}

.logo{
  display: flex;
  flex-direction: column;
  padding-bottom: 58px;
}

.logo h3{
  font-family: Lato;
font-size: 24px;
font-style: italic;
font-weight: 500;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color: #FFFFFF;
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
padding-bottom: 5px;
}

input{
  display: inline-block;
  background-color: transparent;
  width: 379px;
height: 48px;
/* top: 22px */
border-radius: 4px;
border: 1.5px solid #FFFFFF;

}

.password{
  position: relative;
}

 .eye{
  display: inline-block;
  position: absolute;
  right:10px;
  top:35px;
  color: #FFFFFF;
} 

.button{
  background:#FFFFFF;
  width: 379px;
height: 50px;
top: 8px;
text-align: center;
padding: 16px 150px;
color: #7557D3;
text-decoration: none;

}
</style>