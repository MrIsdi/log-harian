import axios from "axios";
import { create } from "zustand";

const useLogin = create((set, get) => ({
  data: {},
  token: "",
  status: false,
  message: "",

  handleLogin: async (login) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        login
      );

      set({ data: response.data.data });
      set({ token: response.data.token });
      set({ status: true });

      localStorage.setItem("data", JSON.stringify(get().data));
      localStorage.setItem("status", JSON.stringify(get().status));
      localStorage.setItem("token", JSON.stringify(get().token));
    } catch (e) {
      console.log(e);
    }
  },
}));

export default useLogin