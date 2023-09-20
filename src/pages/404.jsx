import '../styles/css/error.css'
import error  from'../asset/404.png'
import { Link } from 'react-router-dom';


function Error() {
    return (
      <div className="error">
        <img className='error--img' src={error} alt="erreur 404" />
        <p className='error--content'> Oups! La page que vous demandez n'existe pas.</p>

        <Link to={'/'} className='error--link'> Retourner sur la page d'aceuil   </Link>
        
      </div>
    )
  }
  
  export default Error