import '../styles/css/logement.css'
import { useParams } from 'react-router-dom';
import données from '../kasa.json'
import Slideshow from '../composant/Slideshow';
import Star from '../composant/star';

function Logement() {

  const { id } = useParams();

  const article = données.find((element) => element.id === id);

  if (!article) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div className="logement">
     <Slideshow />

    <div className='un'>
      <div className='deux'>

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


    </div>
 
        
    
  );
}
  
  export default Logement