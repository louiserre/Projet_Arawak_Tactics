import React, { useEffect } from "react"
//import "pages/home/style.css"
//import {Menu} from "pages/home/component/menuNavBar/Menu.js"
import { Link } from "react-router-dom"
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs";
import logo from "assets/brand/logo.png"
//AiOutlineMenu

export const NavBar = () => {
  
  const [iconSearch,setIconSearch] = React.useState(<AiOutlineSearch/>)
    
  useEffect(() => {
    const body = document.querySelector('body')

    const bodyWidthViewport = () => {
      
      if(body.clientWidth <= 765)  {
        setIconSearch(<AiOutlineMenu/>)
      }else{
        setIconSearch(<AiOutlineSearch/>)
      }
      
    }
  
    setInterval(bodyWidthViewport, 100)
             
  },[])

  return (

    <React.Fragment>
      <nav className="navBar">

        <div className="iconMenuOuSearch">
                    
            {iconSearch}
          
        </div>

        <div className="containerLink">
          <ul className="containerAboutEtTraining">
            <li><Link to='/about' className="Link font">A PROPOS</Link></li>
            <li><Link to='/training' className="Link font">FORMATIONS<BsChevronDown /></Link></li>
          </ul>
                
          <div className="cointainerLogo">
            <Link to="/" className="linkLogo"><img src={logo} alt="logo de l'entreprise"/></Link>
          </div>

          <ul className="containerContactEtProfil">
            <li><Link to="/contact" className="Link font">CONTACT</Link></li>
            <li><Link to="/profil" className="Link font"><AiOutlineUser/>SE CONNECTER</Link></li>
          </ul>
        </div>

        <div className="searchRight">
            <AiOutlineSearch></AiOutlineSearch>
        </div>

      </nav>
    </React.Fragment>

  )

}



