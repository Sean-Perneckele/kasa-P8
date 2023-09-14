import { Link } from 'react-router-dom'
import '../styles/css/header.css'
import image1  from '../asset/logo1.png'

function Header() {
    return (
        <nav className='header'>
            <img src={image1} alt="Logo" />
            <div>
            <Link className='acceuil' to="/">Accueil</Link>
            <Link className='propo' to="/propos">A Propos</Link>
            </div>
        </nav>
    )
}

export default Header