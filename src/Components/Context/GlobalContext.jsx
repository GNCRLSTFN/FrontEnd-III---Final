import { createContext, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import { reducer } from "../Reducers/reducer";




const localStorageFavs = JSON.parse(localStorage.getItem('favs')) || []
const localStorageTheme = localStorage.getItem('theme') || 'light'

export const ContextGlobal = createContext();

export const initialState = {
  theme: localStorageTheme,
  dentists: [],
  favs: localStorageFavs
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  // const [favs, setFavs] = useState(localStorageFavs)
  // const [dentists, setDentists] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState)

  const url = "https://jsonplaceholder.typicode.com/users"

  useEffect(()=>{
    axios(url).then((res) =>{
      console.log(res)
      dispatch({type: "GET_DENTISTS", payload: res.data})
      // setDentists(res.data)
    })
  }, [])

  useEffect(()=>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  const toggleTheme = () => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', newTheme)
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ContextGlobal.Provider value={{state, dispatch, toggleTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDentistContext = () => useContext(ContextGlobal)
