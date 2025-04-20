import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserAuth } from "../components/context/AuthContext";
import { FaTasks } from "react-icons/fa";


export default function Header() {

const {logout} = UserAuth();
const navigate = useNavigate();

const handleLogout = async() =>{
    try{
        await logout();
        navigate("/signin");
        alert("You are logged out.");
    }
    catch(err){
        console.log(err);
    }
}

let activeStyle = {
        textDecoration: "underline",
    };

let activeClassName = "underline";

return (
    <>
    <div className="header" >
        <div className="header-div">
        <FaTasks />&nbsp;<span>Task Manager</span>
        </div>
    <nav className="mainNav">
        <ul>
            <li><NavLink 
            to="/"
            style={({ isActive }) =>
            isActive ? activeStyle : undefined
            }
            >Home</NavLink></li>
            <li><NavLink 
            to="/signIn"
            style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
            >Register</NavLink></li>
            <li><NavLink 
            to="/about"
            style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
            >About</NavLink></li>
            <li><NavLink 
            to="/profile"
            style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
            >Profile</NavLink></li>
            <li><NavLink onClick={handleLogout}>Logout</NavLink></li>
        </ul>
    </nav>
    </div>
    </>
    )
}