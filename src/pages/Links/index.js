import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Links() {
  return (
    <div className='links-container'>
      
      <div className="links-header">
        <Link to="/" className="back">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className="links-items">
        <button className="link">
          <FiLink size={18} color="#fff" />
          https://rocketseat.com.br
        </button>
        <button className="link-delete">
          <FiTrash size={18} color="red" />
        </button>
      </div>

    </div>
  );
}