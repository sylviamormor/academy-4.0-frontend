// import http from "./http-utils";
import axios from "axios";

const baseUrl = "http://localhost:7000/api/v1/";

// const http = async () => {
//   const axiosInstance = await axios.create({
//     baseURL: "http://localhost:7000/api/v1/",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });
//   return axiosInstance;
// };

const applicantSignup = async (data) => {
  const response = await axios
    .create({
      baseURL: baseUrl,
      headers: {
        "Content-type": "application/json",
      },
    })
    .post("apply/signup", data);
  // this.$router.push("LogIn");
  return response;
};



const applicantLogIn = async (data) => {
  const response = await axios.post(`${baseUrl}apply/login`, data);
  // this.$router.push("LogIn");
  return response;
};


export { applicantSignup, applicantLogIn };
//   update(id, data) {
//     return http.put(`/admin/${id}`, data);
//   }

//   delete(id) {
//     return http.delete(`/admin/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/admin`);
//   }

//   findByTitle(title) {
//     return http.get(`/admin?title=${title}`);
//   }
