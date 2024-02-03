import { Link } from "react-router-dom";
import { useStateContext } from "../utils/Context/ContextProvider";
import { motion } from "framer-motion"
import NavTransition from "../layouts/components/NavTransition";
 
const Vegies = () => {
  const { addVegies, vegie } = useStateContext();

  const _vegies = ['Potato', 'Bean', 'Lettuce', 'Spinach'];

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
    },
    hov: {
      scale: 1.1
    }

  }

  return (
    <NavTransition>   
       <motion.div
      variants={cVariants}
      initial="init"
      animate="ani"

    >
      <h4>Vegies</h4>

      <ul>
        {_vegies.map((item, ind) => {
          let checkActive = vegie.vegies.includes(item) ? '> ' : null
          return (
            <motion.li
              whileHover={{ scale: 1.3, originX: 0, color: 'yellow' }}
              transition={{ type: 'spring', stiffness: 300 }}

              key={ind} onClick={() => addVegies(item)}>
              {checkActive} {item}
            </motion.li>
          )
        })}
      </ul>

      {vegie.vegies.length !== 0 && (
        <div className="button-wrap">

          <motion.button
            variants={cNextVariants}
            whileHover="hov"
          >
            <Link to="/packaging">Next </Link>
          </motion.button>

        </div>
      )}
    </motion.div>
</NavTransition>

  )
}
 
export default Vegies