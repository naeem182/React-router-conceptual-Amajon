import { NavLink, Outlet } from "react-router-dom"


const DashboardLayout = () => {
    return (

        <div className=" flex ml-16 ">
            <ul className=" w-[20%]">
                <li> <NavLink to="/dashboard">
                    {({ isActive, isPending }) => (
                        <span className={isActive ? " bg-red-600" : ""}>dashboard</span>
                    )}
                </NavLink></li>
                <li>  <NavLink to="/dashboard/profile">
                    {({ isActive, isPending }) => (
                        <span className={isActive ? " bg-red-600 active-link" : ""}>Profile</span>
                    )}
                </NavLink> </li>
                <li>   <NavLink to="/dashboard/profileedit">
                    {({ isActive, isPending }) => (
                        <span className={isActive ? " bg-red-600" : ""}>Edit Profile</span>
                    )}
                </NavLink></li>

            </ul>
            <div className=" mx-8 w-[80%]">
                <Outlet></Outlet>
            </div>
        </div>


    )
}

export default DashboardLayout
