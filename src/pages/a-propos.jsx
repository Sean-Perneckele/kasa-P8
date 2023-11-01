import '../styles/css/propos.css'
import Collapse from '../composant/Collapse'
import about from '../about.json'



function Propos() {
    return (
      <div className="propos"> 

        <div className="propos--image"></div>

        { about.map((content, index) => {
          return <Collapse  titre={content.titre} contenu={content.contenu} key={`about-${index}`} />     
})}     
      </div>
    )
  }
  
  export default Propos