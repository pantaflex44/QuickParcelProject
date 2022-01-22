import React from "react";

import { wait } from "./js/functions";

import * as styles from "./css/App.module.scss";

import QuickParcelProjectLogo from "../assets/QuickParcelProject.png";

export default function App() {
    return (
        <div className={styles.home}>
            <h1 className={styles.title}>
                QuickParcelProject with Parcel, Sass, React and Jest
            </h1>
            <img src={QuickParcelProjectLogo} alt="QuickParcelProject" />
        </div>
    );
}
