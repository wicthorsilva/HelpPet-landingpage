import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import OurAnimals from "../../components/OurAnimals";



const LandingPage = () => {
    return(
        <section>
            <Header/>
            <About />
            <OurAnimals />
        </section>
    )
}

export default LandingPage;