import React from "react";
import { Link } from "react-router-dom";
import { useDentistContext } from "./Context/GlobalContext";
import '../styles/Card.css'




const Card = ({ name, username, id, showAddFavButton }) => {
  const {dispatch} = useDentistContext()
  const addFav = (e)=>{
    e.preventDefault()
    dispatch({type: "ADD_FAV", payload: {name, username, id}})
    // setFavs((favs)=>[...favs, {name, username, id}])
    alert('Dentist added to fav!')
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card-container">
      <Link to={`/detail/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src={require('../images/doctor.jpg')} alt="" />
        <h1>{name}</h1>
        <h4>{username}</h4>
        <h4>ID:{id}</h4>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {showAddFavButton && <button onClick={addFav} className="favButton">ADD FAV ⭐</button>}

    </div>

  );
};

export default Card;
