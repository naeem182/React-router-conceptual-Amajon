import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Home/Footer/Footer'

const MainLayout = () => {
    return (
        <div>
            <div className='flex justify-between  px-16 py-8 shadow-lg'>
                <h1 className=' text-xl  font-bold'>Amajon</h1>
                <nav >
                    <ul className='flex gap-3 '>

                        <li> <a href="/"> Home</a></li>
                        <li> <a href="/products">Products</a></li>
                        <li> <a href="/about">About</a></li>
                        <li> <a href="/not path"> abc</a></li>

                    </ul>
                </nav>
            </div>
            <div className='min-h-screen' style={{ minHeight: '200px' }}>
                <Outlet></Outlet>
            </div>

            <footer>
                <Footer></Footer>
            </footer>


        </div >
    )
}

export default MainLayout
