import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../components/Menu';

export default function Home() {
  const [link, setLink] = useState('');
  
  function handleShortLink() {
    // Função para encurtar o link
    alert("Meu link: " + link);
  }

  return (
    <div className="container-home">
      
      <div className="logo">
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input 
            type="text"
            placeholder="Cole seu link aqui" 
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
          <button onClick={handleShortLink}>Encurtar Link</button>
      </div>

      <Menu />

    </div>
  );
}