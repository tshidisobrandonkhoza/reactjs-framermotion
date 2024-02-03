import { motion } from 'framer-motion';
 
const NavTransition = ({ children }) => {


    return (
        <>
          {children}
          <motion.div
            className="route-transitions"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{duration: 0.5, type: "easeInOut"}}
            exit={{ scaleY: 1 }}
        />
        </>
       
    )

};

export default NavTransition;