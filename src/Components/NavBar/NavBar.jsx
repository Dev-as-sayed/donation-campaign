import { NavLink, Outlet } from "react-router-dom";
import './NavBar.css';
import Logo from '../Image/Logo.png';

const NavBar = () => {
    return (
        <div className="bg-white">
            <nav className="flex justify-between p-6">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <ul className="manue items-center">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/donation'>Donation</NavLink>
                    <NavLink to='/ststistics'>Statistics</NavLink>
                </ul>
            </nav>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default NavBar;