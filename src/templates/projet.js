import React from "react"
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'

import ExitButton from "../components/ui/exit-button"
import NavButtons from "../components/ui/nav-buttons"
import Gallery from "../components/projet/gallery"

import "../styles/main.scss"
import projetStyles from "./projet.module.scss"

const slugify = require("slugify")

const Projet = ({ data }) => {
  const currentPageIndex = data.nav.nodes.findIndex(node => node.titre === data.projet.titre)

    return (
        <div className={projetStyles.body}>
            <SEO title={data.projet.titre} image={`${data.site.siteMetadata.url}${data.projet.carousel[0].url}`} url={`${data.site.siteMetadata.url}/${slugify(data.projet.titre)}`}/> 
            <section className={projetStyles.projet}>
              <div className={projetStyles.uiNavContainer}>
                <div className={projetStyles.uiNav}>
                  <ExitButton />
                  <NavButtons
                    previousSlug={currentPageIndex === 0 ? false : `/${slugify(data.nav.nodes[currentPageIndex - 1].titre)}`}
                    nextSlug={currentPageIndex === data.nav.nodes.length - 1 ? false :`/${slugify(data.nav.nodes[currentPageIndex + 1].titre)}`}
                  />
                </div>
              </div>
              <h1 className={`h2 ${projetStyles.title}`}>{data.projet.titre}</h1>
              <Gallery
                title={data.projet.titre}
                images={data.projet.carousel}
              />
            </section>
            <section className={projetStyles.nav}>
              <div className={projetStyles.navContainer}>
                <h2 className={`h2--white ${projetStyles.navTitle}`}>Projets</h2>
                <div className={projetStyles.navItems}>
                  {data.nav.nodes.map(node =>
                    <Link key={node.id} to={`/${slugify(node.titre)}`} className={projetStyles.navLink} activeClassName={projetStyles.navLinkActive}>
                      <svg viewBox="0 0 100 100" xmlns="https://www.w3.org/2000/svg" className={projetStyles.circle}>
                        <circle cx="50" cy="50" r="50" />
                      </svg>
                      <p className={`text-normal--white ${projetStyles.navLinkTitle}`}>{node.titre}</p>
                    </Link>)
                  }
                </div>
              </div>
            </section>
        </div>
    )
}

export default Projet

export const query = graphql`
  query ($id: String!) {
    projet: strapiProjets (id: {eq: $id}) {
      id
      titre
      carousel {
        id
        alternativeText
        caption
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        url
      }
    }
    nav: allStrapiProjets(sort: {fields: created_at, order: DESC}) {
      nodes {
        id
        titre
      }
    }
    site {
      siteMetadata {
          url
      }
    }
}`