import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCharStates } from '../Components/Context/context';
import doctor from '../images/doctor.jpg';
import './detail.css'



const Detail = () => {
  const {state, dispatch} = useCharStates()
  const params = useParams()
  const urlID = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {
    axios(urlID).then(response => {
      console.log(response);
      dispatch ({type: 'ONE_DENTIST', payload: response.data})
    })
  })



  return (
    <>
      <div className={state.theme === 'light' ? 'light main' : 'dark main'}>
      <div className="detail-container">
        <h1>Detail Dentist id</h1>
        <div className="dentist-info">
          <img className="dentist-image" src={doctor} alt="doctor" />
          <div className="dentist-details">
            <h2>
              DR: {state.dentistDetail.username}, {state.dentistDetail.name}
            </h2>
            <h2>Detalles:</h2>
            <p>Telefono: {state.dentistDetail.phone}</p>
            <p>Correo Electronico: {state.dentistDetail.email}</p>
            <p>WebSite: {state.dentistDetail.website}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Detail