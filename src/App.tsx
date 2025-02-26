import { BrowserRouter, Route, Routes, } from 'react-router-dom';  
import Colaboradores from './components/colaboradores/Colaboradores'
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <BrowserRouter>  
      <Routes>  
      <Route path="/home" element={<Home />} />
        <Route path="/colaboradores" element={<Colaboradores />} />
      </Routes>  
    </BrowserRouter>  
    </>
  )
}
export default App
