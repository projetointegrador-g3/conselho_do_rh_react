import { ToastContainer } from 'react-toastify'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
     
     <ToastContainer />
     <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App