import { PiSunBold } from "react-icons/pi"
import { RxMoon } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { toggleTheme } from "../reducer/AppSlice";


const Theme = () => {
    const darkMode = useSelector((state: RootState) => state.app.darkMode)
    const dispatch = useDispatch()

    const handleTheme = () => {
        dispatch(toggleTheme())
        localStorage.setItem("isLightTheme", JSON.stringify(darkMode))
    }

    return (
        <div className={`w-20 h-9 rounded-xl flex ${darkMode ? "bg-slate-800" : "bg-slate-500"}`}>
            <span className={`flex h-9 rounded-full items-center duration-500 ${darkMode ? "translate-x-12" : "translate-x-1"}`}
                onClick={handleTheme}>

                <PiSunBold className={`text-3xl text-yellow-500 duration-500 ${darkMode ? "hidden" : "flex"} `} />
                <RxMoon className={`text-3xl text-white duration-500 ${darkMode ? "flex" : "hidden"}`} />

            </span>
        </div>
    );
}

export default Theme;