import React from "react"
import { Link } from "gatsby"

import navButtonsStyles from "./nav-buttons.module.scss"

const NavButtons = ({previousSlug, nextSlug}) => {
    return (
        <div className={navButtonsStyles.container}>
            { previousSlug &&
                <Link to={previousSlug} className={navButtonsStyles.link}>
                    <div className={navButtonsStyles.button}>
                        <p className={navButtonsStyles.arrow}>{`<`}</p>
                    </div>
                </Link>
            }
            { nextSlug &&
                <Link to={nextSlug} className={navButtonsStyles.link}>
                    <div className={navButtonsStyles.button}>
                        <p className={navButtonsStyles.arrow}>{`>`}</p>
                    </div>
                </Link>
            }
        </div>
    )
}

export default NavButtons