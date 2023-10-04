import données from '../kasa.json'
import '../styles/css/Thumbnail.css'
import { Link } from 'react-router-dom'

function Thumbnail() {
  return (
    <div className='thumbnail'>
      {données.map((article) => (
        <Link to={`/logement/${article.id}`} className='thumbnail__article' key={article.id}>
          <div className="thumbnail__image-container">
            <img src={article.cover} alt="" />
          </div>
          <p>{article.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default Thumbnail;