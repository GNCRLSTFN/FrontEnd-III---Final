import React from "react";
import Card from "../Components/Card";
import { useDentistContext } from "../Components/Context/GlobalContext";
import '../styles/Favs.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useDentistContext()

  const handleReset = () =>{
    const userConfirmed = window.confirm('You want to reset your favs?')
    if(userConfirmed){
      localStorage.clear()
      alert('Favs has been reset!')
      window.location.reload()
    }
  }
  return (
    <div className={`favs-container`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((dentist)=><Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username} showAddFavButton={false} />)}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      <button onClick={handleReset}>Reset favs</button>
    </div>
  );
};

export default Favs;
