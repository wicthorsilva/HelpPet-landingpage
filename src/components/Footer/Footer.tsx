import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerText}>
                <p>&copy;{new Date().getFullYear()} HelpPet</p>
                <p>Todos os direitos reservados</p>
                <p>Somos uma organização dedicada à adoção responsável de animais de estimação.
                    Ao adotar, você está fazendo a diferença na vida de um pet e contribuindo para
                    um mundo mais amoroso.</p>
                <p>{"[Endereço da Instituição] | Contato: [E-mail de Contato] | Telefone: [Número de Telefone]"}</p>
            </div>
        </footer>
    )
}

export default Footer;