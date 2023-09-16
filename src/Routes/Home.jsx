import React from 'react'
import Card from '../Components/Card'
import'../Components/card.css'
import { useCharStates } from '../Components/Context/context'


const Home = () => {

const {state, theme} = useCharStates ()

  return (
    <main className={state.theme == 'light' ? "light" : "dark"}>
      <h1>Home</h1>
      <div className='card-grid'>
      {state.dentists.map(dentists => <Card key={dentists.id} name={dentists.name} username={dentists.username} id={dentists.id}/>)}
      </div>
    </main>
  )
}

export default Home