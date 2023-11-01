import '../styles/css/logement.css'
import { useParams, Navigate } from 'react-router-dom';
import données from '../kasa.json'
import Slideshow from '../composant/Slideshow';
import Star from '../composant/star';
import Collapse from '../composant/Collapse'

function Logement() {

  const { id } = useParams();
  const article = données.find((element) => element.id === id);

  if (!article) {
    return <Navigate to="/error" replace />;
  }


  const equipments = article.equipments.map((equipments, index) => (
    <p className='equipments' key={index}>{equipments}</p>
  ));


  return (
    <div className="logement">
      <Slideshow />
        <div className='contente'>
            <div className='contente__info'>
              <p className='title' >{article.title}</p>
              <p className='location'>{article.location}</p>
                  <div className='tags' >{article.tags.map((tag, index) => (
                      <p className='tags--content' key={index}>{tag}</p>
                    ))}</div>
            </div  >

          <div className='evaluation'>
            <div className='utilisateur'> 
              <p className='utilisateur--nom'> {article.host.name} </p>  
              <img className='utilisateur--image' src={article.host.picture} alt={article.host.name} />
            </div>

            <div className='star'> 
              <Star />
            </div>
          </div>

                 

        </div>

        <div className='information'>
          <div className='information__description'> <Collapse titre="Description"  contenu={article.description}/> </div>
          <div className='information__equipement'><Collapse titre="Equipement"  contenu={equipments}/></div>          
        </div>    
    </div>
  );
}
  
  export default Logement