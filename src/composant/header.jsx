import { Link, useLocation } from 'react-router-dom';
import '../styles/css/header.css';
import image1 from '../asset/logo1.png';

function Header() {
  const location = useLocation();

  const isOnAccueilPage = location.pathname === '/';
  const isOnProposPage = location.pathname === '/propos';

  return (
    <nav className='header'>
      <img src={image1} alt='Logo' />
      <div>
        <Link className={isOnAccueilPage ? 'acceuil underline' : 'acceuil'} to='/'>
          Accueil
        </Link>
        <Link className={isOnProposPage ? 'propo underline' : 'propo'} to='/propos'>
          A Propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;