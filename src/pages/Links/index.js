import { useState, useEffect } from 'react';
import './links.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import { getLinksSave, deleteLink } from '../../services/storeLinks';
import LinkItem  from '../../components/LinkItem';

export default function Links() {
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyLista, setEmptyLista] = useState(false);

  // o useEffect é um hook que executa uma função toda vez que o componente é renderizado
  useEffect(() =>{
    async function getLinks() {
      const result = await getLinksSave('@apenasumachave');
      
      if(result.length === 0) {
        setEmptyLista(true);
      }

      setMyLinks(result);
    }
    getLinks();
  }, [])

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id) {
    const result = deleteLink(myLinks, id);

    if(result.length === 0) {
      setEmptyLista(true);
    }

    setMyLinks(result);
  }

  return (
    <div className='links-container'>
      
      <div className="links-header">
        <Link to="/" className="back">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {emptyLista && (
        <div className="links-item">
          <h2 className="empty-text">Sua lista está vazia...</h2>
        </div>
      )}

      { myLinks.map( link => (
        <div key={link.id} className="links-items">
          <button className="link" onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>
          <button className="link-delete" onClick={() => handleDelete(link.id)}>
            <FiTrash size={18} color="red" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
          content={data}
        />
      )}

    </div>
  );
}