import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import OurAnimals from "../../components/OurAnimals";
import AdoptionStep from "../../components/AdoptionStep";



const LandingPage = () => {
    return(
        <section>
            <Header/>
            <About />
            <OurAnimals />
            <AdoptionStep />
        </section>
    )
}

export default LandingPage;