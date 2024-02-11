import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./components/Homepage"
import Register from "./components/Register"
import Update from "./components/Update"

export default function App()
{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/crud" element={<Register/>}/>
          <Route path="/edit" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}