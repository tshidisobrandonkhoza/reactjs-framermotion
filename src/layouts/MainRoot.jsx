
import Header from "./components/Header"
import Footer from "./components/Footer"
import AnimatedOutlet from './components/AnimatedOutlet'
 

const MainRoot = () => {

    return (
        <>
            <Header></Header>
            <div className='main-box'>
                <AnimatedOutlet />
            </div>
            <Footer></Footer>
        </>
    )
}

export default MainRoot
