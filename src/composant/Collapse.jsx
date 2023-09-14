import '../styles/css/Collapse.css'
import vector from '../asset/Vector.png'
import { useState } from 'react'

function Collapse({ titre, contenu }) {
  const [isActive, setIsActive] = useState(false);

  const toggleContent = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`collapse ${isActive ? 'active' : ''}`}>
      <div className='collapse--title' >
        <p>{titre}</p>
        <img src={vector} alt="fleche" onClick={toggleContent} className={`img ${isActive ? 'teste' : ''}`} />
      </div>
      <div className={`collapse--content ${isActive ? 'active' : ''}`}>{contenu}</div>
    </div>
  );
}

export default Collapse;