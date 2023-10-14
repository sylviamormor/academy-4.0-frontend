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
  try {
    const response = await axios
      .create({
        baseURL: baseUrl,
        headers: {
          "Content-type": "application/json",
        },
      })
      .post("apply/signup", data);

    return response;
  } catch (error) {
    console.log(error);
  }
};

const applicantLogIn = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}apply/login`, data);

    return response;
  } catch (error) {
    console.log(error);
  }
};

const submitApplication = async (data, token) => {
  try {
    const header = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    };
    const response = await axios.post(`http://localhost:7000/api/v1/apply/upload`, data, {
      header,
    });

    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export { applicantSignup, applicantLogIn, submitApplication, baseUrl };


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
