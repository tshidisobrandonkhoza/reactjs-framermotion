import { Link } from "react-router-dom";
import { useStateContext } from "../utils/Context/ContextProvider";
import { AnimatePresence, motion } from 'framer-motion'
import NavTransition from "../layouts/components/NavTransition"; 
const Fruits = () => {

  const { addFruits, fruit } = useStateContext();

  const _fruits = ['Apple', 'Banana ', 'Mango', 'Guava'];

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

  const cNextVariants = {
    init: {
      x: '-50vw', opacity: 0
    },
    ani: {
      x: 0, opacity: 1,
      transition: {
        delay: 1.5, type: 'spring', stiffness: 500
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
      <h4>Fruits</h4>
      <ul>
        {_fruits.map((item, ind) => {
          let checkActive = fruit.fruits.includes(item) ? '> ' : null
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: 'yellow' }}
              transition={{ type: 'spring', stiffness: 300 }}

              key={ind} onClick={() => addFruits(item)}>
              {checkActive} {item}
            </motion.li>
          )
        })}
      </ul>
      <AnimatePresence>
        {fruit.fruits.length !== 0 && (
          <div className="button-wrap">

            <motion.button
              variants={cNextVariants}
              whileHover={{   scale: 1.1}}
              exit={{ x: '-50vw', opacity:0}}
            >

              <Link to="/packaging">Next </Link>
            </motion.button>

          </div>
        )}
      </AnimatePresence>

    </motion.div>
    </NavTransition>
  )
}
 
export default Fruits
