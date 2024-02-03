import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion'
const Button = ({ title, button }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 5 }}
            className="button-box">

            <h2>{title} </h2>
            <div className="button-wrapper">
                {
                    button && button.map((btn, ind) => {
                        // var link = btn[1] ? `/${btn[1]}` : '/';
                        // var label = btn[0] ? btn[0] : null;
                        const [label = null, link = '/'] = btn;
                        return (
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                key={ind}><NavLink to={link}>
                                    {label}
                                </NavLink>
                            </motion.button>
                        );
                    })
                }

            </div>
        </motion.div>
    )
}

export default Button
