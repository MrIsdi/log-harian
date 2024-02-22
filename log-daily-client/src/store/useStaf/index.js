import { create } from "zustand";
import axios from "axios"

const useStaf = create((set, get)=>({
    log: [],
    token: JSON.parse(localStorage.getItem("token")),
    getLog: async () =>{
        const id = JSON.parse(localStorage.getItem("data")).id
        try {
            const response = await axios.get(`http://localhost:8000/api/log-daily/${id}`,{
                headers:{
                    Authorization: `bearer ${get().token}`
                }
            })
            set({ log: response.data.data })
            sessionStorage.setItem("log", JSON.stringify(get().log))
        } catch (error) {
            console.log(error)
        }
    },
    addLog: async (data) =>{
        try {
            const response = await axios.post("http://localhost:8000/api/log-daily", data, {
                headers:{
                    Authorization: `bearer ${get().token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}))

export default useStaf