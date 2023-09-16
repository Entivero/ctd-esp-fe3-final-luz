import React from 'react';
import DH from '../images/DH.png';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import tiktok from '../images/tiktok.png'
import'../Components/footer.css';
import { useCharStates } from './Context/context';

const Footer = () => {
  const {state, theme} = useCharStates()
  return (
    <footer>
      <div >
      <p>Powered by</p>
        <p className='logo'><img src={DH} alt='DH-logo' /></p>
      </div>
        <ul>
          <li><img src={instagram} alt="instagram-logo" /></li>
          <li><img src={facebook} alt="facebook-logo" /></li>
          <li><img src={whatsapp} alt="whatsapp-logo" /></li>
          <li><img src={tiktok} alt="tiktok-logo" /></li>
        </ul>
    </footer>
  )
}

export default Footer
