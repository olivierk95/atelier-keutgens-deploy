import React from 'react'
import BackgroundImage from "gatsby-background-image"
import ArrowBottom from "../../assets/arrow-bottom.svg"
import Logo from "../../assets/logo-atelier-keutgens.svg"
import ReactMarkdown from 'react-markdown'


import atelierStyles from "./atelier.module.scss"

const Atelier = (props) => {
    return(
        <section>
            <BackgroundImage Tag="div" fluid={props.backgroundImage} className={atelierStyles.hero}>
                <div className={`container ${atelierStyles.heroContainer}`}>
                    <div className={atelierStyles.logoContainer}>
                        <Logo className={atelierStyles.logo}/>
                        <h1 className={atelierStyles.title}>Atelier d'<br/>Architecture<br/>Keutgens</h1>
                    </div>
                    <div className={`${atelierStyles.background} ${atelierStyles.heroHeadlinesContainer}`}>
                        <p className={`h2--centered ${atelierStyles.heroHeadlines}`}>{props.heroTitle}</p>
                    </div>
                    <div className={`${atelierStyles.background} ${atelierStyles.heroCtaContainer}`}>
                        <p className={`text-important--centered`}>Travaillons <span className="underlined">ensemble</span>.</p>
                    </div>
                    <div className={atelierStyles.arrow}>
                        <ArrowBottom />
                    </div>
                </div>
            </BackgroundImage>
            <div className={`container ${atelierStyles.atelierContainer}`}>
                <div className={atelierStyles.atelierDesc}>
                    <p className={`h1--centered ${atelierStyles.atelierHeadlines}`}>{props.atelierTitle}</p>
                    <ReactMarkdown className={`text-normal ${atelierStyles.description}`} children={props.atelierDesc}/>
                </div>
            </div>
        </section>
    )
}

export default Atelier