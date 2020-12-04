import React from 'react'
import BackgroundImage from "gatsby-background-image"
import ArrowBottom from "../../assets/arrow-bottom.svg"
import ReactMarkdown from 'react-markdown'


import atelierStyles from "./atelier.module.scss"

const Atelier = (props) => {
    return(
        <section>
            <BackgroundImage Tag="div" fluid={props.backgroundImage} className={atelierStyles.hero}>
                <div className={`container ${atelierStyles.heroContainer}`}>
                    <div className={atelierStyles.logoContainer}>
                        <div className={atelierStyles.logo}>Logo</div>
                        <h1 className="text-important">Atelier d'<br/>Architecture<br/>Keutgens</h1>
                    </div>
                    <div>
                        <p className={`h2--centered ${atelierStyles.heroHeadlines}`}>{props.heroTitle}</p>
                        <p className="text-important--centered">Travaillons <span className="underlined">ensemble</span>.</p>
                    </div>
                    <div className={atelierStyles.arrow}>
                        <ArrowBottom />
                    </div>
                </div>
            </BackgroundImage>
            <div className={`container ${atelierStyles.atelierContainer}`}>
                <div className={atelierStyles.atelierDesc}>
                    <p className={`h1--centered ${atelierStyles.atelierHeadlines}`}>{props.atelierTitle}</p>
                    <ReactMarkdown className="text-normal--centered" children={props.atelierDesc}/>
                </div>
            </div>
        </section>
    )
}

export default Atelier