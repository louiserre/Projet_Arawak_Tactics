import React, { useEffect } from "react"
//import "pages/home/style.css"
//import {Menu} from "pages/home/component/menuNavBar/Menu.js"
import { Link } from "react-router-dom"
import { AiOutlineSearch, AiOutlineUser, AiOutlineMenu } from "react-icons/ai"
import { BsChevronDown } from "react-icons/bs";
//import { IconName } from "react-icons/fa";
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


    
    const menu = () => {
      
      const containerLink =  document.querySelector('.containerLink')
      const cointainerLogo = document.querySelector('.cointainerLogo')
      const containerAboutEtTraining = document.querySelector('.containerAboutEtTraining')
      const iconBsChevronDown =  document.querySelector('.iconBsChevronDown')
      const containerContactEtProfil = document.querySelector('.containerContactEtProfil')
      const iconAiOutlineUser = document.querySelector('.iconAiOutlineUser')

      if(body.clientWidth <= 765)  { //tailleViewport.clientWidth 
       
        //containerLink.style.display = "inherit"
        containerLink.classList.add("menuContainerLink")
        containerLink.style.height = `${tailleViewport.clientHeight}px` // sa fonctionne c'est juste que le bloc dépasse son parent par le haut il faut rajouter ou il commence et regarder si les autres qui sont a l'interieur son la
        /*containerLink.style.top = "0"*/
        
        
        containerAboutEtTraining.style.display = "inherit"
        containerAboutEtTraining.classList.add("menuContainerAboutEtTraining")


        containerContactEtProfil.style.display = "inherit"
        containerContactEtProfil.classList.add("menuContainerContactEtProfil")

        
        cointainerLogo.style.display = "none"
        
        iconBsChevronDown.style.display = "none"
        
        iconAiOutlineUser.style.display = "none"
        
      }else{
        //containerLink.style.display = "none"
        //containerAboutEtTraining.style.display = "none"
        //cointainerLogo.style.display = "block"
        //containerContactEtProfil.style.display = "none"
        
      }
      
    }
    console.log(menu());

    const bodyWidthViewport = () => {
      //const body = document.querySelector('body')
      if(body.clientWidth <= 765)  {//body.clientWidth
        setIconSearch(<AiOutlineMenu className="pipi" onClick={menu}/>)
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





/*
 const menu = () => {
      
      const containerAboutEtTraining = document.querySelector('.containerAboutEtTraining')
      const containerContactEtProfil = document.querySelector('.containerContactEtProfil')

      if(body.clientWidth <= 765)  {
        //containerAboutEtTraining.style.display = "block"
        containerAboutEtTraining.style.display = "flex"
        containerContactEtProfil.style.display = "flex"

        containerAboutEtTraining.style.flexDirection = "column"
        containerContactEtProfil.style.flexDirection = "column"
        
      }else{
        containerAboutEtTraining.style.display = "none"
        containerContactEtProfil.style.display = "none"
      }
      
    }
*/



/*
if(body.clientWidth <= 765)  {
       
        //containerLink.classList.add("menuContainerLink")
        containerLink.style.display = "flex"
        containerLink.style.flexDirection = "column"


        //containerAboutEtTraining.classList.add("menuContainerAboutEtTraining")
        containerAboutEtTraining.style.display = "inherit"
        containerAboutEtTraining.classList.add("menuContainerAboutEtTraining")


        //containerContactEtProfil.classList.add("menuContainerContactEtProfil")
        //containerContactEtProfil.style.display = "flex"
        //containerContactEtProfil.style.flexDirection = "column"
        containerContactEtProfil.style.display = "inherit"
        containerContactEtProfil.classList.add("menuContainerContactEtProfil")

        
        cointainerLogo.style.display = "none"
        
        iconBsChevronDown.style.display = "none"
        
        iconAiOutlineUser.style.display = "none"
        
      }else{
        containerLink.style.display = "none"
        containerAboutEtTraining.style.display = "none"
        //cointainerLogo.style.display = "block"
        containerContactEtProfil.style.display = "none"
        
      }
*/