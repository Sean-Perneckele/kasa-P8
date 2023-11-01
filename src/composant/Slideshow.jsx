import React, { useState, useEffect } from 'react';
import '../styles/css/Slideshow.css';
import { useParams } from 'react-router-dom';
import données from '../kasa.json';
import vector1 from '../asset/Vector1.png';
import vector2 from '../asset/Vector2.png';

function Slideshow() {
  const { id } = useParams();
  const article = données.find((element) => element.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Masquer la numérotation si une seule image
    if (article.pictures.length === 1) {
      const numerotationElement = document.querySelector('.numerotation');
      const arrow1 = document.querySelector('.vector1')
      const arrow2 = document.querySelector('.vector2')
      if (numerotationElement) {
        numerotationElement.style.display = 'none';
        arrow1.style.display = 'none';
        arrow2.style.display = 'none';
      }
    }
  }, [article.pictures.length]);

  if (!article || !article.pictures || article.pictures.length === 0) {
    return <div>Logement introuvable</div>;
  }

  // Fonction pour passer à l'image précédente
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? article.pictures.length - 1 : prevIndex - 1));
  };

  // Fonction pour passer à l'image suivante
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === article.pictures.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='slideshow'>
      <div className='slide-image'>
        <img src={article.pictures[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
        <img onClick={previousImage} className='arrow vector1' src={vector1} alt="flèche gauche" />
        <div className='numerotation'>
          {currentImageIndex + 1} / {article.pictures.length}
        </div>
        <img onClick={nextImage} className='arrow vector2' src={vector2} alt="flèche droite" />
      </div>
    </div>
  );
}

export default Slideshow;