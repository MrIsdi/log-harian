import React, { Suspense, useEffect } from "react";
import ImageLogin from "../../assets/login-image.svg";
import useLogin from "../../store/useLogin";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

function Login() {
  const { handleLogin, status, data } = useLogin();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    await handleLogin(data)
    reset();
  };
  useEffect(()=>{
    const Status = JSON.parse(localStorage.getItem("status"))
    const Data = JSON.parse(localStorage.getItem("data"))
    if(Status){
      if(Data.role === "Direktur"){
        navigate("/direktur")
      }else if(Data.role === "Manager"){
        navigate("/manager")
      }else{
        navigate("/staf")
      }
    }
  }, [])
  useEffect(()=>{
    if(status){
      if(data.role === "Direktur"){
        navigate("/direktur")
      }else if(data.role === "Manager"){
        navigate("/manager")
      }else{
        navigate("/staf")
      }
    }
  }, [status])
  return (
    <Suspense>
      <main className="grid h-screen bg-slate-950 w-full place-items-center">
        <div className="bg-slate-800 md:w-3/5 w-5/6 flex h-3/4 rounded-3xl md:flex-row flex-col md:justify-normal justify-center">
          <div className="md:w-1/2 w-full grid place-items-center">
            <div className="w-full">
              <header className="mb-4 flex flex-col items-center">
                <p className="text-white text-3xl w-2/3">Login</p>
                <p className="text-slate-400 text-base w-2/3">
                  Please enter your account!
                </p>
              </header>
              <form
                action=""
                className="flex flex-col gap-4 items-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label htmlFor="email" className="w-2/3">
                  <p className="text-white">Email</p>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full h-10 rounded-lg bg-transparent ring-1 ring-slate-400/50 ps-4"
                  />
                </label>
                <label htmlFor="password" className="w-2/3">
                  <p className="text-white">Password</p>
                  <input
                    {...register("password")}
                    type="password"
                    id="password"
                    className="w-full h-10 rounded-lg bg-transparent ring-1 ring-slate-400/50 ps-4"
                  />
                </label>
                <button
                  type="submit"
                  className="flex h-10 w-2/3 justify-center items-center rounded-lg bg-cyan-500 text-white mt-2"
                >
                  Login
                </button>
              </form>
              {/* <footer className="mt-4">
                <p className="text-center text-slate-400">
                  Do have'nt account?{" "}
                  <a href="" className="text-cyan-500">
                    register
                  </a>
                </p>
              </footer> */}
            </div>
          </div>
          <div className="md:w-1/2 w-full md:grid place-items-center hidden">
            <img src={ImageLogin} alt="Loginpage" className="w-1/2" />
          </div>
        </div>
      </main>
    </Suspense>
  );
}

export default Login;
