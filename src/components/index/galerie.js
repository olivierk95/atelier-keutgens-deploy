import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import galerieStyles from "./galerie.module.scss"

const slugify = require('slugify')

const Galerie = (props) => {
    console.log(props)
    return(
        <section className="container">
            <div className={galerieStyles.container}>
                <h2 className={`h1 ${galerieStyles.title}`}>Projets</h2>
                <div className={galerieStyles.gallery}>
                    {props.projets.map((projet) => 
                        <Link key={projet.id} to={`${slugify(projet.titre)}`} className={galerieStyles.item}>
                            <div className={galerieStyles.itemCoverContainer}>
                                <Img fluid={{...projet.couverture.childImageSharp.fluid, aspectRatio: 1}} className={galerieStyles.itemCover}/>
                            </div>
                            <p className={`text-normal ${galerieStyles.itemTitle}`}>{projet.titre}</p>
                        </Link>
                    )}
                </div>
                <div className={galerieStyles.linkContainer}>
                    <Link to={slugify(props.projets[0].titre)} className={galerieStyles.link}>
                        <p className={`text-normal`}><span className={galerieStyles.arrow}>→</span> Voir la galerie</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Galerie