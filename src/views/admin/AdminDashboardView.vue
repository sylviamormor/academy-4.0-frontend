 <script setup>


</script>




 <template>
<div class="dash">
    <h2>Dashboard</h2>
    <div class="main">
     <div class="current">
        <h3>Current Applications</h3>
        <p><span>233</span></p>
        <div class="blue-line"></div>
        <h4>Academy 2.0</h4>
     </div>
     <div class="total">
        <h3>Total Applications</h3>
        <p><span>4253</span></p>
        <div class="green-line"></div>
        <h4>All entries do far</h4>
     </div> 
     <div class="academy">
        <h3>Academys</h3>
        <p><span>4</span></p>
        <div class="orange-line"></div>
        <h4>So Far</h4>
     </div>           
    </div>
    <div>
      <div class="adminDash">
    <div class="update">
        <h3>History</h3>
        <p>Last Update  18:24, 22/02/19</p>
    </div>
     <div class="student">
      <div class="entry">
    <div class="batch">
        <h3 class="batch1">Academy Batch 1</h3>
        <h3 class="batch1">15 Students</h3>
        <h3 class="batch1">Started 11/09/15</h3>
    </div>
     <!-- <div class="batch">
        <h3>Academy Batch 2</h3>
        <h3>15 Students</h3>
        <h3>Started 11/09/15</h3>  
    </div> -->
    <!-- <div class="batch">
        <h3>Academy Batch 3</h3>
        <h3>15 Students</h3>
        <h3>Started 11/09/15</h3>   
    </div> -->
  </div>
      <div class="take">
      <h3>Create Assessment</h3>
      <div class="app">
      <p>Create test question for an incoming academy students</p>
      <RouterLink class="create" to="/createapp">Create Assessment</RouterLink>  
    </div>
    </div>

 </div>
</div>
</div>
</div>


</template>



<style scoped>

.dash{
    background-color: #fff;
    height: 100vh;
}
.main{
    display: flex;
    /* justify-content: space-between; */
    align-items:center;
    color: #2B3C4E;
    gap: 160px;
}

/* .batch1{
  width: 482px;
height: 66px;
top: 510px;
left: 348px;
border-radius: 8px;

} */

.adminDash{
  display: flex;
  flex-direction: column;
}

h2{
    /* font-family: Lato; */
font-size: 44px;
font-weight: 300;
line-height: 52px;
letter-spacing: -0.02em;
text-align: left;
color: #2B3C4E;
padding: 30px 0 65px 0;
/* margin-left: 85px; */

}

.current{
    display: flex;
    flex-direction: column;
}

.blue-line{
background: #006DF0;
    width: 148px;
height: 4px;
/* top: 330px
left: 348px */
border-radius: 4px

}

.green-line{
    background: #00F026;
    width: 148px;
height: 4px;
/* top: 330px
left: 348px */
border-radius: 4px   
}

.orange-line{
    background: #F09000;
    width: 148px;
height: 4px;
/* top: 330px
left: 348px */
border-radius: 4px    
}

h4{
    /* font-family: Nunito Sans; */
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
color: #4F4F4F;
padding-top: 8px;
}

p{
    /* font-family: Nunito Sans; */
font-size: 48px;
font-weight: 300;
line-height: 65px;
letter-spacing: 0em;
text-align: center;
color: #4F4F4F;
}

h3{
    /* font-family: Nunito Sans; */
font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0em;
text-align: center;
color: #4F4F4F;  
}

.update p{
    /* font-family: Nunito Sans; */
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
color: #4F4F4F;
/* margin-left: 85px; */
display: flex;
flex-direction: column;
padding-bottom: 32px;
}

.update h3{
    /* font-family: Lato; */
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: -0.02em;
text-align:left;
padding: 77px 0 4px 0;
/* margin-left: 85px; */

}

.update{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.batch{
    display: flex;
 align-items: center;
   justify-content:space-between;  
font-size: 16px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: center;
color: #4F4F4F;
gap: 55px;
/* margin-left: 85px; */
padding: 20px 0 10px 0;
border-radius: 8px;
border-left: 7px solid #7557d3;

}

.batch:hover{
  /* display:flex;
  flex-direction: column; */
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px 0px 0px 8px;
  margin-top: 20px;
  cursor: pointer;
}


 .student{
  display: flex;
  /* flex-direction: column;  */
 } 

 .entry{
  display:flex;
  flex-direction: column;
  align-items: center;
  
 }

 .take{
  display: flex;
  flex-direction: column;
    /* align-items: center;  */
  width: 482px;
height: 307px;
/* top: 412px;
left: 897px; */
border-radius: 4px;
border: 1px solid #ECECF9;
/* padding-right: 90px; */
margin-left:67px;
margin-bottom: 800px;

 }

.take p{
  width: 342.91px;
height: 46px;
/* top: 528px;
left: 978px; */
font-family: Nunito Sans;
font-size: 17px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: center;
color: #4F4F4F;
padding: 70px 50px;

}

.take h3{
  font-family: Lato;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: -0.02em;
text-align: left;
color: #2B3C4E;
padding: 20px 0 0 34px;
}

.create{
  width: 205px;
height: 41px;
top: 598px;
/* left: 1046px; */
background: #B1B1B1;
text-decoration: none;
padding: 10px 20px 11px 30px ;
font-family: Lato;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
/* text-align: left; */
color: #FFFFFF;
display: flex;
text-align: center;
}

.app{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style> -->
 -->
