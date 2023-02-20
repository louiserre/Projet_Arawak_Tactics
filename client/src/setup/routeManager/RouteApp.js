import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {About} from "pages/about/About"
import {Account} from "pages/account/Account"
import {Contact} from "pages/contact/Contact"
import {Home} from "pages/home/Home"
import {Profil} from "pages/profil/Profil"
import {Training} from "pages/training/Training"





export const RouteApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/about" element={<About/>}/>
                <Route path="/account" element={<Account/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/profil" element={<Profil/>}/>
                <Route path="/training" element={<Training/>}/>
                
            </Routes>
    </BrowserRouter>
        
    )
}