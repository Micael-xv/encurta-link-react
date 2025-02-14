import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';

export default function Home() {
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  async function handleShortLink() {
    // Função para encurtar o link
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);
      saveLink('@apenasumachave', response.data); // Salvando o link no localStorage
      setLink('');
    } catch (error) {
      alert('Ops! Ocorreu um erro ao encurtar o link, tente novamente.');
      setLink('');
    }
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
      
      { showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data} // Passando o conteúdo do link encurtado
        />
      )}

    </div>
  );
}