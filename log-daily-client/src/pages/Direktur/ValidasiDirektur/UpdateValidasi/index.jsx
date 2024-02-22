import React from "react";
import Layout from "../../../../components/Layout";
import { IoImagesOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import useDirektur from "../../../../store/useDirektur";

function UpdateValidasi() {
  const { id } = useParams();
  const { updateStatus } = useDirektur()
  const data = JSON.parse(sessionStorage.getItem("data")).filter(
    (a) => a.id == id
  )[0];
  return (
    <Layout name="direktur">
      <div className="mt-12 mb-8">
        <p className="text-slate-50 text-2xl">Dashboard</p>
        <p className="bg-slate-800 w-fit text-xl text-slate-50 py-4 px-8 rounded-2xl mt-4">
          Tabel Manager
        </p>
      </div>
      <div className={`bg-slate-800 text-slate-400 md:w-3/4 w-full p-8 rounded-2xl mb-8`}>
        <p className="mb-4 text-slate-50 text-xl">{data.name}</p>
        <table className="w-full text-center">
          <thead>
            <tr className="text-slate-50">
              <th>No</th>
              <th>Deksripsi</th>
              <th>Tanggal</th>
              <th>Status</th>
              <th>Update Status</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>
            {data.log_dailies.map((a, i) => (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{a.description}</td>
                <td>{a.date}</td>
                <td>{a.status}</td>
                <td className="flex gap-2 justify-center">
                  {a.status === "Ditolak" && (
                      <>
                        <button className="bg-yellow-400 py-1 px-3 rounded text-slate-50" onClick={()=>updateStatus(data.log_dailies, "Pending", a.id)}>
                          Pending
                        </button>
                        <button className="bg-green-400 py-1 px-3 rounded text-slate-50" onClick={()=>updateStatus(data.log_dailies, "Disetujui", a.id)}>
                          Disetujui
                        </button>
                      </>
                    )}
                  {a.status === "Pending" && (
                      <>
                        <button className="bg-red-400 py-1 px-3 rounded text-slate-50" onClick={()=>updateStatus(data.log_dailies, "Ditolak", a.id)}>
                          Ditolak
                        </button>
                        <button className="bg-green-400 py-1 px-3 rounded text-slate-50" onClick={()=>updateStatus(data.log_dailies, "Disetujui", a.id)}>
                          Disetujui
                        </button>
                      </>
                    )}
                  {a.status === "Disetujui" && (
                      <>
                        <button className="bg-red-400 py-1 px-3 rounded text-slate-50" onClick={()=>updateStatus(data.log_dailies, "Ditolak", a.id)}>
                          Ditolak
                        </button>
                        <button className="bg-yellow-400 py-1 px-3 rounded text-slate-50" onClick={()=>updateStatus(data.log_dailies, "Pending", a.id)}>
                          Pending
                        </button>
                      </>
                    )}

                  
                </td>
                <td>
                  <a href={`${a.image}`} className="flex justify-center" target="_blank">
                    <IoImagesOutline className="text-2xl" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default UpdateValidasi;
