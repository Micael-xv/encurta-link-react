import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="error">
      <img src="./not.png" alt="Página não encontrada"/>
      <h1>Página não encontrada!</h1>
      <Link 
        to='/'
      >
        Voltar pra home
      </Link>
    </div>
  );
}
