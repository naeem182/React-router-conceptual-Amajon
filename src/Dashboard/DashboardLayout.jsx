import { NavLink, Outlet } from "react-router-dom"


const DashboardLayout = () => {
    return (

        <div className=" flex ml-16 ">
            <ul className=" w-[20%]">
                <li> <NavLink to="/dashboard">dashboard</NavLink></li>
                <li>  <NavLink to="/dashboard/profile">Profile</NavLink> </li>
                <li>   <NavLink to="/dashboard/profileedit">Edit Profile</NavLink></li>

            </ul>
            <div className=" mx-8 w-[80%]">
                <Outlet></Outlet>
            </div>
        </div>


    )
}

export default DashboardLayout
