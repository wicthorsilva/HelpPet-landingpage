import React from "react";

import styles from "./AdoptionStep.module.css";

import dogImg from "./img/dog-helpet.svg";

const AdoptionStep = () => {
    return (
        <div className={styles.sectionAdoptionStep}>
            <h1>Passos para a adoção do seu pet</h1>
            <div className={styles.contentAdoptionStep}>
                <div className={styles.contentInfo}>
                    <div className={styles.cardText}>
                        <p><strong>Formulário de Adoção: </strong>Você precisará preencher um formulário de adoção fornecido
                            pela instituição. Este formulário contém informações  sobre você, sua experiência com
                            animais, estilo de vida e a razão pela qual deseja adotar um pet.</p>
                    </div>
                    <div className={styles.cardText}>
                        <p><strong>Entrevista: </strong>A instituição irá agendar uma entrevista ou conversa com você para entender
                            melhor suas motivações para adotar um animal de estimação e garantir que o animal
                            escolhido seja compatível com seu estilo de vida.</p>
                    </div>
                    <div className={styles.cardText}>
                        <p><strong>Verificação de Informações: </strong>A instituição pode verificar suas informações, como sua
                            identificação, endereço e possivelmente fazer uma verificação
                            de histórico de adoções anteriores.</p>
                    </div>
                    <div className={styles.cardText}>
                        <p><strong>Avaliação do Lar: </strong>Em alguns casos, um representante da instituição pode fazer
                            uma visita ao seu lar para verificar se é um ambiente seguro e adequado
                            para o animal.</p>
                    </div>
                </div>

                <div className={styles.contentImg}>
                    <img src={dogImg} alt="dogImg" />
                </div>
            </div>
        </div>
    )
}

export default AdoptionStep;