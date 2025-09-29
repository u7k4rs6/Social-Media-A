import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// route - /api/auth/signup

export const signUpUser = async ({ name, userName, email, password }) => {
  console.log(name, userName, password, email);
  try {
    const response = await api.post("/api/auth/signup", {
      name,
      userName,
      email,
      password,
    });

    console.log(response);
    return response.data; // return just the data
  } catch (error) {
    // standardize error handling
    throw error.response?.data?.message || "Something went wrong";
  }
};

export const signInUser = async ({ userName, password }) => {
  try {
    const response = await api.post("/api/auth/signin", {
      userName,
      password,
    });

    console.log(response);
    return response.data; // return just the data
  } catch (error) {
    // standardize error handling
    throw error.response?.data?.message || "Something went wrong";
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get("/api/user/current", {withCredentials:true});
    return response.data; // return just the data
  } catch (error) {
    // standardize error handling
    throw error.response?.data?.message || "Something went wrong";
  }
};


 // get User Profile Data
export const getProfile= async (userName) => {
  try {
    const response = await api.get(`/api/user/getprofile/${userName}`, {withCredentials:true});
    return response.data; // return just the data
  } catch (error) {
    // standardize error handling
    throw error.response?.data?.message || "Something went wrong";
  }
};


export const editProfile= async (formData) => {
  try {
    const response = await api.post(`/api/user/editprofile/`,formData,  {withCredentials:true});
    return response.data; // return just the data
  } catch (error) {
    // standardize error handling
    throw error.response?.data?.message || "Something went wrong";
  }
};


export const createPost = async(formData)=>{
   try {
    const response = await api.post(`/api/post/uploadPost/`,formData,  {withCredentials:true});
    return response.data; // return just the data
  } catch (error) {
    // standardize error handling
    throw error.response?.data?.message || "Something went wrong";
  }
}



