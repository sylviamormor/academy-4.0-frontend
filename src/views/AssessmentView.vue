<script setup>

</script>


<template>
    <div class="main">
     <div class="flex-container">   
     <!-- <div class="profile">
<img src="../assets/icons/Ellipse.svg" alt="">
<h2>Jane Doe</h2>
<h4>doe@enyata.com</h4>
</div>  -->
<div class="second-assess">
<div class="assess">
    
    <h1>Take Assessment</h1>
    <p>Click the button below to start assessment, you have limited time for this test</p>
</div>
<div>
<h5>Timer</h5>
<p class="timer">00 <small>MM</small>000 <small>MM</small></p>
</div>
</div>
</div>

<!-- <div class="links">
    <img src="../assets/icons/Vector(1).svg" alt="" class="icon">
    <h4>Dashboard</h4>
    <img src="../assets/icons/Vector.svg" alt="" class="icon">
    <h4>Assessment</h4>
    <img src="../assets/icons/Layer 6.svg" alt="" class="icon">
    <h4>Log Out</h4> 
</div> -->
<div class="loading">
    <img src="../assets/icons/hourglass (1).svg" alt="">
<p>We have 4 days left until the next assessment
Watch this space</p>
</div>
</div>


</template>


<style scope>
.main{
     display: flex;
     flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin: 0 auto;
    padding-top: 100px;
    background-color: #FFFFFF;
}

.second-assess{
    display: flex;
}

.static{
    position: relative;
}
.flex-container{
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap:30px
}
.profile{
    background-color: #7557D3;
    width: 292px;
    height: 255px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* gap: 42px; */
    color: #FFFFFF
;
}

.assess p{
    /* font-family: Lato; */
font-size: 16px;
font-style: italic;
font-weight: 500;
line-height: 19px;
color: #2B3C4E;
;
/* letter-spacing: 0em; */
/* text-align: left; */

}

.assess h1{
    /* font-family: Lato; */
font-size: 44px;
font-weight: 300;
line-height: 52px;
letter-spacing: -0.02em;
/* text-align: left; */
color: #2B3C4E;

}

.links{
     display: grid;
    grid-template-columns: repeat(2 , 1fr); 
    /* display: flex; */

    color: #2B3C4E;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    /* gap: 32px; */
    margin-right: 1000px;
}
 .icon{
    width: 10px;
}

.loading{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}
</style>