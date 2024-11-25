import React from "react";
import NavBar from "./Portfolio/Navbar/Navbar";
import Home from "./Portfolio/Home/Home";
import About from "./Portfolio/About/About"; 
import Skills from "./Portfolio/Skills/Skills";
import Contact from "./Portfolio/Contact/Contact";
import Work from "./Portfolio/Works/Work";


function App() {
    return (
        <>
            <NavBar />
            <section id="Home"><Home /></section>
            <section id="About"><About /></section>
            <section id="Skills"><Skills /></section> 
            <section id="Works"><Work /></section> 
            <section id="Contact"><Contact /></section>

        </>
    );
}

export default App;
