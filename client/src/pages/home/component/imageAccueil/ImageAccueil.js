import React from 'react'
import "pages/home/style.css"
import {NavBar} from "pages/home/component/navBar/NavBar.js"


export const ImageAccueil = () => {
              
      
    return (

        <React.Fragment>
            <header className='imageAccueil animationImageAccueil'>

                <NavBar></NavBar>
                <div className='h2Header animationH1'>LA PERFORMANCE A VOTRE DEMANDE</div>
                               
               
            </header>

        </React.Fragment>
         
    )
}



///////////////// test ///////////////////////////////////////

/*
window.addEventListener("load",() => {
        let header = document.querySelector(".imageAccueilPageHome")

        setTimeout(() => {
            header.classList.add("imageAccueil")
            
        },300)

        setTimeout(() => {
            setH1(<h1 className='h1Header'>LA PERFORMANCE A VOTRE DEMANDE</h1>)
            
        },800)
    })
*/

/*
 <React.Fragment>
            <header className='imageAccueilPageHome'>
                <div>NavBar</div>
                
                {h1}
                
               
                </header>

                </React.Fragment>
*/

