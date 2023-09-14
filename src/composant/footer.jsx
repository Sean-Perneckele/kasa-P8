import '../styles/css/footer.css'
import image2  from '../asset/logo2.png'


function Footer() {
    return (
    <footer>
        <div>
            <img src={image2} alt="Logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
    )
}

export default Footer