
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Modal from './Modal';

const Header = () => {
const [showModal, setShowModal] = useState(false);

  const containerVariants = {
    init: {
      y: -250
    },
    ani: {
      y: 0,
      transition: {
        type: 'spring', stiffness: 120
      }

    }
  }


  return (
    <>

      <motion.header variants={containerVariants} initial="init" animate="ani" >
        <div className='logo'>Raf OG</div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/fruits '>Fruits</Link></li>
          <li><Link to='/vegies'>Vegies</Link></li>
          <li><button style={{color: "red", padding: ".8em", borderRadius: "5em"}} onClick={()=> setShowModal(!showModal)}>My Modal</button></li>
        </ul>
      </motion.header>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
    </>
  )
}

export default Header
