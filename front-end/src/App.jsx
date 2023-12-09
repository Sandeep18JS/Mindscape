import { Routes, Route } from 'react-router-dom'
import User from './roles/User'
import Admin from './roles/Admin'
import Client from './roles/Client'
import Signup from './components/Signup'
import Login from './components/Login'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/user' element={<User />}></Route>
      <Route path='/admin' element={<Admin />}></Route>
      <Route path='/client' element={<Client />}></Route>
    </Routes>
  )
}

export default App
