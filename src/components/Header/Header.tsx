import React from "react";

import BannerPet from "./img/Dev_banner-pet.png";

import styles from "./Header.module.css";

const Header = () => {
    return(
        <header>
            <div className={styles.contentHeader}>
                <img src={BannerPet} alt="banner-helppet" />
            </div>
        </header>
    )
}

export default Header;