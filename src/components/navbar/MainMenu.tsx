import { NavLink } from "react-router-dom"
import Theme from "../Theme"
 
const MainMenu = () => {
    return (
        <nav className="flex gap-10 items-center py-8 ">
            
             
            <ul className="flex gap-6 text-lg uppercase">
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/create-blog">Create Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/authors">Authors</NavLink>
                </li>
            </ul>
            <Theme />
        </nav>
    )
}

export default MainMenu
