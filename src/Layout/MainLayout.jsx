import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className=' container mx-auto'>
            <section><div className=' py-5 shadow-lg'>Nav</div>
                <Outlet></Outlet>
            </section>
        </div>
    )
}

export default MainLayout
