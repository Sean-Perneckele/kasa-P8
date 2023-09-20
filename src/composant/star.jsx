import star from '../asset/star1.png';
import star2 from '../asset/star2.png';
import données from '../kasa.json';
import { useParams } from 'react-router-dom';

function Star() {
    const { id } = useParams();
    const article = données.find((element) => element.id === id);
    const rating = parseInt(article.rating); 
    const totalStars = 5;

    return (
        <div className='stars'>
            {Array.from({ length: totalStars }).map((_, index) => (
                <span key={index}>
                    {index < rating ? (
                        <img src={star} alt='star-icon' />
                    ) : (
                        <img src={star2} alt='star-icon' />
                    )}
                </span>
            ))}
        </div>
    );
}

export default Star;