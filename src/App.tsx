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

     <div className='min-h-[88.5vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     </div>

      <Footer />
    </>
  )
}

export default App