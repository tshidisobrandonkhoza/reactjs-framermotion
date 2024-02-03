import Button from "../layouts/components/Button" 
import NavTransition from "../layouts/components/NavTransition"
// import transition from "../layouts/components/NavTransition"
const Home = () => {
    return (
        <NavTransition>

            <Button
                title={'Welcome to Fruits and Vegies'}
                button={[['Get Fruits', 'fruits'], ['Get Vegies', 'vegies']]}
            ></Button>

        </NavTransition>
    )
}

export default Home