import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <ToastContainer />

    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default App
