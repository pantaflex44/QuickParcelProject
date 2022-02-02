import * as styles from "../css/App.module.scss";
import QuickParcelProjectLogo from "../../assets/QuickParcelProject.png";

import React from "react";

import Layout from "../components/Layout";

export default function About() {
    return (
        <Layout>
            <h1 className={styles.title}>A propos de ...</h1>
        </Layout>
    );
}
