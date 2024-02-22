import React from "react";
import Layout from "../../../../components/Layout";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom"
import useManager from "../../../../store/useManager";

function LogCreateM() {
  const { register, handleSubmit, reset, control } = useForm()
  const navigate = useNavigate()
  const { addLog } = useManager()
  const id = JSON.parse(localStorage.getItem("data")).id
  const onSubmit = async (data) =>{
    await addLog({...data, user_id: id})
    reset()
    navigate("/manager/log")
  }
  return (
    <Layout name="manager">
      <div className="mt-12 mb-6">
        <p className="text-slate-50 text-2xl">Dashboard</p>
        <p className="bg-slate-800 w-fit text-xl text-slate-50 py-4 px-8 rounded-2xl mt-4">
          Log Harian
        </p>
      </div>
      <div className={`bg-slate-800 text-slate-50 w-1/2 p-8 rounded-2xl mb-8`}>
        <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Controller 
            control={control}
            name="description"
            render={({ field }) => {
              return (
                <label htmlFor="deskripsi">
                  <p>Deskripsi</p>
                  <textarea
                    {...field}
                    id="deskripsi"
                    rows="5"
                    className="w-full rounded-xl bg-transparent ring-1 ring-slate-400/50 ps-4"
                  ></textarea>
                </label>
              )
            }}
          />
          <Controller 
            control={control}
            name="date"
            render={({ field }) => {
              return (
                <label htmlFor="date">
                  <p>Tanggal</p>
                  <input
                    {...field}
                    type="date"
                    id="date"
                    className="w-full h-10 rounded-xl bg-transparent ring-1 ring-slate-400/50 px-4"
                  />
                </label>
              )
            }}
          />
          <Controller
            control={control}
            name="image"
            render={({ field: { onChange, value, ...field } }) => {
              return (
                <label htmlFor="foto">
                  <p>Bukti kegiatan</p>
                  <input
                    {...field}
                    type="file"
                    value={value?.filename}
                    onChange={(e)=>{
                      onChange(e.target.files[0])
                    }}
                    id="foto"
                    className="w-full rounded-xl bg-transparent ring-1 ring-slate-400/50 "
                  />
                </label>
              )
            }}
          />
          <button
            type="submit"
            className="flex h-10 w-full justify-center items-center rounded-lg bg-cyan-500 text-white mt-2"
          >
            Tambah Log
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default LogCreateM;
