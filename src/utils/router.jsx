import { createBrowserRouter } from 'react-router-dom'
import MainRoot from '../layouts/MainRoot'
import Home from '../views/Home'

import Fruits from '../views/Fruits'
import Vegies from '../views/Vegies'
import Packaging from '../views/Packaging'
import Order from '../views/Order'
//import { AnimatePresence } from 'framer-motion'



const router = createBrowserRouter(
    
    [{
    path: '/',
    element: <MainRoot />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/fruits',
            element: <Fruits />
        }, {
            path: '/vegies',
            element: <Vegies />
        }, {
            path: '/packaging',
            element: <Packaging />
        }, {
            path: '/order',
            element: <Order />
        }

    ]
}])

export default router