import React from "react"
import { graphql } from 'gatsby'

import Atelier from '../components/index/atelier'
import Galerie from '../components/index/galerie'
import Contact from '../components/index/contact'
import Footer from '../components/index/footer'

import "../styles/main.scss"
import indexStyles from "./index.module.scss"

const Accueil = ({data}) => {
  return (
    <div className={indexStyles.container}>
      <Atelier 
        backgroundImage={data.background.childImageSharp.fluid}
        heroTitle={data.atelier.titre_couverture}
        atelierTitle={data.atelier.titre_atelier}
        atelierDesc={data.atelier.description_atelier}
      />
      <Galerie 
        projets={data.projets.nodes}
      />
      <Contact 
        invitation={data.contact.invitation}
        photoMichel={{...data.contact.photo_michel.childImageSharp.fluid, aspectRatio: 1}}
        descriptionMichel={data.contact.description_michel}
        photoSabina={{...data.contact.photo_sabina.childImageSharp.fluid, aspectRatio: 1}}
        descriptionSabina={data.contact.description_sabina}
      />
      <Footer />
    </div>
  )
}

export default Accueil

export const query = graphql`
  {
    atelier: strapiAtelier {
      titre_couverture
      titre_atelier
      description_atelier
    }
    background: file(relativePath: {eq: "hero-background-image.jpg"}) {
      childImageSharp {
        fluid(quality:100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projets: allStrapiProjets(sort: {fields: created_at, order: DESC}) {
      nodes {
        id
        titre
        couverture {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    contact: strapiContact {
      description_michel
      description_sabina
      invitation
      photo_michel {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
      }
      photo_sabina {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
  }
`