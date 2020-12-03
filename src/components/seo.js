import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    image
                    author
                    url
                }
            }
        }
    `)

    const title = props.title || data.site.siteMetadata.title;
    const description = props.description || data.site.siteMetadata.description;
    const image = props.image || data.site.siteMetadata.image;;
    const url = props.url || data.site.siteMetadata.url;
    
    return(
        <Helmet>
            {/* General tags */}
            <title>{`${props.title} | ${data.site.siteMetadata.title}`}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
}

export default SEO