<script setup>

</script>


<template>

    <div class="assessment">
        <div class="assess">
        <h2>Take Assessment</h2>
        <p>Click the button below to start assessment, you have limited time for this test</p>
    </div>
    <div class="timer">
        <h5>Timer</h5>
        <p><p class="time">00 <small>MM</small>000 <small>MM</small></p></p>
    </div>
    </div>
    
<div class="loading">
    <img src="../assets/icons/hourglass.svg" alt="">
<p>We have 4 days left until the next assessment
Watch this space</p>
<RouterLink class="btn" to="question">Take Assessment</RouterLink>
</div>



</template>


<style scope>
.assessment{
    display: flex;
    text-align: start;
    justify-content: space-between;
    gap: 200px;
}

.assess{
    display: flex;
    flex-direction: column;
    padding-bottom: 164px;
}

.assess h2{
    /* font-family: Lato; */
font-size: 44px;
font-weight: 300;
line-height: 52px;
letter-spacing: -0.02em;
text-align: left;
color: #2B3C4E;
padding-bottom: 14px;

}

.assess p{
    /* font-family: Lato; */
font-size: 16px;
font-style: italic;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: left;

}

.timer p{
    font-family: Lato;
font-size: 48px;
font-weight: 300;
line-height: 58px;
letter-spacing: 0em;
text-align: center;
color: #4F4F4F;

    /* display: flex;
    flex-direction: column; */
    /* text-align: center;
    justify-content: center; */
}

.time small{
    font-family: Lato;
font-size: 12px;
font-weight: 400;
line-height: 14px;
letter-spacing: 0em;
text-align: center;
color: #4F4F4F;
}

.timer h5{
    /* font-family: Lato; */
font-size: 14px;
font-weight: 400;
line-height: 17px;
letter-spacing: 0em;
text-align: center;

}


.loading{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 21px;
}

.loading p{
    width: 342.91px;
height: 46px;
/* font-family: Lato; */
font-size: 17px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
color: #4F4F4F;

/* top: 451px
left: 642px */

}

.btn{
    background: #B1B1B1;
    width: 205px;
height: 41px;
color: #FFFFFF;
padding: 11px ;
text-decoration: none;
text-align: center;
font-family: Lato;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
/* text-align: left; */
color: #FFFFFF;

/* top: 521px;
left: 710px */

    
}
</style>