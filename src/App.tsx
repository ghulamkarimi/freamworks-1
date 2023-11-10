import { Outlet } from "react-router-dom"
import MainMenu from "./components/navbar/MainMenu"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "./store"
import { toggleTheme } from "./reducer/AppSlice"
import  { useEffect } from "react"



const App = () => {
  const darkMode = useSelector((state: RootState) => state.app.darkMode)
  const dispatch = useDispatch()
   

 
   useEffect(()=>{
    const darkModeInLocalStorage = JSON.parse(localStorage.getItem("isLightTheme") || "false")
    if (!darkModeInLocalStorage) {
      dispatch(toggleTheme())
    }
   } ,[dispatch])
 

  return (
    <div className={`min-h-screen  px-12 wrapper  ${darkMode ? "bg-slate-600" : "bg-slate-400"}`}>
      <header>
        <MainMenu />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
