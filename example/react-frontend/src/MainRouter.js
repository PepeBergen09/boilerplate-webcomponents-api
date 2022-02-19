import { Routes, Route} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Layout from './components/Layout';
import Menu from './components/Menu';
import Posts from './components/Posts';

const MainRouter = () =>{
    return(
        <>
            
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Home></Home>}></Route>
                    <Route path='about' element={<About/>}></Route>
                    <Route path='posts' element={<Posts/>}></Route>
                </Route>
            </Routes>
         
        </>
    )
}


export default MainRouter;