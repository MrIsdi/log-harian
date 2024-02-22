import React from 'react'
import Layout from '../../components/Layout'
import DashboardImage from "../../assets/dashboard-image.svg"

function Manager() {
    return (
        <Layout name="manager">
            <div className='my-12'>
                <p className='text-slate-50 text-2xl'>Dashboard</p>
                <p className='bg-slate-800 w-fit text-xl text-slate-50 py-4 px-8 rounded-2xl mt-4'>
                    Selamat Datang, Manager
                </p>
            </div>
            <div>
                <img src={DashboardImage} alt="Dashboard" className='w-2/5 m-auto' />
            </div>
        </Layout>
    )
}

export default Manager
