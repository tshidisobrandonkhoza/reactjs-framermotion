import { Outlet } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"

const MainRoot = () => {
    return (
        <>
            <Header></Header>
            <div className='main-box'>
                <Outlet />
            </div>
            <Footer></Footer>
        </>
    )
}

export default MainRoot
