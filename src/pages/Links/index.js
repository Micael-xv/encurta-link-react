import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'

export default function Links() {
  return (
    <div className='links-container'>
      
      <div className="links-header">
        <FiArrowLeft size={38} color="#fff" />
        <h1>Meus Links</h1>
      </div>

      <div className="links-items">
        <button className="link">
          <FiLink size={18} color="#fff" />
          https://rocketseat.com.br
        </button>
        <button>
          <FiTrash size={18} color="#FF55454" />
        </button>
      </div>

    </div>
  );
}