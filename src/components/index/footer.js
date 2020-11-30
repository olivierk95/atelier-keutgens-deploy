import React from 'react'

import footerStyles from "./footer.module.scss"

const Footer = () => {
    return(
        <footer className="container">
            <div className={footerStyles.container}>
                <p className="text-small--white">
                    Réalisé par Olivier Keutgens. @2020
                </p>
            </div>
        </footer>
    )
}

export default Footer