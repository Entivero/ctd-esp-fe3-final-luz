import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Components/Context/context";



const Favs = () => {

const {state, theme} = useCharStates()


  return (
    <>
      <div className={state.theme == 'light' ? "light main" : "dark main"}>
      <h1>Odontólogos favoritos</h1>
      <div className="card-grid">
        {state.favs.length == 0 ? 
        <h2>No hay Favoritos</h2> :
        state.favs.map((fav) => 
        <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>)}
      </div>
    </div>

    </>
  );
};

export default Favs;
