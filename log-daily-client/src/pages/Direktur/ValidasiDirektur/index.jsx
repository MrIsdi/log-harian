import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { BiShow } from "react-icons/bi";
import useDirektur from "../../../store/useDirektur";
import Calendar from "react-calendar";

function ValidasiDirektur() {
  const { data, getManager } = useDirektur();
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    (async function () {
      await getManager();
    })();
  }, []);
  return (
    <Layout name="direktur">
      <div className="mt-12 mb-8 flex justify-between gap-4 md:flex-row flex-col">
        <div className="basis-3/4">
          <p className="text-slate-50 text-2xl">Dashboard</p>
          <p className="bg-slate-800 w-fit text-xl text-slate-50 py-4 px-8 rounded-2xl mt-4">
            Tabel Manager
          </p>
          <div className="bg-slate-800 text-slate-400 w-full text-center p-8 rounded-2xl my-8">
            <table className="w-full">
              <thead>
                <tr className="text-slate-50">
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Divisi</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((a, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{a.name}</td>
                    <td>{a.email}</td>
                    <td>{a.divisi}</td>
                    <td>
                      <a href={`/direktur/validasi/${a.id}`}>
                        <BiShow className="text-2xl" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="basis-1/4">
          <Calendar onChange={onChange} value={value} className="bg-[rgb(30,41,59)!important]" />
        </div>
      </div>
    </Layout>
  );
}

export default ValidasiDirektur;
