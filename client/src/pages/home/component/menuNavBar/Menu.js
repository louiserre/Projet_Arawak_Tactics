import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom"

export const Menu = () => {

    const handleClick = () => {
        let divLinkMenu = document.querySelector(".divLinkMenu")
        
        return divLinkMenu.classList.add("divLinkMenuBlock")
    }
    

    return (
        <React.Fragment>
            <div className="menu" onClick={handleClick}>
                <AiOutlineMenu></AiOutlineMenu>
            </div>

            <div className="divLinkMenu">
            <Link to='/about' className="LinkMenuMargin">A PROPOS</Link>
            <Link to='/training' className="LinkMenuMargin">FORMATIONS</Link>
            <Link to="/contact" className="LinkMenuMargin">CONTACT</Link>
            <Link to="/profil" className="LinkMenuMargin">SE CONNECTER</Link>
            </div>
        </React.Fragment>
    )
}