import { useState } from 'react'
import './styles.css'
import logo from '../../assets/RK_logo.webp'
import image from '../../assets/RK.webp'

const HeroImageCard = () => {
    const [flipped, setFlipped] = useState(false)

    return (
        <div className={`hero-imagecard${flipped ? ' flipped' : ''}`} onClick={() => setFlipped(f => !f)}>
            <div className="front">
                <img src={image} alt="Raunak Kesarwani" />
            </div>
            <div className="back">
                <img src={logo} alt="Raunak Kesarwani" />
            </div>
        </div>
    )
}

export default HeroImageCard