import '../styles/css/propos.css'
import Collapse from '../composant/Collapse'

const contenu1 = "les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conformes aux logements, et toutes les informations sont regulièrement vérifiées par nos équipes. ";
const contenu2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme";
const contenu3 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme";
const contenu4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécuruté établis par nos services. En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
function Propos() {



    return (
      <div className="propos"> 
        
        <Collapse titre="Fiabilité"  contenu={contenu1}/>
        <Collapse titre="Respect" contenu={contenu2} />
        <Collapse titre="Service" contenu={contenu3} />
        <Collapse titre="Sécurité" contenu={contenu4} />

        
      </div>
    )
  }
  
  export default Propos