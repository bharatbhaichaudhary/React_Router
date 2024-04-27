import { Link } from 'react-router-dom'
import '../COMPO/navbar.css'

function Navbar(){
    return(
        <>
        <nav className="nav">
            <div className="logo">logo</div>
            <div className="link">
                <li><Link to='/' className='home_link'>Home</Link></li>
                <li><Link to='/about' className='home_link'>about</Link></li>
                <li><Link to='/contect' className='home_link'>contect</Link></li>
            </div>
        </nav>
        </>
    )
}

export default Navbar