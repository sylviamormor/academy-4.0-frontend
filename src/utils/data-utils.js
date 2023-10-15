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
// TODO remove this instance
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
    const headers = {
      Authorization: `${token}`,
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    };

    const response = await axios.post(`${baseUrl}apply/upload`, data, {
      headers,
    });

    return response;
  } catch (error) {
    console.log(error.message);
    console.log(error.request.responseText);
  }
};

const adminSignIn = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}admin/login`, data);
    return response;
  } catch (error) {
    return error;
  }
};

// fetch admin data
const fetchAdminData = async (endpoint) => {
  try {
    const response = await axios.get(`${baseUrl}admin/${endpoint}`);
    return response;
  } catch (error) {
    return error;
  }
};


export { applicantSignup, applicantLogIn, submitApplication, adminSignIn, fetchAdminData };

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
