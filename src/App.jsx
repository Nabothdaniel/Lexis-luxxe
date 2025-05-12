import { Outlet } from "react-router-dom"

function App() {

  return (
    < div className=' bg-black h-screen w-screen text-white'>
      <Outlet/>
    </div>
  )
}

export default App
