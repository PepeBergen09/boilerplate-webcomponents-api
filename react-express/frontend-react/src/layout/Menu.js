import { Link, Outlet } from "react-router-dom";

const Menu = () => {

    return(
        <>

        <div className="container">
        <nav className="navbar navbar-expand-md navbar-light bg-light rounded" aria-label="Eleventh navbar example">
        
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse"  id="navbarsExample09">
               
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >

                </ul>

                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Apps
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                            <Link className="dropdown-item" to={"/apps/students"}>Students</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to={"/apps/users"}>Users</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to={"/apps/usersmodule/homeusers"}>UsersModule</Link>
                        </li>
                    </ul>
                </div>

                <form>
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                </form>

                <ul className="navbar-nav">
                    <li className="nav-item   ">
                    <Link className="nav-link" to="/session/profile">My Account</Link>
                    </li>
                </ul>
               
                </div>
            </div>
        </nav>
        <Outlet></Outlet>
        </div>
        </>
    )
}

export default Menu;