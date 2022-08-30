
import UsersContainer from './components/UsersContainer'
import ItemsContainer from './components/ItemsContainer'
import { Routes, Route } from 'react-router-dom'

const Routers = () => (
  <Routes>
    <Route exact path='/users' element={<UsersContainer />} />
    <Route path='/users/:id' element={<ItemsContainer />} />
  </Routes>
)

export default Routers
