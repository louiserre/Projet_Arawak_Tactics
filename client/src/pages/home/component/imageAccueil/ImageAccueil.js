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





