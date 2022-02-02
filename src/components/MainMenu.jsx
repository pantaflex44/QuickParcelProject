import React from "react";
import { Link } from "react-router-dom";

import * as styles from "../css/App.module.scss";

export default function MainMenu() {
    return (
        <nav>
            <ul className={styles.mainMenu}>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A propos de...</Link>
                </li>
            </ul>
        </nav>
    );
}
