import { Outlet } from 'react-router-dom'
import Navbar from '../COMPO/Navbar'
import Footer from '../COMPO/Footer'
function Layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout