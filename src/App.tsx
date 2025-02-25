import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
          </div>
        </BrowserRouter>
    </>
  )
}

export default App