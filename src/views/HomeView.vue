<script setup>
import { RouterLink } from "vue-router";

</script>

<template>
  <main>

    <div class="navbar">
      <div>
        <img src="../assets/icons/enyatalogo.png" alt="logo">
      </div>
      <div class="links">
        <RouterLink class="link1" to="/">Home</RouterLink>
        <RouterLink class="link1" to="/LogIn">Sign in</RouterLink>
        <RouterLink class="btn" to="/SignUp">Register Now</RouterLink>
      </div>
    </div>
    <div class="sectionTwo">
      <div class="textSec">
        <div class="dreamText">
          <h3>Ever had a Dream of
            Becoming a Software 
            <span>Engineer?</span></h3>
          <p>Join enyata academy today and bring your long awaiting dream to reality.</p>
          <RouterLink class="btn2" to="/SignUp">Register Now</RouterLink>
        </div>
        <img src="../assets/icons/Group 21.png" alt="">
      </div>
      <div class="lineText">
        <hr>
        <p><strong>Why Us?</strong></p>
      </div>
      <div class="cards">
        <div class="subtext1">
          <h5>Learn from the best</h5>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation amet.
          </p>
        </div>
        <div class="subtext2">
          <h5>100% online classes</h5>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation amet.
          </p>
        </div>
        <div class="subtext1">
          <h5>Get paid while learning</h5>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation amet.
          </p>
        </div>
        <div class="subtext2">
          <h5>Work on real project</h5>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation amet.
          </p>
        </div>
      </div>
      <div class="footer">
        <p>Copyright © Enyata 2021</p>
      </div>
    </div>
  </main>
</template>




<style scoped>
main {
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 40px 10%;
  align-items: center;



}

.links {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
}

.link1 {
  text-decoration: none;
  color: rgba(33, 31, 38, 0.71);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.btn {
  color: #7557D3;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 2px;
  border: 1px solid rgba(117, 87, 211, 0.40);
  background-color: transparent;
  padding: 12px 20px;
  text-decoration: none;
}
.btn2{
  background-color: #7557D3 ;
  padding: 12px 24px;
  text-decoration: none;
  color: white;
}
.sectionTwo {
  position: absolute;
  top: 0;
  z-index: -1;
}

.textSec {
  display: flex;
  /* flex-direction: row; */
   padding-left: 10%;
  align-items: center;
  justify-content: space-between;
  

}


hr {
  width: 34px;
  height: 2px;
  border: 2px solid #FDC840;


}
.dreamText h3{
  color: #211F26;
font-family: Poppins;
font-size: 40.908px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 57.271px */
letter-spacing: 1.432px;
padding-top: 250px;
}

span{
color: #7557D3;
font-family: Poppins;
font-size: 40.908px;
font-style: normal;
font-weight: 700;
line-height: 140%;
letter-spacing: 1.432px;
}
.dreamText p{
color: rgba(33, 31, 38, 0.71);
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.4px;
padding: 0 20px 20px 0;
}
.lineText {
  display: flex;
  align-items: center;
  gap: 16px;
  padding:30px 10% ;
}

.cards {
  display: flex;
  padding: 0 10%;


}

.subtext1 {
  max-width: 292px;
  height: 202px;
  background: rgba(117, 87, 211, 0.10);
  padding: 24px 24px 34px 24px;
}

.subtext2 {
  max-width: 292px;
  height: 202px;
  background: #FFF;
  padding: 24px 24px 34px 24px;
}

h5 {
  color: #211F26;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 22.4px */
  letter-spacing: 0.16px;
  padding-bottom: 12px;
}

.subtext1 p {
  color: rgba(33, 31, 38, 0.60);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 156%; /* 21.84px */
letter-spacing: 0.14px;
}

.subtext2 p {
  color: rgba(33, 31, 38, 0.60);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 156%; /* 21.84px */
letter-spacing: 0.14px;
}

.footer {
  display: flex;
  background-color: #7557D3;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 60px;
  color: #FFF;
}

footer p {
  
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 156%;
  letter-spacing: 0.14px;
  text-align: center;


}
</style>