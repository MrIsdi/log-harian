import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import { IoImagesOutline } from "react-icons/io5";
import useStaf from "../../../store/useStaf";

function Log() {
  const {log, getLog} = useStaf()
  useEffect(()=>{
    (async function(){
      await getLog()
    })()
  },[])
  return (
    <Layout>
      <div className="my-12">
        <p className="text-slate-50 text-2xl">Dashboard</p>
        <p className="bg-slate-800 w-fit text-xl text-slate-50 py-4 px-8 rounded-2xl mt-4">
          Log Harian
        </p>
      </div>
      <div className={`bg-slate-800 text-slate-400 md:w-3/4 w-full p-8 rounded-2xl mb-8`}>
        <a href="/staf/log/create" className="text-slate-800 bg-cyan-400 py-1 px-3 rounded text-xl">Tambah Log Harian</a>
        <table className="w-full text-center mt-8">
          <thead>
            <tr className="text-slate-50">
              <th>No</th>
              <th>Deksripsi</th>
              <th>Tanggal</th>
              <th>Status</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>
            {
              log.map((a,i)=>(
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{a.description}</td>
                  <td>{a.date}</td>
                  <td className="flex gap-2 justify-center">
                    {a.status === "Ditolak" && (
                        <>
                          <p className="border border-red-400 py-1 px-3 rounded text-slate-50">
                            Ditolak
                          </p>
                        </>
                    )}
                    {a.status === "Pending" && (
                        <>
                          <p className="border border-yellow-400 py-1 px-3 rounded text-slate-50">
                            Pending
                          </p>
                        </>
                    )}
                    {a.status === "Disetujui" && (
                        <>
                          <p className="border border-green-400 py-1 px-3 rounded text-slate-50">
                            Disetujui
                          </p>
                        </>
                    )}
                  </td>
                  <td>
                    <a href={`${a.image}`} className="flex justify-center">
                      <IoImagesOutline className="text-2xl" />
                    </a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Log;
