import { motion } from 'framer-motion'
import { useStateContext } from '../utils/Context/ContextProvider'
import { Link } from 'react-router-dom';

const Order = () => {

  const { fruit, vegie } = useStateContext();

  const oFruits = fruit.fruits.map((items, ind) => {
    return (
      <li key={ind}>
        {items}
      </li>
    )
  })
  const oVegies = vegie.vegies.map((items, ind) => {
    return (
      <li key={ind}>
        {items}
      </li>
    )
  })
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
    <motion.div
      variants={cVariants}
      initial="init"
      animate="ani"

    >
      <h4>Order</h4>
      {fruit.fruits.length !== 0 && (
        <>
          <h5>List of Fruits ordered</h5>
          <ul> {oFruits} </ul>
          <h6>Type  of Packaging : {fruit.packbag ? 'All in One' : 'Single Packaging'}</h6>
        </>
      )}
      <br />
      {vegie.vegies.length !== 0 && (
        <>
          <h5>List of Fruits ordered</h5>
          <ul>{oVegies} </ul>
          <h6>Type  of Packaging : {vegie.packbag ? 'All in One' : 'Single Packaging'}</h6>

        </>
      )}

<div className="button-wrap">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{
                                    duration: .3
                                }}
                            >
                                <Link to="/packaging">Back</Link>
                            </motion.button>
                        </div>
    </motion.div>
  )
}

export default Order;
