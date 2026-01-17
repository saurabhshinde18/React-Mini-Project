import MainRoutes from "./routes/MainRoutes"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
    <div className="w-full h-auto bg-gray-700">
      <Navbar/>
      <MainRoutes/>
    </div>
    </>
  )
}

export default App
