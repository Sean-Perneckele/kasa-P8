import '../styles/css/Slideshow.css'
import { useParams } from 'react-router-dom';
import données from '../kasa.json'
import vector1 from '../asset/Vector1.png'
import vector2 from '../asset/Vector2.png'
import { useState, useEffect } from 'react'


function Slideshow() {

    const { id } = useParams();
    const article = données.find((element) => element.id === id);  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Masquer la numérotation si une seule image
        if (article.pictures.length === 1) {
            const numerotationElement = document.querySelector('.numerotation'); // Utilisez querySelector pour sélectionner par classe
            if (numerotationElement) {
                numerotationElement.style.display = 'none';
            }else{
                numerotationElement.style.display ='flex' ;
            }
        }

        displaySlide();
    });

    if (!article) {
      return <div>Logement introuvable</div>;
    }

         // Fonction pour passer à l'image précédente
    const previousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex (article.pictures.length - 1);
        }
    };


    
    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        if (currentImageIndex < article.pictures.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
            
        } else {
            setCurrentImageIndex(0);
        }
    };
  

    const displaySlide = () => {
        // Récupérez la diapositive actuelle en fonction de l'index courant
        const slide = article.pictures[currentImageIndex];
    
        // Sélectionnez l'élément HTML où vous souhaitez afficher l'image (par exemple, un élément avec la classe "slide-image")
        const imageElement = document.querySelector(".slideshow div");
     
    
        // Mettez à jour le style de l'élément image pour afficher la diapositive actuelle
        if (imageElement && slide) {
            imageElement.style.backgroundImage = `url(${slide})`;
        }
    
      
    };

    return (
        <div className='slideshow'>
            <div> 
                <img onClick={previousImage} className='vector1' src={vector1} alt="flèche gauche" />
                <div className='numerotation'>
                    {/* Affichez l'index de l'image actuelle */}
                    {currentImageIndex + 1} / {article.pictures.length}
                </div>
                <img onClick={nextImage} className='vector2'  src={vector2} alt="flèche droite" />
            </div>
        </div>

    )

}

export default Slideshow