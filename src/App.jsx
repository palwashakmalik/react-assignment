import Routers from './Routers'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <div className='App'>
        <div className='App-header'>
          <h1>React Assignment</h1>
          <Routers />
        </div>
      </div>
    </BrowserRouter>
    <ToastContainer />
  </>
)
export default App
