import React from "react";

import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className={styles.contentNavbar}>
                <div className={styles.logo}>
                    <h2 className={styles.textHelp}>HELP<a className={styles.colorPet}>PET</a></h2>
                </div>
                <ul className={styles.navList}>
                    <NavLink to="/">
                        <li>Início</li>
                    </NavLink>
                    <NavLink to="/#about">
                        <li>Quem somos</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Animais</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Adoção</li>
                    </NavLink>
                    <NavLink to="/">
                        <li>Contato</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;