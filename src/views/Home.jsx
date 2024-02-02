import Button from "../layouts/components/Button"
const Home = () => {
    return (
        <>

            <h1> Home</h1>
            <Button
                title={'Welcome to Fruits and Vegies'}
                button={[['Get Fruits', 'fruits'],['Get Vegies', 'vegies']]}
            ></Button>

        </>
    )
}

export default Home