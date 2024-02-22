import { create } from "zustand";
import axios from "axios"

const useDirektur = create((set, get)=>({
    token: JSON.parse(localStorage.getItem("token")),
    data: [],

    getManager: async () => {
        try{
            const response = await axios.get("http://localhost:8000/api/get-pegawai?role=Manager",{
                headers:{
                    Authorization: `bearer ${get().token}`
                }
            })
            set({ data: response.data.data })

            sessionStorage.setItem("data", JSON.stringify(get().data))
        }catch(e){
            console.log(e)
        }
    },
    updateStatus: (data, status, id) => {
        data.map(async (a)=>{
            if(a.id === id){
                try {
                    const response = await axios.post(`http://localhost:8000/api/log-daily/status/${id}`, {"status": status},{
                        headers:{
                            Authorization: `bearer ${get().token}`
                        }
                    })
                    await get().getManager()
                } catch (error) {
                    console.log(error)
                }
            }
        })
    }
}))

export default useDirektur