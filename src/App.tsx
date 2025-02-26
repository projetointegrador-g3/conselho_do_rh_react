import { ToastContainer } from 'react-toastify'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Colaboradores from './components/colaboradores/Colaboradores'

function App() {
  return (
    <>
     <ToastContainer />
     <Navbar />

     <div className='min-h-[89vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/colaboradores' element={<Colaboradores />} />
      </Routes>
     </div>

      <Footer />
    </>
  )
}

export default App