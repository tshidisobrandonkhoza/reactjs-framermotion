
import { RouterProvider } from 'react-router-dom';
import { ContextProvider } from './utils/Context/ContextProvider';
import router from './utils/router';
import './assets/scss/app.scss';
import { AnimatePresence } from 'framer-motion';

function App() {

  return (
    <>
      <ContextProvider>
        <AnimatePresence>
          <RouterProvider router={router}></RouterProvider>
        </AnimatePresence>
      </ContextProvider>
    </>
  )
}

export default App
