import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="error">
      <h1 className='not'>404</h1>
      <h1 className='found'>Page Not Found</h1>
      
      <Link 
        to='/'
      >
        Voltar pra home
      </Link>
    </div>
  );
}
