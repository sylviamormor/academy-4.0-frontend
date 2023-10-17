<script setup>
import { ref, computed, onMounted } from "vue";
import ApproveChildWindowComponent from "../../components/ApproveChildWindowComponent.vue";
import DashboardHeaderComponent from "../../components/DashboardHeaderComponent.vue";
import axios from "axios";

const openmodal = ref(false);

const openMainModal = () => {
  openmodal.value = true;
};

const openDenyButton = () => {
  openmodal.value = false;
  declineVisibility.value = true;
};

const openApproveButton = () => {
  openmodal.value = false;
  approveVisibility.value = true;
};

const closeModal = () => {
  openmodal.value = false;
};

const people = ref([
  {
    id: 1,
    name: "jack jack",
    age: 12,
    email: "jack@mail.com",
    address: "21 adom str.",
    university: "University of Lagos",
    cgpa: 2.54,
  },
  {
    id: 2,
    name: "Bongo",
    age: 13,
    email: "bongo@mail.com",
    address: "21 adom str.",
    university: "University of Lagos",
    cgpa: 3.54,
  },
  {
    id: 3,
    name: "congo",
    age: 14,
    email: "congo@mail.com",
    address: "21 adom str.",
    university: "University of Lagos",
    cgpa: 3.24,
  },
]);

const sortedPeople = computed(() => {
  return [...people.value].sort((a, b) => a.age - b.age || a.cgpa - b.cgpa);
});

const ageAscending = () => {
  people.value.sort((a, b) => b.age - a.age);
};
const ageDescending = () => {
  people.value.sort((a, b) => b.age - a.age);
};

const cgpaAscending = () => {
  people.value.sort((a, b) => b.cgpa - a.cgpa);
};
const cgpaDescending = () => {
  people.value.sort((a, b) => b.cgpa - a.cgpa);
};

// const people = ref([])

/*
 * methods
 */

function setPeople(data) {
  people.value = data;
}

async function getAllApplicants() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("//localhost:7006/api/v1/application", {
      headers: { authorization: token },
    });
    setPeople(response.data.data);

  } catch (error) {
    console.log(error);
  }
}

/*
 * computed
 */

const fullName = computed(() => {
  return (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  };
});

onMounted(async () => {
  await getAllApplicants();
});
</script>

<template>
  <div class="container">
    <ApproveChildWindowComponent @close="closeModal" v-show="openmodal" class="main-modal" />

    <DashboardHeaderComponent
      cardTitle="Entries - Batch 1"
      cardText="Comprises of all that applied for batch 1"
    />

    <table style="width: 100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th class="sortItems">
            DOB - Age
            <div class="icons">
              <img
                @click="ageAscending"
                src="../../assets/icons/sortingUp.svg"
                alt="sortup"
                srcset=""
              />
              <img
                @click="ageDescending"
                src="../../assets/icons/sortingDown.svg"
                alt="sortdown"
                srcset=""
              />
            </div>
          </th>
          <th>Address</th>
          <th>University</th>
          <th class="sortItems">
            CGPA
            <div class="icons">
              <img
                @click="cgpaAscending"
                src="../../assets/icons/sortingUp.svg"
                alt="sortup"
                srcset=""
              />
              <img
                @click="cgpaDescending"
                src="../../assets/icons/sortingDown.svg"
                alt="sortdown"
                srcset=""
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="t-rows" v-for="person in sortedPeople" :key="person.id" @click="openMainModal">
          <td>{{ person.name }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.date_of_birth }}</td>
          <td>{{ person.address }}</td>
          <td>{{ person.university }}</td>
          <td>{{ person.cgpa }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
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
  background-color: #2b3c4e;
  color: #fff;
}
th {
  color: #fff;
  padding: 14px 10px;
}
.sortItems {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icons {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
img {
  cursor: pointer;
}
tbody {
  border-radius: 8px 0px 0px 8px;
}
.t-row:hover {
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
  border-left: 7px solid #7557d3;
  cursor: pointer;
}

td {
  padding: 22px 10px;
  text-align: center;
  border-radius: 8px;
}
.btn {
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: #7557d3 1px solid;
}
img {
  cursor: pointer;
}

.mainWindow {
  position: absolute;
}
</style>
