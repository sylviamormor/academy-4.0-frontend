<script setup>

</script>





<template>
    <section class="sectionThree">
            <div class="logo-Div">
                <img src="../assets/icons/Main-logo.svg" alt="" class="logo"/> 
                <h4>Application Form</h4>
            </div>
            <div class="inner-container">
                <div class="first">
                    <input type="file" class="input_1" placeholder=" + Upload CV">
                </div>
                <div class="registration-form">
            <div class="Options">
                <div class="sectionInput">
                    <label for="input">First Name</label>
                    <input type="text" class="input-field">
                </div>
                <div class="sectionInput">
                    <label for="input">Last Name</label>
                    <input type="text" class="input-field" >
                </div>
            </div>
            <div class="Options">
                <div class="sectionInput">
                    <label for="input">Email</label>
                    <input type="text" class="input-field">
                </div>
                <div class="sectionInput">
                    <label for="input">Date of Birth</label>
                    <input type="text" class="input-field">
                </div>
            </div>
            <div class="Options">
                <div class="sectionInput">
                    <label for="input">Address</label>
                    <input type="text" class="input-field">
                </div>
                <div class="sectionInput">
                    <label for="input">University</label>
                    <input type="text" class="input-field" >
                </div>
            </div>
            <div class="Options">
                <div class="sectionInput">
                    <label for="input">Course of Study</label>
                    <input type="text" class="input-field">
                </div>
                <div class="sectionInput">
                    <label for="input">CGPA</label>
                    <input type="text" class="input-field" >
                </div>
            </div>
            </div>
            </div>
            
            
    </section>
</template>



<style>
.sectionThree{
    padding-top: 160px;   
  

}
.logo-Div{
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 24px;
    padding-bottom: 40.58px;
}

.logo{
    max-width: 110.103px;
    max-height: 20.845px;
    width: 100%;
    height: 100%;
     flex-shrink: 0;
     margin: 0 auto;
}
.logo-Div h4{
    color: #2B3C4E;
font-family: Lato;
font-size: 24px;
font-style: italic;
font-weight: 500;
line-height: normal;
text-align: center;
}

.inner-container{
    
    margin: 0 auto;
    border-radius: 8px;
background: #FFF;
box-shadow: 0px 5px 15px 0px rgba(33, 31, 38, 0.05);
width: 963px;
height: 643px;
flex-shrink: 0;
}

.first{    
    display: flex;
    flex-direction: column;


}
.registration-form{
    padding-top: 53px;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;;
}
label{
    color: #4F4F4F;
font-family: Lato;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.sectionInput{
    
    display: flex;
    flex-direction: column;
    gap: 5px;

}

.Options{
    display: flex;
    gap: 62px;
}


.input-field{
    border-radius: 4px;
border: 1.5px solid #BDBDBD;
width: 379px;
height: 48px;
flex-shrink: 0;
}
</style>