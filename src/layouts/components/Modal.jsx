import { AnimatePresence, motion } from 'framer-motion'

const Modal = ({ showModal, setShowModal }) => {

    const bDrop = {
        init: {
            opacity: 0
        },
        ani: {
            opacity: 1
        }
    }
    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    className='bDrop'
                    variants={bDrop}
                    initial="init"
                    animate="ani"
                    exit="init"
                >
                    <div className='close' onClick={() => setShowModal(!showModal)}>
                        Close
                    </div>
                </motion.div>
            )

            }
        </AnimatePresence>
    )
}

export default Modal
