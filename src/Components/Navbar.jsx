import { useDentistContext } from './Context/GlobalContext'; 
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, toggleTheme } = useDentistContext()
  

  useEffect(() => {
    document.body.className = state.theme; 
  }, [state.theme]);

  return (
    <nav className={`navbar`}>
      <div className="icon-navbar">
        <Link to="/">DH Odonto</Link>
      </div>
      <div className='links-navbar'>
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/contact"><h4>Contact</h4></Link> 
        <Link to="/favs"><h4>Favs</h4></Link>
        <button onClick={toggleTheme}>Change theme 🌗</button>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}

export default Navbar