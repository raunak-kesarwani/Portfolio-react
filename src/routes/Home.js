import React from 'react'
import Navigation from '../layout/Navigation.js'
import BG from '../assets/BG.webm'
import HeroImageCard from '../components/Home/HeroImageCard.js'
import Content from '../components/Home/Content.js'
import Social from '../components/Home/Social.js'
import Resume from '../components/Home/Resume.js'

const Home = () => {
    return (
        <>
            <Navigation title="Raunak Kesarwani" />
            <section className="Hero">
                <div className="hero-bg">
                    <video autoPlay loop muted playsInline className="bg-video">
                        <source src={BG} type="video/webm" />
                    </video>
                </div>
                <HeroImageCard />
                <Content />
                <div className="social-row">
                    <Social
                        instagram="https://www.instagram.com/unscrambling_raunak"
                        linkedin="https://www.linkedin.com/in/raunak-kesarwani/"
                        github="https://github.com/raunak-kesarwani"
                        kaggle="https://www.kaggle.com/raunakkesarwani"
                        email="mailto:raunakkesarwani1709@gmail.com"
                        youtube="https://www.youtube.com/@Mr.Raunak_Kesarwani" />
                    <Resume />
                </div>
            </section>
        </>
    )
}

export default Home;