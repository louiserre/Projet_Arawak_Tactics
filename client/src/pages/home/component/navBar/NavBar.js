import React, { useEffect } from "react"
//import "pages/home/style.css"
import { Link } from "react-router-dom"
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs";
//import { FaTimes} from "react-icons/fa";
import logo from "assets/brand/logo.png"


export const NavBar = () => {

  const [iconSearch,setIconSearch] = React.useState(<AiOutlineSearch/>)
  
  
  useEffect(() => {
    const body = document.querySelector('body')


    const sizeViewport = () => {
      const elementRacine = document.documentElement

      return {
        clientWidth:elementRacine.clientWidth,
        clientHeight:elementRacine.clientHeight
      }

    }
    const tailleViewport = sizeViewport()
    //console.log(tailleViewport);

    
    const navBarmenu = () => {
      
      const containerLinkNav =  document.querySelector('.containerLink')
      const cointainerLogoNav = document.querySelector('.cointainerLogo')
      const containerLinkAboutEtTrainingNav = document.querySelector('.containerAboutEtTraining')
      const iconBsChevronDownNav =  document.querySelector('.iconBsChevronDown')
      const containerLinkContactEtProfilNav = document.querySelector('.containerContactEtProfil')
      const iconAiOutlineUser = document.querySelector('.iconAiOutlineUser')

      if(body.clientWidth <= 765)  { //tailleViewport.clientWidth 
               
        containerLinkNav.classList.add("menuContainerLink")
        containerLinkNav.style.height = `${tailleViewport.clientHeight}px` 
        
        containerLinkAboutEtTrainingNav.style.display = "inherit"
        containerLinkAboutEtTrainingNav.classList.add("menuContainerAboutEtTraining")

        containerLinkContactEtProfilNav.style.display = "inherit"
        containerLinkContactEtProfilNav.classList.add("menuContainerContactEtProfil")

        cointainerLogoNav.style.display = "none"
        
        iconBsChevronDownNav.style.display = "none"
        
        iconAiOutlineUser.style.display = "none"
        
      }
      
    }
    

    const widthViewport = () => {
      
      if(body.clientWidth <= 765)  {
        setIconSearch(<AiOutlineMenu  onClick={navBarmenu}/>)
      }else{
        setIconSearch(<AiOutlineSearch/>)
      }
      
    }
    setInterval(widthViewport, 100)
             
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
            <li><Link to='/training' className="Link font">FORMATIONS<span className="iconBsChevronDown"><BsChevronDown /></span></Link></li>
          </ul>
                
          <div className="cointainerLogo">
            <Link to="/" className="linkLogo"><img src={logo} alt="logo de l'entreprise"/></Link>
          </div>

          <ul className="containerContactEtProfil">
            <li><Link to="/contact" className="Link font">CONTACT</Link></li>
            <li><Link to="/profil" className="Link font"><span className="iconAiOutlineUser"><AiOutlineUser/></span>SE CONNECTER</Link></li>
          </ul>
        </div>

        <div className="searchRight">
            <AiOutlineSearch></AiOutlineSearch>
        </div>

      </nav>
    </React.Fragment>

  )

}





