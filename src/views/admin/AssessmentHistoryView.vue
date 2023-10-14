<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router'

import DashboardHeaderComponent from '../../components/DashboardHeaderComponent.vue';


const router = useRouter()


const GroupedIndividuals = ref([
  { id: 1, batch: '1', date: '12 dec 2020', question: '30', time: '30 mins', status: 'Taken' },
  { id: 2, batch: '2', date: '12 dec 2020', question: '30', time: '30 mins', status: 'Taken' },
  { id: 3, batch: '3', date: '12 dec 2020', question: '30', time: '30 mins', status: 'Taken' },
]);
</script>

<template>
    <main>
    <DashboardHeaderComponent cardTitle="Assessment History" />

    <table style="width: 100%">
      <thead>
        <tr class="header-table">
          <th>Batch</th>
          <th>Date Composed</th>
          <th>No of Questions</th>
          <th>Time Allocated</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-content" @click="router.push('assessmentResult')">
          <td>Batch 1</td>
          <td>12/07/23</td>
          <td>30</td>
          <td>30 minutes</td>
          <td>Taken</td>
        </tr>
        <tr class="t-content" v-for="individual in GroupedIndividuals" :key="individual.id" @click="openMainModal">
          <td>{{ individual.batch }}</td>
          <td>{{ individual.date }}</td>
          <td>{{ individual.questions }}</td>
          <td>{{ individual.time }}</td>
          <td>{{ individual.status }}</td>
        </tr>
      </tbody>
    </table>
    </main>
</template>

<style scoped>
input {
  border: none;
  background-color: #2b3c4e;
}
.header-table {
  color: white;
  background: #2b3c4e;
  border-collapse: collapse;
  padding: 15px 0;
}
td {
  padding: 24px 26px;
}
table {
  border-collapse: collapse;
}
thead{
  background-color: #2B3C4E;
    color: #fff;
}
main {
  padding: 60px 47px;
}
figure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  align-self: center;
}
tr {
  border-radius: 8px 0px 0px 8px;
}
th {
  align-self: flex-end;
  justify-self: center;
  color: white;
}
.table-content {
  color: #4F4F4F;
  text-align: center;
  font-family: 'Lato';
  font-size: 14.533px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.table-content:hover {
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  border-radius: 8px 8px 8px 8px !important;
  cursor: pointer;
}
</style>
  116 changes: 116 additions & 0 deletions