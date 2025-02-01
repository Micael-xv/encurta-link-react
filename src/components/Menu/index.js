import './menu.css';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="menu">
      <a className="social" href="https://www.instagram.com/micael_trevisan">
        <BsInstagram size={24} color="#FFF" /> 
      </a>
      <links className="menu-item" to="/links">
        Meus Links
      </links>
    </div>
  )
}