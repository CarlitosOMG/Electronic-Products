import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthPage from '../pages/auth'
import HomePage from '../pages/home'
import NewProduct from '../pages/newProduct'

const Router = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/auth" element={<AuthPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/newProduct" element={<NewProduct />} />
   </Routes>
  </BrowserRouter>
 )
}

export default Router
