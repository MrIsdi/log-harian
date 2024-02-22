import { create } from "zustand"
import axios from "axios"

const useManager = create((set, get)=>({
    data: [],
    log: [],
    token: JSON.parse(localStorage.getItem("token")),

    getStaf: async (divisi) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/get-pegawai?role=Staf&divisi=${divisi}`,{
                headers:{
                    Authorization: `bearer ${get().token}`
                }
            })
            set({ data: response.data.data })

            sessionStorage.setItem("data", JSON.stringify(get().data))
        } catch (error) {
            console.log(error)
        }
    },
    updateStatus: (data, status, id) => {
        const divisi = JSON.parse(localStorage.getItem("data")).divisi
        data.map(async (a)=>{
            if(a.id === id){
                try {
                    const response = await axios.post(`http://localhost:8000/api/log-daily/status/${id}`, {"status": status},{
                        headers:{
                            Authorization: `bearer ${get().token}`
                        }
                    })
                    await get().getStaf(divisi)
                } catch (error) {
                    console.log(error)
                }
            }
        })
    },
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

export default useManager