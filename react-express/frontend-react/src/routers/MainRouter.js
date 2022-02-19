import { Route, Routes } from "react-router-dom";

import Signup from "../modules/auth/pages/Signup";
import UserList from "../modules/superadmin/pages/UserList";
import Home from "../pages/Home";
import Menu from "../layout/Menu";
import Signin from "../modules/auth/pages/Signin";
import Profile from "../modules/auth/pages/Profile";
import Students from "../modules/apps/students/Students";
import HomeUsers from "../modules/apps/users/HomeUsers";

const MainRouter = ()=>(
    <div>
    <Routes>
      <Route path="/" element={<Menu />}> 
        <Route path="session/signup" element={<Signup/>}/>
        <Route path="session/signin" element={<Signin/>}/>
        <Route path="session/profile" element={<Profile/>}/>
        <Route path="apps/students" element={<Students/>}/>
        <Route path="apps/users" element={<UserList/>}/>
        <Route path="apps/usersmodule" element={<HomeUsers/>}/>
        <Route path="home" element={<Home/>}/>
      </Route>
    </Routes>
    </div>
)

export default MainRouter;