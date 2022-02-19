import { Link, Outlet } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Posts from "./Posts";

const Menu = () => {
    return(
        <>
            <h1>Menu</h1>
            <div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'} element={<About/>}>About</Link></li>
                    <li><Link to={'/posts'} element={<Posts/>}>Posts</Link></li>
                </ul>
            </div>
            
        </>
    )
}

export default Menu;