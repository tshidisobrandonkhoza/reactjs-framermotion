import { createBrowserRouter } from 'react-router-dom'
import MainRoot from '../layouts/MainRoot'
import Home from '../views/Home'

import Fruits from '../views/Fruits'
import Vegies from '../views/Vegies'



const router = createBrowserRouter([{
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
        }
    ]
}])

export default router