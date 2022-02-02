import * as styles from "../css/App.module.scss";
import QuickParcelProjectLogo from "../../assets/QuickParcelProject.png";

import React from "react";

import Layout from "../components/Layout";

export default function Index() {
    return (
        <Layout>
            <h1 className={styles.title}>
                QuickParcelProject with Parcel, Sass, React and Jest
            </h1>
            <img src={QuickParcelProjectLogo} alt="QuickParcelProject" />
        </Layout>
    );
}
