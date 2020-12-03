import React from "react"
import Img from "gatsby-image"

import galleryStyles from "./gallery.module.scss"

const Gallery = ({title, images}) => {
    return (
        <ul className={`container ${galleryStyles.container}`}>
            {images.map(image => 
                <li className={galleryStyles.item} key={image.id}>
                    <Img fluid={image.localFile.childImageSharp.fluid} className={galleryStyles.image} imgStyle={{objectFit: "contain"}} alt={image.alternativeText? image.alternativeText : title}/>
                    {image.caption && <p className={`text-normal ${galleryStyles.caption}`}>{image.caption}</p>}
                </li>
            )}
        </ul>
    )
}

export default Gallery