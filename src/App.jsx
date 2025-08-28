 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
 
import { Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import Browse from './pages/Browse'
import './App.css'

const App = () => {
  return (
    <div className='custom-gradient '>
      <Navbar/>
         <Routes> 
        <Route element={<Home/>} path='/'/>  
        <Route element={<Search/>} path='/search'/> 
        <Route element={<Browse/>} path='/browse'/>  
      </Routes>
      <Footer/>
    </div>
  )
}

export default App