import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { useCharStates } from '../Context/context';

const Navbar = () => {
  
  const {state, dispatch} = useCharStates()

  return (
    <header>
    <nav className='navbar'>
    <Link className='linknav' to='/'>Home</Link>
    <Link className='linknav' to='/favs'>Favs</Link>
     <Link className='linknav' to='/contact'>Contact</Link>
    <button className='buttonTheme' onClick={() => dispatch({ type: "HANDLE_THEME", payload: state.theme== 'light' ? 'dark' : 'light' })}>🌙</button>
    </nav> 
  </header>
  )
}

export default Navbar