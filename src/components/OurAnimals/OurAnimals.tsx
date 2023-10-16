import React from "react";

import styles from "./OurAnimals.module.css";

import dogCatPoster from "./img/dog-cat.svg";
import imgPet01 from "./img/imgPet01.jpg";

const OurAnimals = () => {
    return(
        <section className={styles.containerOurAnimals}>

            <div className={styles.posterOurAnimals}>
                <div className={styles.posterImg}>
                    <img src={dogCatPoster} alt="" />
                </div>

                <div className={styles.posterText}>
                    <div className={styles.cardText}>
                        <h2>Conheça nossos animais</h2>
                        <p>Nossos animais são provenientes de situações variadas, 
                            mas todos eles têm algo em comum: o desejo de 
                            encontrar um lar onde possam compartilhar amor, 
                            alegria e momentos inesquecíveis.</p>
                    </div>
                </div>
            </div>

            <div className={styles.cardsOurAnimals}>
                    <h1 className={styles.titlePage}>Bem-vindo à nossa galeria de amigos peludos em 
                    busca de um novo lar!</h1>


                <div className={styles.Cards}>
                    <div className={styles.petCard}>
                        <img src={imgPet01} alt={`${name} - Pet`} className={styles.petImage} />

                        <div className={styles.petDetails}>
                            <h2 className={styles.petName}>Amora</h2>
                            <p className={styles.infoPet}>Adulto</p>
                            <p className={styles.infoPet}>Porte Pequeno</p>
                        </div>
                            <button className={styles.buttonCardPet}>Saiba Mais</button>
                    </div>
                    <div className={styles.petCard}>
                        <img src={imgPet01} alt={`${name} - Pet`} className={styles.petImage} />

                        <div className={styles.petDetails}>
                            <h2 className={styles.petName}>Amora</h2>
                            <p className={styles.infoPet}>Faxa etaria</p>
                            <p className={styles.infoPet}>Porte: Médio</p>
                        </div>
                            <button className={styles.buttonCardPet}>Saiba Mais</button>
                    </div>
                    <div className={styles.petCard}>
                        <img src={imgPet01} alt={`${name} - Pet`} className={styles.petImage} />

                        <div className={styles.petDetails}>
                            <h2 className={styles.petName}>Amora</h2>
                            <p className={styles.infoPet}>Faxa etaria</p>
                            <p className={styles.infoPet}>Porte: Médio</p>
                        </div>
                            <button className={styles.buttonCardPet}>Saiba Mais</button>
                    </div>
                    <div className={styles.petCard}>
                        <img src={imgPet01} alt={`${name} - Pet`} className={styles.petImage} />

                        <div className={styles.petDetails}>
                            <h2 className={styles.petName}>Amora</h2>
                            <p className={styles.infoPet}>Faxa etaria</p>
                            <p className={styles.infoPet}>Porte: Médio</p>
                        </div>
                            <button className={styles.buttonCardPet}>Saiba Mais</button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default OurAnimals;