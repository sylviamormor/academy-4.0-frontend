<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import DashboardHeaderComponent from '../../components/DashboardHeaderComponent.vue';
</script>


<template>
     <div class="main">
    <DashboardHeaderComponent cardTitle="Entries - Batch 1"
      cardText="Comprises of all that applied for batch 1"
    />

    <table style="width: 100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th class="categorize">
            DOB - Age
            <div class="symbols">
              <figure class="button" @click="ageAscending"><img src="../../assets/icons/sortingUp.svg" alt=""
                  srcset=""></figure>
              <figure class="button" @click="ageDescending"><img src="../../assets/icons/sortingDown.svg" alt=""
                  srcset=""></figure>
            </div>
          </th>
          <th>Address</th>
          <th>University</th>
          <th class="categorize">
            CGPA
            <div class="symbols">
              <figure class="button" @click="cgpaAscending"><img src="../../assets/icons/sortingUp.svg" alt="sortup" srcset=""></figure>
              <figure class="button" @click="cgpaDescending"><img src="../../assets/icons/sortingDown.svg" alt="sortdown"
                  srcset=""></figure>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="t-info" v-for="individual in groupedIndividuals" :key="individual.id" @click="openMainModal">
          <td>{{ individual.name }} {{ individual.email }}</td>
          <td>{{ individual.email }}</td>
          <td>{{ individual.age }}</td>
          <td>{{ individual.address }}</td>
          <td>{{ individual.university }}</td>
          <td>{{ individual.cgpa }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>
.main {
  height: 100vh;
  padding: 60px 47px;
  overflow-y: scroll;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 38px;
}
thead {
  background-color: #2B3C4E;
  color: #fff;
}
tr{
  border-radius: 10px;
}
th {
  padding: 0 10px;
  color: #fff;
  
}
.categorize {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.symbols {
  display: flex;
  flex-direction: column;
}
img {
  cursor: pointer;
}
.t-info:hover {
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 5px 15px 0px rgba(33, 31, 38, 0.05);
  border-radius: 10px;
  border-left: 7px #7557D3 solid;
  margin-left: 7px;
  cursor: pointer;
}
td {
  padding: 22px 10px;
  text-align: center;
}
.button {
  border: none;
  background-color: transparent;
  border: #7557D3 1px solid;
}
</style>