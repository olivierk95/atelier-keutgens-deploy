import React from 'react'
import Img from 'gatsby-image'
import contactStyles from "./contact.module.scss"
import Logo from "../../assets/logo-atelier-keutgens.svg"
import LogoMichel from "../../assets/logo-michel.svg"
import LogoSabina from "../../assets/logo-sabina.svg"
import ReactMarkdown from 'react-markdown'

const Contact = (props) => {
    return(
        <section className="container">
            <div className={contactStyles.container}>
                <div className={contactStyles.contact}>
                    <div className={contactStyles.logoMainContainer}>
                        <Logo className={contactStyles.logo}/>
                    </div>
                    <h2 className={`h1 ${contactStyles.title}`}>Contact</h2>
                    <div className={contactStyles.info}>
                        <ReactMarkdown className={`text-normal ${contactStyles.infoDesc}`} children={props.invitation}/>
                        <p className="text-normal--bold">Voie Pirson 9A, 4877 Olne</p>
                    </div>
                </div>
                <div className={contactStyles.contact}>
                    <div className={contactStyles.hero}>
                        <Img fluid={props.photoMichel} className={contactStyles.image}/>
                        <div className={contactStyles.logoContainer}>
                            <LogoMichel className={contactStyles.logo}/>
                        </div>
                    </div>
                    <div className={contactStyles.info}>
                        <h3 className="h2">Michel Keutgens</h3>
                        <p className={`text-important ${contactStyles.infoTitle}`}>Architecte</p>
                        <ReactMarkdown className={`text-normal ${contactStyles.infoDesc}`} children={props.descriptionMichel}/>
                        <p className="text-normal--bold">michel.keutgens@gmail.com</p>
                        <p className="text-normal--bold">0477 55 04 73</p>
                    </div>
                </div>
                <div className={contactStyles.contact}>
                    <div className={contactStyles.hero}>
                        <Img fluid={props.photoSabina} className={contactStyles.image}/>
                        <div className={contactStyles.logoContainer}>
                            <LogoSabina className={contactStyles.logo}/>
                        </div>
                    </div>
                    <div className={contactStyles.info}>
                        <h3 className="h2">Sabina Ianieri</h3>
                        <p className={`text-important ${contactStyles.infoTitle}`}>Architecte d'intérieur</p>
                        <ReactMarkdown className={`text-normal ${contactStyles.infoDesc}`} children={props.descriptionSabina}/>
                        <p className="text-normal--bold">sabina.keutgens@gmail.com</p>
                        <p className="text-normal--bold">0475 23 47 47</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

