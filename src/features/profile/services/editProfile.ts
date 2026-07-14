import axios from "axios";
import type { EditProfileType } from "../schemas/profileSchema";
import axiosInstance from "@/services/AxiosConfig";

export async function editProfile(data: EditProfileType) {
  try {
    //TODO edit profile end point
    const res = await axiosInstance.put(``, data);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      throw error.response?.data || "An error occurred";
    }
  }
}
