import React from 'react'
import { NavLink, Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Pages/Home/Footer/Footer'
import Spinner from '../Spinner/Spinner'

const MainLayout = () => {
    const navigation = useNavigation()
    let isloading = navigation.state === 'loading'
    return (
        <div>
            <div className='flex justify-between  px-16 py-8 shadow-lg'>
                <h1 className=' text-xl  font-bold'>Amajon</h1>
                <nav >
                    <ul className='flex gap-3 '>

                        <li> <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-pink-500" : ""
                            }
                        > Home</NavLink></li>
                        <li> <NavLink to="/products"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-pink-500" : ""
                            }
                        >Products</NavLink></li>
                        <li> <NavLink to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " bg-pink-500" : ""
                            }
                        >Dashboard</NavLink></li>
                        <li> <a href="/not path"> abc</a></li>

                    </ul>
                </nav>
            </div>

            {isloading ? <Spinner></Spinner> : <div className='min-h-screen' style={{ minHeight: '200px' }}>
                <Outlet></Outlet>
            </div>}

            <footer>
                <Footer></Footer>
            </footer>


        </div >
    )
}

export default MainLayout
