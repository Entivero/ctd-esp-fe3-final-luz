import React from "react";
import './card.css';
import doctor from '../images/doctor.jpg';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { useCharStates } from "./Context/context";


const Card = ({name, username, id }) => {
  const {state, dispatch} = useCharStates()

  const getFavs =()=>{

    let favs = state.favs.filter(fav => fav.id === id);
    let isStored = favs == null || favs.length < 1 ? false : true;

    return isStored;
  }

  const [dentist, setDentist] = useState(getFavs ())

  const addFav = ()=>{
    dispatch ({type: 'ADD_FAV', payload:{name: name, username: username, id: id}})
    setDentist(true);
  }

  const removeFav = () => { 
    dispatch({type: 'REMOVE_FAV', payload: {id: id}})
    setDentist(false);
  }  

  return (
    <div className="card">
        <img src={doctor} alt="" className="card-image"/>
        <div className="card-content">
        <Link to ={`/detail/${id}`} ><h2 className="card-title">{name}</h2></Link>
        <p className="card-username">{username}</p>
      </div>
        <button onClick={dentist ? removeFav : addFav} className="favButton" > {dentist ? "Eliminar de Favorito" : "Favorito"}</button>
    </div>
  );
};

export default Card;
