import Menu from "./Menu";
import { Outlet } from "react-router-dom";


const Layout = ()=> {
    return(
        <>
            <Menu></Menu>
            <Outlet></Outlet>

        </>
    )
}

export default Layout;