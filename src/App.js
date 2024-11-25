import React from "react";
import NavBar from "./Portfolio/Navbar/Navbar";
import Home from "./Portfolio/Home/Home";
import About from "./Portfolio/About/About"; 
import Skills from "./Portfolio/Skills/Skills";
import Contact from "./Portfolio/Contact/Contact";
import Work from "./Portfolio/Works/Work";

const events = [
    {
        title: "Joined Company",
        date: "Jan 2019",
        description: "Started as a junior developer at XYZ company."
    },
    {
        title: "Promotion",
        date: "Dec 2020",
        description: "Promoted to a mid-level developer."
    },
    {
        title: "Lead Developer",
        date: "Oct 2022",
        description: "Became the lead developer on Project Alpha."
    }
];

function App() {
    return (
        <>
            <NavBar />
            <section id="Home"><Home /></section>
            <section id="About"><About /></section>
            <section id="Skills"><Skills /></section> 
            <section id="Works"><Work /></section> 
            <section id="Contact"><Contact /></section>

            <div className="App">
                <h1>My Career Timeline</h1>
                <Timeline events={events} />
            </div>
        </>
    );
}

export default App;
