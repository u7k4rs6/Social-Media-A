import axios from "axios";
import { API_BASE_URL } from "./config";


const api = axios.create({
    baseURL : API_BASE_URL,
    withCredentials: true,

})

// route - /api/auth/signup

export const signUpUser = async ({ name, userName, email, password }) => {
  try {
    const response = await api.post("/api/auth/signup", {
      name,
      userName,
      email,
      password,
    });
    return response.data; // return just the data
  } catch (error) {
    // standardize error handling
    throw error.response?.data?.message || "Something went wrong";
  }
};