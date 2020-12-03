import React from 'react'
import Img from 'gatsby-image'
import contactStyles from "./contact.module.scss"

const Contact = (props) => {
    return(
        <section className="container">
            <div className={contactStyles.container}>
                <div className={contactStyles.contact}>
                    <h2 className={`h1 ${contactStyles.title}`}>Contact</h2>
                    <div className={contactStyles.info}>
                        <p className={`text-normal ${contactStyles.infoDesc}`}>{props.invitation}</p>
                        <p className="text-normal">Voie Pirson 9A, 4877 Olne</p>
                        <p className="text-normal--black">0431 83 10 87</p>
                        <p className="text-normal--black">atelier.keutgens@gmail.com</p>
                    </div>
                </div>
                <div className={contactStyles.contact}>
                    <div className={contactStyles.hero}>
                        <Img fluid={props.photoMichel} className={contactStyles.image}/>
                        <div className={contactStyles.logoContainer}>
                            <div className={contactStyles.logo}>
                                Logo
                            </div>
                        </div>
                    </div>
                    <div className={contactStyles.info}>
                        <h3 className="h2">Michel Keutgens</h3>
                        <p className={`text-important ${contactStyles.infoTitle}`}>Architecte</p>
                        <p className={`text-normal ${contactStyles.infoDesc}`}>{props.descriptionMichel}</p>
                        <p className="text-normal--black">michel.keutgens@gmail.com</p>
                        <p className="text-normal--black">0471 83 10 87</p>
                    </div>
                </div>
                <div className={contactStyles.contact}>
                    <div className={contactStyles.hero}>
                        <Img fluid={props.photoSabina} className={contactStyles.image}/>
                        <div className={contactStyles.logoContainer}>
                            <div className={contactStyles.logo}>
                                Logo
                            </div>
                        </div>
                    </div>
                    <div className={contactStyles.info}>
                        <h3 className="h2">Sabina Ianieri</h3>
                        <p className={`text-important ${contactStyles.infoTitle}`}>Architecte d'intérieur</p>
                        <p className={`text-normal ${contactStyles.infoDesc}`}>{props.descriptionSabina}</p>
                        <p className="text-normal--black">sabina.ianieri@gmail.com</p>
                        <p className="text-normal--black">0471 83 10 87</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

