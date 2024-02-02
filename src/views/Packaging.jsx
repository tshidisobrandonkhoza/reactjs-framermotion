
import { useStateContext } from '../utils/Context/ContextProvider'


const Packaging = () => {
    const { addFPack, addVPack, fruit, vegie } = useStateContext();
    return (
        <div>
            Packaging
            {
                fruit.fruits.length !== 0 && (
                    <div>
                        Package Fruits Items in a one box{
                            fruit.packbag ?
                                < div className="button-wrap"><button onClick={() => addFPack()}> No</button>  </div> : < div className="button-wrap"><button onClick={() => addFPack()}> Yes</button>  </div>
                        }
                    </div>
                )

            }

            {
                vegie.vegies.length !== 0 && (
                    <div>
                        Package Vegies Items in a one box{
                            vegie.packbag ?
                                < div className="button-wrap"><button onClick={() => addVPack()}> No</button>  </div> : < div className="button-wrap"><button onClick={() => addVPack()}> Yes</button>  </div>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Packaging
