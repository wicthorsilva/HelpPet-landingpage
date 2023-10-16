import React from "react";

import styles from "./About.module.css";

import poster01 from "./img/poster01.svg"
import poster02 from "./img/poster02.svg"

const About = () => {
    return(
        <div className={styles.containerAbout}>
            <div className={styles.about} id="#about">

                <div className={styles.sectionPoster}>

                    <img className={styles.poster01} src={poster01} alt="poster" />

                    <div className={styles.posterText01}>
                        <h1>Quem somos</h1>

                        <p> 
                            Somos uma organização apaixonada por animais e dedicada a    encontrar lares 
                            amorosos para nossos queridos peludinhos. Desde 2014, temos trabalhado
                            incansavelmente para proporcionar uma vida melhor e mais feliz para os 
                            animais abandonados e maltratados.

                            Nosso compromisso é com a proteção, o respeito e o bem-estar animal. 
                            Cuidamos de cada resgatado com carinho, alimentação adequada e 
                            cuidados veterinários, preparando-os para encontrar um lar 
                            amoroso onde possam receber o afeto e a dedicação 
                            que merecem.
                        </p>
                    </div>

                </div>

                <div className={styles.sectionPoster}>
                    <div className={styles.posterText02}>
                        <p>
                        Ao adotar um pet conosco, você estará dando a um dos nossos peludinhos 
                        uma oportunidade única de encontrar um lar para chamar de seu. Junte-se 
                        a nós nessa jornada de amor, compaixão e gratidão. Conheça nossos 
                        amigáveis e encantadores pets disponíveis para adoção e descubra 
                        como eles podem encher sua vida de alegria e afeto.
                        </p>

                        <h5 className={styles.aboutCopy}>
                        Faça parte da nossa família e ajude-nos a criar um mundo melhor para 
                        os animais, um lar de cada vez. Juntos, podemos fazer a diferença 
                        e transformar vidas.
                        </h5>

                        <button>Quero fazer parte</button>
                    </div>

                    <img src={poster02} alt="poster" />
                </div>
            </div>
        </div>
    )
}

export default About;