<script setup>
import { ref } from 'vue';
import axios from 'axios';
import DashboardTitleComponent from '../../components/DashboardTitleComponent.vue';


const questionTemplate = {
    options: {
        a: null,
        b: null,
        c: null,
        d: null,
    },
    question: '',
    selectedAnswer: null,
    correctAnswer: null,
    file: null,
};

const index = ref(0);
const questions = ref([]);
const user = ref({ ...questionTemplate });
const optionAerror = ref(null);
const optionBerror = ref(null);
const optionCerror = ref(null);
const optionDerror = ref(null);
const questionError = ref('');

const next = () => {
    if (user.value.question !== '') {
        questions.value[index.value] = { ...user.value };
        index.value++;

        if (index.value < questions.value.length) {
            user.value = { ...questions.value[index.value] };
        } else {
            user.value = { ...questionTemplate };
        }
    }
    console.log(questions.value);
};

const previous = () => {
    if (user.value.question !== '') {
        questions.value[index.value] = { ...user.value };
    }

    index.value === 0 ? (index.value = 0) : index.value--;
    user.value = { ...questions.value[index.value] };
};

const finish = () => {
    const token = localStorage.getItem('admin-token');
    axios
        .post('http://localhost:3000/api/v1/auth/create-assessment', questions.value, {
            headers: {
                Authorization: `Basic ${token}`,
            },
        })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        });
    user.value = { ...questionTemplate };
    index.value = 0;
    questions.value = [];
};

const correctAns = (value) => {
    user.value.correctAnswer = value;
};
</script>

<template>
    <div class="container">
        <DashboardTitleComponent cardTitle="Compose Assessment" />
        <form @submit.prevent="">
            <label class="form-label">{{ index + 1 }}/30</label>

            <input class="fileupload" type="file" id="file" />
            <p>{{ fileError }}</p>
            <label class="file-label" for="file"> + Choose file</label>

            <div class="form-group">
                <label class="form-label">Questions</label>
                <textarea name="" class="text-area" id="" v-model="user.question"></textarea>
                <p>{{ questionError }}</p>
            </div>

            <div class="form-div">
                <div class="form-group">
                    <label class="form-label posible-ans" @click="correctAns('a')">Option A</label>
                    <input class="form-control" :class="{ correctAns: user.correctAnswer === 'a' }"
                        v-model="user.options.a" />
                </div>
                <div class="form-group">
                    <label class="form-label posible-ans" @click="correctAns('b')">Option B</label>
                    <input class="form-control" :class="{
                        correctAns: user.correctAnswer === 'b' ? true : false,
                    }" v-model="user.options.b" />
                </div>

                <div class="form-group">
                    <label class="form-label posible-ans" @click="correctAns('c')">Option C</label>
                    <input class="form-control" :class="{
                        correctAns: user.correctAnswer === 'c' ? true : false,
                    }" v-model="user.options.c" />
                </div>
                <div class="form-group">
                    <label class="form-label posible-ans" @click="correctAns('d')">Option D</label>
                    <input class="form-control" :class="{
                        correctAns: user.correctAnswer === 'd' ? true : false,
                    }" v-model="user.options.d" />
                </div>

                <p>{{ derror }}</p>
            </div>
            <div class="btn-container">
                <button class="btn-next" :disabled="index === 0" @click="previous()">Previous</button>
                <button class="btn-next" @click="next()">Next</button>
            </div>
            <div class="btn-finish">
                <button class="btn-fin" @click="finish()">Finish</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.container{
    padding: 60px 47px;
    height: 100vh;
    overflow-y: scroll;
}
p {
    color: red;
    font-size: 10px;
    text-align: start;
    padding-top: 5px;
}

input {
    padding: 10px;
}

.correctAns {
    background: #31d283;
}

.posible-ans {
    cursor: pointer;
    padding: 4px;
}

.posible-ans:hover {
    background: #31d283;
}

.container-text {
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    line-height: 52px;
    letter-spacing: -0.02em;
    color: #2b3c4e;
    padding-bottom: 92px;
    align-self: flex-start;
}

.form-group {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
}

.file-label {
    width: 456px;
    height: 108px;
    border: 1.55172px dashed #2b3c4e;
    border-radius: 6.2069px;
    text-align: center;
    font-size: 16px;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2b3c4e;
}

.fileupload {
    display: none;
}

.form-div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px 64px;
    margin-top: 48px;
    width: 100%;
}

.form-control {
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* width: 100%; */
}

.form-control {
    border: 1.5px solid #2b3c4e;
    height: 41px;
    /* width: 456px; */
    border-radius: 4px;

}

.form-label {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #2b3c4e;
}

.text-area {
    height: 144px;
    /* width: 976px; */
    border: 1.5px solid #2b3c4e;
    border-radius: 4px;
    resize: none;
    padding: 10px;
}


.btn-container {
    display: flex;
    justify-content: space-between;
}

.btn-next {
    border: none;
    color: white;
    background: #2b3c4e;
    height: 41px;
    width: 125px;
    border-radius: 4px;
    cursor: pointer;
}

.btn-fin {
    background: #cecece;
    height: 41px;
    width: 205px;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    border: none;
}

.btn-finish {
    text-align: center;
    margin-top: 40px;
}
</style>
