import { User } from "@/app/types/user.type";
import axios from "axios";

const useGetUsers = async () => {
  try {
    const response = await axios.get<User>("https://randomuser.me/api");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default useGetUsers;
