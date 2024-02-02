
import { RouterProvider } from 'react-router-dom';
import { ContextProvider } from './utils/Context/ContextProvider';
import router from './utils/router';
import './assets/scss/app.scss';

function App() {

  return (
    <>
      <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ContextProvider>
    </>
  )
}

export default App
