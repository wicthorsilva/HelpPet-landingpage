import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import OurAnimals from "../../components/OurAnimals";
import AdoptionStep from "../../components/AdoptionStep";
import Footer from "../../components/Footer";



const LandingPage = () => {
    return(
        <section>
            <Header/>
            <About />
            <OurAnimals />
            <AdoptionStep />
            <Footer />
        </section>
    )
}

export default LandingPage;