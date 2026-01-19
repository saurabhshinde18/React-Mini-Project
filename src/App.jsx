import MainRoutes from "./routes/MainRoutes"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
    <div className="w-full h-auto pl-10 pr-10 bg-gray-700">
      <Navbar/>
      <MainRoutes/>
    </div>
    </>
  )
}

export default App
