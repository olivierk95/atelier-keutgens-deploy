import React from "react"
import { Link } from 'gatsby'

import exitButtonStyles from "./exit-button.module.scss"

const ExitButton = () => {
    return (
        <Link to="/" className={exitButtonStyles.exit}>
            <div className={exitButtonStyles.exitButton}>
                <p className={exitButtonStyles.exitCross}>X</p>
            </div>
            <p className={exitButtonStyles.exitDesc}>Quitter</p>
        </Link> 
    )
}

export default ExitButton