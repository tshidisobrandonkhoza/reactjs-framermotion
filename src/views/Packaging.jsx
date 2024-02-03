import { Link } from "react-router-dom";
import { useStateContext } from '../utils/Context/ContextProvider'
import { motion } from 'framer-motion'
import NavTransition from "../layouts/components/NavTransition"; 
const Packaging = () => {
    const { addFPack, addVPack, fruit, vegie } = useStateContext();
    const cVariants = {
        init: {
            x: '100vw'
        },
        ani: {
            x: 0,
            transition: {
                type: 'spring', delay: .5
            }
        }

    }

    return (
        <NavTransition>
            <motion.div
                variants={cVariants}
                initial="init"
                animate="ani"

            >
                <h4>   Packaging</h4>
                {
                    fruit.fruits.length !== 0 && (
                        <div>
                            Package Fruits Items in a one box{
                                fruit.packbag ?
                                    < div className="button-wrap">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => addFPack()}>
                                            No
                                        </motion.button>
                                    </div> :
                                    < div className="button-wrap">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => addFPack()}>
                                            Yes
                                        </motion.button>
                                    </div>
                            }
                        </div>
                    )

                }

                {
                    vegie.vegies.length !== 0 && (
                        <div>
                            Package Vegies Items in a one box{
                                vegie.packbag ?
                                    < div className="button-wrap">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => addVPack()}>
                                            No
                                        </motion.button>
                                    </div> :
                                    < div className="button-wrap">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => addVPack()}>
                                            Yes
                                        </motion.button>
                                    </div>
                            }
                        </div>
                    )
                }

                {
                    fruit.fruits.length !== 0 || vegie.vegies.length !== 0 ?
                        (<div className="button-wrap">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    duration: .3
                                }}
                            >
                                <Link to="/order">Next</Link>
                            </motion.button>
                        </div>) :
                        (null)
                }
            </motion.div>
        </NavTransition>
    )
}
 
export default Packaging
